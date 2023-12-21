import React from 'react'
import './company.css'
import {Container} from "reactstrap"

function Company() {
  return (
    <section>
      <div className="company-section">
        <a href="#" className="icon-gradient rounded facebook">
          <i className="ri-facebook-fill"></i>
        </a>
        <a href="#" className="icon-gradient rounded twitter">
          <i className="ri-twitter-fill"></i>
        </a>
        <a href="#" className="icon-gradient rounded linkedin">
          <i className="ri-linkedin-fill"></i>
        </a>
        <a href="#" className="icon-gradient rounded instagram">
          <i className="ri-instagram-fill"></i>
        </a>
      </div>
    </section>
  )
}

export default Company