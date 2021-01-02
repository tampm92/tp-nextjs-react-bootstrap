import { Container, Row, Col, Dropdown, Card, Button } from 'react-bootstrap'

import '@/assets/styles/Home.scss'

export default function Home() {
  return (
    <div className="content min-vh-100">
      <Container fluid>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={6}>
          </Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    </div>
  )
}
