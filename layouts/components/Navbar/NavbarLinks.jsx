import React, { Component } from 'react'
import { Nav, NavDropdown, Image } from 'react-bootstrap'

class NavbarLinks extends Component {
  render() {
    const account = (
      <Image className="account" src="https://demos.creative-tim.com/light-bootstrap-dashboard-react/static/media/face-3.ce7a6b79.jpg" roundedCircle />
    )

    const lang = (
      <i className="fa fa-globe" />
    )

    return (
      <>
        <Nav className="mr-auto">
          <Nav.Link href="#">
            <i className="fa fa-dashboard" />
          </Nav.Link>
          <Nav.Link href="#">
            <i className="fa fa-search" />
            <p className="d-lg-none d-md-none">Search</p>
          </Nav.Link>
        </Nav>
        <Nav>
          <NavDropdown alignRight title={lang} id="collasible-nav-dropdown-lang">
            <NavDropdown.Item href="#lang/en">EN</NavDropdown.Item>
            <NavDropdown.Item href="#lang/fr">FR</NavDropdown.Item>
            <NavDropdown.Item href="#lang/vn">VN</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={account} id="collasible-nav-dropdown-account" alignRight>
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </>
    );
  }
}

export default NavbarLinks
