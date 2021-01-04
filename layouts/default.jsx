import React, { Component } from 'react'

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

class DefaultLayout extends Component {
  render() {
    const { children } = this.props
    const imageUrl = '/img/sidebar-3.jpg'
    const hasImage = false
    const color = '#00e874'

    return (
      <div className="wrapper">
        <Sidebar routes={routes} image={imageUrl} color={color} hasImage={hasImage} />
        <div id="main-panel" className="main-panel">
          <Navbar brandText="Dashboard"/>
          {children}
          <Footer />
        </div>
      </ div>
    )
  }
}

export default DefaultLayout