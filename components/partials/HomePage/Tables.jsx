import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'

import TpCard from '@/components/common/Card'

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
  return (
    <Row>
      <Col sm={12} className="d-flex">
        <TpCard title="Projects" className="flex-fill">
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
        </TpCard>
      </Col>
    </Row>
  )
}

export default Tables