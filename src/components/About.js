import React from 'react';
import NavBar from './NavBar';
// import NavBar from './NavBar';


const About = () => {
  return (
    <div>
        <NavBar/>
        <div id='about'>
            <div className="header">
                <div className="background">ABOUT ME</div>
                <div className="over">Know Me Better</div>
                <div className="line"></div>
            </div>
            <div className="middle">
                <div className="main">
                    <div className="title">I'm <span>Alvin</span>, a Web Developer</div>
                    <div className="content">
                        <p>Hello, I'm Fiston Alvin,and I'm a web designer. I've been designing websites for over 5 years, 
                        and I have a passion for creating beautiful and user-friendly designs. 
                        I would love to put my skills to work for your company. You can see some of my previous work in my online portfolio. 
                        Feel free to contact me if you have any questions."</p>
                       
                    </div>
                </div>
                <div className="credentials">
                    <div className="text"><span>Name:</span>  Alvin Fiston</div>
                    <div className="text"><span> Email:  </span><span className="email">  fistonalvin@gmail.com</span></div>
                    <div className="text"><span>Age:</span> 21</div>
                    <div className="text"> <span>From:</span>  Kigali, Rwanda</div>
                    <div className="btn"><a href="./files/Resume.pdf" download="Toussaint CV">Download CV</a></div>
                </div>
            </div>
            <div className="footer">
                <div className="div experience">
                    <div className="nbr">2+</div>
                    <div className="text">Years Experience</div>
                </div>
                <div className="div clients">
                    <div className="nbr">6+</div>
                    <div className="text">Happy clients</div>
                </div>
                <div className="div projects">
                    <div className="nbr">10+</div>
                    <div className="text">Projects done</div>
                </div>
                <div className="div awards">
                    <div className="nbr">2+</div>
                    <div className="text">Awards given</div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default About;