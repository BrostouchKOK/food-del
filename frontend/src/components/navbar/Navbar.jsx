import React from 'react'
import './Navbar.css';
import {assets} from "../../assets/frontend_assets/assets"
const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='logo'>The-Fast.</h1>
      <ul className='navbar-menu'>
        <li>
            <a href="">home</a>
        </li>
        <li>
            <a href="">about</a>
        </li>
        <li><a href="">mobile-app</a></li>
        <li>
            <a href="">contact</a>
        </li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
