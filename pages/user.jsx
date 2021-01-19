import React, { Component } from 'react'
import { Container, Row, Col, Card, Media } from 'react-bootstrap'

import '@/assets/sass/UserPage.scss'

import { useAuth } from '@/auth'
import Details from '@/components/partials/UserPage/Details'
import Edit from '@/components/partials/UserPage/Edit'

const UserPage = () => {
  const { user } = useAuth()

  return (
    <div className="content min-vh-100">
      <Container fluid>
        <Row>
          <Col lg={4} sm={12}>
            <Details user={user} />
          </Col>
          <Col lg={8} sm={12}>
            <Edit />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserPage