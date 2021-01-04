import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import CleanLayout from '@/layouts/clean'

const LoginPage = () => {
  return (
    <Container className="d-flex flex-column">
      <Row className="h-100">
        <Col className="d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="text-center mt-4">
              <h1 className="h2">Welcome back</h1>
              <p className="lead">
                Sign in to your account to continue
              </p>

              <Button variant="primary" href="/">
                Sign in by Google
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

LoginPage.layout = CleanLayout

export default LoginPage