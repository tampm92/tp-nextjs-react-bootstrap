import React from 'react'

import Header from '@/layouts/components/Header'
import Navbar from '@/layouts/components/Navbar'
import Footer from '@/layouts/components/Footer'

const routes = [{
  path: '/dashboard',
  name: 'Dashboard',
  icon: 'pe-7s-graph',
  layout: '/admin'
},
{
  path: '/user',
  name: 'User Profile',
  icon: 'pe-7s-user',
  layout: '/admin'
}]

const DefaultLayout = ({ children }) => {
  const imageUrl = '/img/sidebar-3.jpg'
  const hasImage = true
  const color = 'black'

  return (
    <div className="wrapper">
      <Header routes={routes} image={imageUrl} color={color} hasImage={hasImage} />
      <div id="main-panel" className="main-panel">
        <Navbar brandText="Dashboard"/>
        {children}
        <Footer />
      </div>
    </ div>
  )
}

export default DefaultLayout