import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'

import NavbarLinks from '@/layouts/components/Navbar/NavbarLinks'

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="navbar-default">
        <Navbar.Brand href="#">{this.props.brandText}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <NavbarLinks />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header
