import React, { useEffect, useState } from 'react'
import { Row, Col, Card, Table, Dropdown } from 'react-bootstrap'

const thArray = ["ID", "Name", "Salary", "Country", "City"]
const tdArray = [
  ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
  ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
  ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
  ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
  ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
  ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
]

const Tables = () => {
  const ToggleLink = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="#"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      data-toggle="dropdown"
    >
      {children}
    </a>
  ))

  return (
    <Row>
      <Col sm={12} className="d-flex">
        <Card className="flex-fill">
          <Card.Header>
            <div className="card-actions float-right">
              <Dropdown alignRight>
                <Dropdown.Toggle as={ToggleLink} variant="success" id="dropdown-basic">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal align-middle"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <h5 className="card-title mb-0">Projects</h5>
          </Card.Header>
          <Card.Body className="d-flex">
            <Table striped hover>
              <thead>
                <tr>
                  {thArray.map((prop, key) => {
                    return <th key={key}>{prop}</th>;
                  })}
                </tr>
              </thead>
              <tbody>
                {tdArray.map((prop, key) => {
                  return (
                    <tr key={key}>
                      {prop.map((prop, key) => {
                        return <td key={key}>{prop}</td>;
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Tables