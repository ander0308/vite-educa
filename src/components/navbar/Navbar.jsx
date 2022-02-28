import React from "react";
import logo from '../../assets/logo-educa.svg';
import './navbar.css';

const Navbar = () => {
  return(
    <div className="container">
      <nav>
        <a href="">
          <img src={logo} alt="Logo" />
        </a>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Programs</a></li>
          <li><a href="">Solutions</a></li>
          <li><a href="">Courses</a></li>
          <li><a href="">Partners</a></li>
          <li><a href="">Contact</a></li>
        </ul>
        <div className="login">
          <a className="btn">Log In</a>
          <button className="btn btn-primary">Sign in</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;