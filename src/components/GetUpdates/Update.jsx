import React from 'react'
import './update.css'
import {Container, Col, Row} from 'reactstrap'
import updateImg from '../../assets/getUpdates_img.png'

function Update() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6' className='text-left'>
            <div className="update-content">
              <div className="text-white pb-4">
                <h2 className="update-title text-white">
                  Get Updates
                </h2>
                <p className="update-p text-white">
                  Join Our Newsletter for the latest updates
                </p>
              </div>
              <div className="getUpdates">
                <input type="text" placeholder='email@example.com' />
                <button className="btn btn-update">Subscribe</button>
              </div>
            </div>
          </Col>
          <Col lg='6' md='6'>
              <div className="update-img">
                <img src={updateImg} alt="update" className='w-100'/>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Update