import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

import TpCard from '@/components/common/Card'

const Details = () => {
  return (
    <TpCard title="Edit Profile" className="user-edit flex-fill">
      <Form>
        <Form.Group controlId="editForm.ControlInput1">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group controlId="editForm.ControlInput2">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
        <Form.Group controlId="editForm.ControlInput3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="editForm.ControlSelect1">
          <Form.Label>Genders</Form.Label>
          <Form.Control as="select">
            <option value="">Select...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="editForm.ControlTextarea1">
          <Form.Label>About me</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>

      <Button variant="success" className="float-right">
        Update Profile
      </Button>
      <div className="clearfix" />
    </TpCard>
  )
}

export default Details