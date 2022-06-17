import React from 'react';
import NavBar from './NavBar';
// import pp from '../img/pp.jpg';

const Home = () => {
  return (
    <div id='HomeSection'>
        <NavBar/>
        <div className="main-content">
            <div className="centering">
                <div className="header">Welcome</div>
                <div className="intro">I'm a web developer.</div>
                <div className="location">Kigali, Rwanda</div>
                <div className="btn"><a href="#contact">Hire Me</a></div>
            </div>
        </div>
    </div>
  )
}

export default Home;