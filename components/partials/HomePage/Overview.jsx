import React, { Component } from 'react'
import { Row, Col, Card, Media } from 'react-bootstrap'

class Overview extends Component {
  render() {
    return (
      <Row>
        <Col lg={3} sm={6} className="d-flex">
          <Card className="illustration flex-fill">
            <Card.Body className="p-0 d-flex flex-fill">
              <div className="row no-gutters w-100">
                <div className="col-6">
                  <div className="illustration-text p-3 m-1">
                    <h4 className="illustration-text">Welcome!</h4>
                    <p className="mb-0">TP NextJS Bootstrap Dashboard</p>
                  </div>
                </div>
                <div className="col-6 align-self-end text-right">
                  <img src="https://appstack.bootlab.io/img/illustrations/customer-support.png" alt="Customer Support" className="img-fluid illustration-img" />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6} className="d-flex">
          <Card className="flex-fill">
            <Card.Body className="py-4">
              <Media>
                <Media.Body>
                  <h3 className="mb-2">$ 24.300</h3>
                  <p className="mb-2">Total Earnings</p>
                  <div className="mb-0">
                    <span className="badge badge-soft-success mr-2"> <i className="mdi mdi-arrow-bottom-right"></i> +5.35% </span>
                    <span className="text-muted">Since last week</span>
                  </div>
                </Media.Body>
                <div className="d-inline-block ml-3">
                  <div className="stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign align-middle text-success"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                </div>
              </Media>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6} className="d-flex">
          <Card className="flex-fill">
            <Card.Body className="py-4">
              <Media>
                <Media.Body>
                  <h3 className="mb-2">43</h3>
                  <p className="mb-2">Pending Orders</p>
                  <div className="mb-0">
                    <span className="badge badge-soft-danger mr-2"> <i className="mdi mdi-arrow-bottom-right"></i> -4.25% </span>
                    <span className="text-muted">Since last week</span>
                  </div>
                </Media.Body>
                <div className="d-inline-block ml-3">
                  <div className="stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag align-middle text-danger"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                  </div>
                </div>
              </Media>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} sm={6} className="d-flex">
          <Card className="flex-fill">
            <Card.Body className="py-4">
              <Media>
                <Media.Body>
                  <h3 className="mb-2">$ 18.700</h3>
                  <p className="mb-2">Total Revenue</p>
                  <div className="mb-0">
                    <span className="badge badge-soft-success mr-2"> <i className="mdi mdi-arrow-bottom-right"></i> +8.65% </span>
                    <span className="text-muted">Since last week</span>
                  </div>
                </Media.Body>
                <div className="d-inline-block ml-3">
                  <div className="stat">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign align-middle text-info"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                  </div>
                </div>
              </Media>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default Overview