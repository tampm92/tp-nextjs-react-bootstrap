import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import NavbarLinks from '@/layouts/components/Navbar/NavbarLinks'
import TpLogo from '@/assets/svg/TpLogo.svg'

const logo = '/img/reactlogo.png'

const Sidebar = (props) => {
  const { asPath } = useRouter()
  const activeRoute = (href) => {
    return asPath === href ? 'active' : ''
  }

  return (
    <div
      id="sidebar"
      className="sidebar"
      data-color={props.color}
      data-image={props.image}
    >
        {props.hasImage ? (
          <div className="sidebar-background" style={sidebarBackground} />
        ) : (
          <div className="sidebar-background" style={{backgroundColor: props.color}} />
        )}
      <div className="logo">
        <a
          href="https://tampm.com"
          target="_blank"
          className="simple-text logo-mini"
        >
          <div className="logo-img">
            <TpLogo />
          </div>
        </a>
        <a
          href="https://tampm.com"
          target="_blank"
          className="simple-text logo-normal"
        >
          Tam Phan
        </a>
      </div>
      <div className="sidebar-wrapper">
        <ul className="nav d-block">
          {props.routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={activeRoute(prop.path)}
                  key={key}
                >
                  <Link href={prop.path}>
                    <a className="nav-link">
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </a>
                  </Link>
                </li>
              );
            return null
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
