import React, { useEffect, useState } from 'react'
import { Button, Image } from 'react-bootstrap'

import TpCard from '@/components/common/Card'

const Details = (props) => {
  return (
    <TpCard title="Profile Details" className="user-detail flex-fill">
      <div className="text-center">
        <Image src={props.user.photoURL} roundedCircle fluid className="mb-2" />
        <h5 className="card-title mb-0">{props.user.displayName}</h5>
        <div className="text-muted mb-2">Web Developer</div>
        <div>
          <Button variant="success" className="mr-2">
            <i className="pe-7s-like2 mr-2" />
            <span>Follow</span>
          </Button>
          <Button variant="success">
          <i className="pe-7s-mail-open mr-2" />
            <span>Message</span>
          </Button>
        </div>
      </div>

      <hr />

      <div>
        <h5 className="h6 card-title">Skills</h5>
        <a href="#" className="badge badge-success mr-1 my-1">HTML</a>
        <a href="#" className="badge badge-success mr-1 my-1">JavaScript</a>
        <a href="#" className="badge badge-success mr-1 my-1">Sass</a>
        <a href="#" className="badge badge-success mr-1 my-1">Angular</a>
        <a href="#" className="badge badge-success mr-1 my-1">Vue</a>
        <a href="#" className="badge badge-success mr-1 my-1">React</a>
        <a href="#" className="badge badge-success mr-1 my-1">Redux</a>
        <a href="#" className="badge badge-success mr-1 my-1">UI</a>
        <a href="#" className="badge badge-success mr-1 my-1">UX</a>
      </div>

      <hr />

      <div>
        <h5 className="h6 card-title">About</h5>
        <ul className="list-unstyled mb-0">
          <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-home feather-sm mr-1"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Lives in <a href="#">San Francisco, SA</a></li>
          <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-briefcase feather-sm mr-1"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg> Works at <a href="#">GitHub</a></li>
          <li className="mb-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-map-pin feather-sm mr-1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> From <a href="#">Boston</a></li>
        </ul>
      </div>
    </TpCard>
  )
}

export default Details