import React, { Component } from 'react'
import { useRouter } from 'next/router'

import Sidebar from '@/layouts/components/Sidebar'
import Navbar from '@/layouts/components/Navbar'
import Footer from '@/layouts/components/Footer'

const routes = [{
  path: '/',
  name: 'Dashboard',
  icon: 'pe-7s-graph',
},
{
  path: '/user',
  name: 'User Profile',
  icon: 'pe-7s-user',
}]

const DefaultLayout = (props) => {
  const imageUrl = '/img/sidebar-3.jpg'
  const hasImage = false
  const color = '#00e874'
  const { asPath } = useRouter()

  const getCurrentBrandText = () => {
    const currentBrandText = routes.find(route => {
      return asPath === route.path
    })

    return currentBrandText ? currentBrandText.name : 'Brand'
  }

  return (
    <div className="wrapper">
      <Sidebar routes={routes} image={imageUrl} color={color} hasImage={hasImage} />
      <div id="main-panel" className="main-panel">
        <Navbar brandText={getCurrentBrandText()}/>
        {props.children}
        <Footer />
      </div>
    </ div>
  )
}

export default DefaultLayout