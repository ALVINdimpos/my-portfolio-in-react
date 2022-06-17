import React from 'react';
import NavBar from './NavBar';


const Resume = () => {
  return (
    <div>
        <NavBar/>
        <div id='resume'>
            <div class="header">
                <div class="background">SUMMARY</div>
                <div class="over">Resume</div>
                <div class="line"></div>
            </div>

                <div class="middle">
                    <div class="educ">
                        <div class="title">My Education</div>
                        <div class="card">
                            <p class="year">2018-2021</p>
                            <p class="degree">Secondary</p>
                            <p class="clg">Efotec</p>
                            <p class="msg">Mathemtics, Physics,</p>
                        </div>
                        <div class="card">
                            <p class="year">2017-2019</p>
        
                            <p class="clg">Esrangiro</p>
                            <p class="msg">O'level</p>
                        </div>
                    </div>
                    <div class="exp">
                        <div class="title">My Experience</div>
                        <div class="card">
                            <p class="year">2022-</p>
                            <p class="degree">Web development</p>
                            <p class="clg">Freecodecamp</p>
                            <p class="msg">I worked here as an </p>
                        </div>
                        <div class="card">
                            <p class="year">2022-</p>
                            <p class="degree">UI/UX designing</p>
                            <p class="clg">K Lab</p>
                            <p class="msg">At K lab I worked on several projects using figma including this portofolio website .</p>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <h2>My Skills</h2>
                    <div class="progressbar">
                        <div class="left">
                            <div class="html">
                                <div class="info">HTML</div>
                                <div class="bar"><span></span></div>
                            </div>
                            <div class="css">
                                <div class="info">CSS</div>
                                <div class="bar"><span></span></div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="javascript">
                                <div class="info">Javascript</div>
                                <div class="bar"><span></span></div>
                            </div>
                            <div class="figma">
                                <div class="info">Figma</div>
                                <div class="bar"><span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn"><a href="./img/cv.pdf" download="Alvin CV">Download CV  <i class="fa-solid fa-download"></i></a></div>
        </div>
    </div>
  )
}

export default Resume;