import React from 'react'
import './maillist.css'
import { Col, Row } from 'react-bootstrap'
function Maillist() {
  return (
    <Row className='mail'>
      <Col className='itemContainer '>
        <h1 className="mailtitle">save time save money</h1>
        <span className="mailDescription">Sign up and we'll send the best deals to you</span>
        <div className="mailinputContainer">
          <input type="text" placeholder='your email' />
          <button>subscribe</button>
        </div>
        </Col>
    </Row>
  )
}

export default Maillist