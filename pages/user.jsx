import React, { Component } from 'react'
import { Container, Row, Col, Card, Media } from 'react-bootstrap'

import '@/assets/sass/UserPage.scss'

import Details from '@/components/partials/UserPage/Details'
import Edit from '@/components/partials/UserPage/Edit'

class UserPage extends Component {
  render() {
    return (
      <div className="content min-vh-100">
        <Container fluid>
          <Row>
            <Col lg={4} sm={12}>
              <Details />
            </Col>
            <Col lg={8} sm={12}>
              <Edit />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default UserPage