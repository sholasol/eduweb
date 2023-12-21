import React from 'react'
import {Container, Col, Row} from "reactstrap"
import './offer.css'
import gradientImg from '../../assets/gradient-list-style.png'
import offerImg from '../../assets/offer.png'

function Offer() {
  return (
    <section className='offer-section'>
      <Row>
        <Col lg='6' md='6'>
          <div className="about_img">
            <img src={offerImg} alt="offer" className='w-100'/>
          </div>
        </Col>

        <Col lg='6' md='6'>
          <div className="offer_content">
            <h2>Kind of courses we offer</h2>
            <p>Programming guides and sample composed <br/> in 
            a clear and easy-to-grasp terminology, <br/> intended
            for novice learners
            </p>
            <div className="d-flex gap-5 align-items-center">
              <div className="single-offer">
                <p className="offer-title">
                  <img src={gradientImg} alt="gradient" />
                Highly Intuitive
                </p>
              </div>
              <div className="single-offer">
                <p className="offer-title">
                  <img src={gradientImg} alt="gradient" />
                Save Time
                </p>
              </div>
              <div className="single-offer">
                <p className="offer-title">
                  <img src={gradientImg} alt="gradient" />
                Save Money
                </p>
              </div>
              <div className="single-offer">
                <p className="offer-title">
                  <img src={gradientImg} alt="gradient" />
                Build Skill Confidence
                </p>
              </div>
            </div>
            <a href="#">
              <button className="btn btn-offer">Explore Courses</button>
            </a>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default Offer