import React, { Component } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import CleanLayout from '@/layouts/clean'
import { useAuth } from '@/auth'

const LoginPage = () => {
  const { signIn } = useAuth()

  const tpSignIn = async () => {
    await signIn()
  }

  return (
    <Container className="d-flex flex-column">
      <Row className="h-100">
        <Col className="d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="text-center mt-4">
              <h1 className="h2">Welcome</h1>
              <p className="lead">
                Sign in to your account to continue
              </p>

              <Button variant="primary"
                onClick={tpSignIn}
              >
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