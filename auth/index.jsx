import React, { useState, useEffect, useContext, createContext } from 'react'
import { useRouter } from 'next/router'

import { auth, GoogleAuthProvider } from '@/auth/fireinit'
import routes from '@/auth/routes'

const AuthContext = createContext({
  isAuthenticated: false,
  user: {},
  isLoading: true,
  signIn: null,
  signOut: null
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    return auth.onAuthStateChanged(async (user) => {
      console.log(`token changed!`)
      
      if (!user) {
        console.log(`no token found...`)
        setUser(null)
      } else {
        console.log(`updating token...`, user)
        setUser(user)
      }
      
      setLoading(false)
    })
  }, [])

  const signIn = async () => {
    setLoading(true)
    return new Promise((resolve, reject) => {
      auth.signInWithRedirect(GoogleAuthProvider)
      setLoading(false)
      resolve()
    })
  }

  const signOut = async () => {
    setLoading(true)
    return new Promise((resolve, reject) => {
      auth.signOut().then(() => {
        setLoading(false)
        resolve()
      }).catch(err => {
        setLoading(false)
        reject(err)
      })
    })
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated: !!user, user, isLoading, signIn, signOut }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export const ProtectRoute = ({ children }) => {
  const router = useRouter()
  const { isAuthenticated, isLoading } = useAuth()
  if (isLoading){
    return (<>
      <div className="loading">
        <div className="loader">Loading...</div>
      </div>
    </>)
  }

  if (isAuthenticated && window.location.pathname === '/login') {
    router.push('/')
    return <></>
  }

  if (!isAuthenticated) {
    const currentRouter = routes.find(router => router.path === window.location.pathname)

    if (currentRouter && currentRouter.isProtected) {
      router.push('/login')
      return <></>
    }
  }

  return children
}