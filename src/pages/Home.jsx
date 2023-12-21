import React, { Fragment } from 'react'
import Header from "../components/header/Header"
import Hero from "../components/hero/Hero"
import Company from "../components/company/Company"
import Offer from "../components/offer/Offer"
import Courses from "../components/courses/Courses"
import About from "../components/about/About"
import Update from "../components/GetUpdates/Update"
import Footer from "../components/footer/Footer"

function Home() {
  return (
    <Fragment>
        <Header/>
        <Hero/>
        <Company/>
        <Offer/>
        <Courses/>
        <About/>
        <Update/>
        <Footer/>
    </Fragment>
  )
}

export default Home