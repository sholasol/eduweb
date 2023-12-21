import React from 'react'
import {Container, Row, Col} from "reactstrap"
import "./hero.css"
import SearchIcon from "../../assets/search.svg"
import heroImg from "../../assets/hero-img1.png"

function Hero() {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className="hero-container">
              <h1 className="mb-4">
                <span className="e-purple">E</span> - Learning <br/>
                Anywhere <br/> In the world
              </h1>
              <p className="mb-4">
                The best place to learn programming with 
              beginner friendly tutorials and examples
              </p>
              <div className="search">
                <img src={SearchIcon} alt="search" />
                <input type="text" placeholder='Enter Search Item' />
                <button className="btn-search">Search</button>
              </div>
            </div>
          </Col>

          <Col lg='6' md='6'>
              <img src={heroImg} alt="hero" className='w-100'/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero