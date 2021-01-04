import React, { Component } from 'react'
import { Container, Row, Col, Card, Media } from 'react-bootstrap'

import '@/assets/sass/HomePage.scss'

import Overview from '@/components/partials/HomePage/Overview'
import Charts from '@/components/partials/HomePage/Charts'
import Tables from '@/components/partials/HomePage/Tables'

class HomePage extends Component {
  render() {
    return (
      <div className="content min-vh-100">
        <Container fluid>
          <Overview />
          <Charts />
          <Tables />
        </Container>
      </div>
    )
  }
}

export default HomePage