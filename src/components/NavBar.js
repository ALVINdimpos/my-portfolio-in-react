import React from 'react'
import home from '../img/home.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaInstagram ,FaTwitterSquare,FaLinkedinIn,FaGithub} from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='sidebar'>
      <div className = 'pp'>
          <img src={home} className="profile-picture" alt='pp'></img>
      </div>
      <h3>Alvin Fiston </h3>
      <ul>
      <li><a href="./Home">Home</a></li>
      <li><a href="./About">About Me</a></li>
      <li><a href="./Service">What I do</a></li>
      <li><a href="./Resume">Resume</a></li>
      <li><a href="./Contact">Contact</a></li>
      <li><a href="./TodoApp">My-TodoApp</a></li>
      </ul>
      <div className="social-media">
          <a className="tooltip" href="https://www.instagram.com/iamalvin250/"><FaInstagram/><span className="tooltiptext">Instagram</span></a>
          <a className="tooltip" href="https://twitter.com/fistonalvin"><FaTwitterSquare/><span className="tooltiptext">Twitter</span></a>
          <a className="tooltip" href="https://www.linkedin.com/in/fiston-alvin-niyigena-73805b1b2/"><FaLinkedinIn/><span className="tooltiptext">Linkedin</span></a>
          <a className="tooltip" href="https://github.com/ALVINdimpos"><FaGithub/><span className="tooltiptext">Github</span></a>
          <div className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
          </div>
      </div>
    </div>
  )
}

export default NavBar;
