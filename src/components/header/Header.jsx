import React, {useRef} from 'react'
import { Container } from 'reactstrap'
import "./header.css"
import logo from "../../assets/logo.png"
import data from "../nav.json"

// const navLinks = [
//   {
//     display: 'Home',
//     url: '#'
//   },
//   {
//     display: 'Courses',
//     url: '#'
//   },
//   {
//     display: 'Offer',
//     url: '#'
//   },
//   {
//     display: 'About',
//     url: '#' 
//   }
// ]




function Header() {

  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle('active_menu')

  return (
    <header className='header'>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className='d-flex align-items-center justify-content-between'>
              <img src={logo} alt="logo" /> EduWeb
            </h2>
          </div>
          <div className="nav d-flex align-items-center gap-5">
            <div className="nav_menu" ref={menuRef} onClick={menuToggle}>
                <ul className="nav_list">
                  {
                  data?.navs?.map((item, index) => (
                    <li className='nav_item' key={index}>
                      <a href={item.url}>{item.display}</a>
                    </li>
                  ))
                  }
                </ul>
            </div>
            <div className="nav_right">
              <p className="mb-0 d-flex align-items-center gap-2"></p>
              <button className='btn-sign-in'>Sign In</button>
            </div>
          </div>
          <div className='mobile_menu'>
                  <span><i className='ri-menu-line' onClick={menuToggle}></i></span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header