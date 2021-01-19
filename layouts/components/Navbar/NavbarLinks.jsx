import React, { Component } from 'react'
import { Nav, NavDropdown, Image } from 'react-bootstrap'

import { useAuth } from '@/auth'

const NavbarLinks = () => {
  const { isAuthenticated, user, signOut } = useAuth()

  const lang = (
    <i className="fa fa-globe" />
  )

  const tpSignOut = async () => {
    await signOut()
  }

  return (
    <>
      <Nav className="mr-auto navbar-nav">
        <Nav.Link href="#">
          <i className="fa fa-dashboard" />
        </Nav.Link>
        <Nav.Link href="#">
          <i className="fa fa-search" />
          <p className="d-lg-none d-md-none">Search</p>
        </Nav.Link>
      </Nav>
      <Nav className="navbar-nav">
        <NavDropdown title={lang} id="collasible-nav-dropdown-lang" alignRight>
          <NavDropdown.Item href="#lang/en">EN</NavDropdown.Item>
          <NavDropdown.Item href="#lang/fr">FR</NavDropdown.Item>
          <NavDropdown.Item href="#lang/vn">VN</NavDropdown.Item>
        </NavDropdown>
        { !isAuthenticated && <> 
          <Nav.Link href="/login">
            <i className="fa fa-sign-in fa-lg" />
            <p className="d-lg-none d-md-none">Login</p>
          </Nav.Link>
        </>
        }
        { isAuthenticated && <> 
          <NavDropdown title={
            <Image className="account" src={user.photoURL} roundedCircle />
          } id="collasible-nav-dropdown-account" alignRight>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={tpSignOut}>Logout</NavDropdown.Item>
          </NavDropdown>
        </>
        }
      </Nav>
    </>
  )
}

export default NavbarLinks
