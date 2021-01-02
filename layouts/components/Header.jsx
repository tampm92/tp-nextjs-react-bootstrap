import React, { Component } from 'react'
import Link from 'next/link'

import NavbarLinks from '@/layouts/components/Navbar/NavbarLinks'

const logo = '/img/reactlogo.png'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 1000,
      pathname: 'home'
    }
  }
  activeRoute(routeName) {
    return this.state.pathname.indexOf(routeName) > -1 ? 'active' : ''
  }
  updateDimensions() {
    this.setState({ width: 1000 })
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }
  render() {
    const sidebarBackground = {
      backgroundImage: 'url(' + this.props.image + ')'
    };
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
          {this.props.hasImage ? (
            <div className="sidebar-background" style={sidebarBackground} />
          ) : (
            null
          )}
        <div className="logo">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini"
          >
            <div className="logo-img">
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-normal"
          >
            Creative Tim
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav d-block">
            {this.state.width <= 991 ? <NavbarLinks /> : null}
            {this.props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
                    className={this.activeRoute(prop.layout + prop.path)}
                    key={key}
                  >
                    <Link href={prop.layout + prop.path}>
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
    );
  }
}

export default Header
