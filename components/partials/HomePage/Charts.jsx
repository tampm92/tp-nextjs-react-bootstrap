import React, { useEffect, useState } from 'react'
import { Bar, Doughnut } from '@reactchartjs/react-chart.js'
import { Row, Col, Table } from 'react-bootstrap'

import TpCard from '@/components/common/Card'

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

  return (
    <Row>
      <Col lg={8} sm={12} className="d-flex">
        <TpCard title="Revenue" className="flex-fill">
          <Bar data={dataBar} options={optionsBar} />
        </TpCard>
      </Col>

      <Col lg={4} sm={12} className="d-flex">
        <TpCard title="Weekly sales" className="flex-fill">
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
        </TpCard>
      </Col>
    </Row>
  )
}

export default Charts