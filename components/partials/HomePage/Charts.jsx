import React, { useEffect, useState } from 'react'
import { Bar, Doughnut } from '@reactchartjs/react-chart.js'
import { Row, Col, Card, Table, Dropdown } from 'react-bootstrap'

const rand = () => Math.floor(Math.random() * 255)

const genData = () => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      type: 'line',
      label: 'Dataset 1',
      borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      borderWidth: 2,
      fill: false,
      data: [rand(), rand(), rand(), rand(), rand(), rand()],
    },
    {
      type: 'bar',
      label: 'Dataset 2',
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
      data: [rand(), rand(), rand(), rand(), rand(), rand(), rand()],
    },
  ],
})

const optionsBar = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const dataDoughnut = {
  labels: ['Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: '# of Votes',
      data: [19, 3, 5, 2],
      backgroundColor: [
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

const Charts = () => {
  const [dataBar, setDataBar] = useState(genData())

  useEffect(() => {
    const interval = setInterval(() => setDataBar(genData()), 5000)

    return () => clearInterval(interval)
  }, [])

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
      <Col lg={8} sm={12} className="d-flex">
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
            <h5 className="card-title mb-0">Revenue</h5>
          </Card.Header>
          <Card.Body className="d-flex">
            <Bar data={dataBar} options={optionsBar} />
          </Card.Body>
        </Card>
      </Col>

      <Col lg={4} sm={12} className="d-flex">
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
            <h5 className="card-title mb-0">Weekly sales</h5>
          </Card.Header>
          <Card.Body className="d-flex">
            <div className="align-self-center w-100">
                <div className="py-3">
                  <Doughnut data={dataDoughnut} />
                </div>

                <Table hover>
                  <thead>
                    <tr>
                      <th>Source</th>
                      <th className="text-right">Revenue</th>
                      <th className="text-right">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Blue</td>
                      <td className="text-right">$ 2602</td>
                      <td className="text-right text-success">+43%</td>
                    </tr>
                    <tr>
                      <td>Yellow</td>
                      <td className="text-right">$ 1253</td>
                      <td className="text-right text-success">+13%</td>
                    </tr>
                    <tr>
                      <td>Green</td>
                      <td className="text-right">$ 541</td>
                      <td className="text-right text-success">+24%</td>
                    </tr>
                    <tr>
                      <td>Purple</td>
                      <td className="text-right">$ 1465</td>
                      <td className="text-right text-success">+11%</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Charts