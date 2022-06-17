import React from 'react';
import NavBar from './NavBar';


const Services = () => {
  return (
    <div>
        <NavBar/>
        <div id='whatIdo'>
            <div class="header">
                <div class="background">SERVICES</div>
                <div class="over">What I Do?</div>
                <div class="line"></div>
            </div>

            <div class="middle">
                <div class="card">
                    <div class="icon"><i class="fa-solid fa-desktop"></i></div>
                    <div class="text">
                        <p class="title">Web App development</p>
                        <p class="msg">I'm a web developer experienced in Html, CSS, NodeJs, expressJs with interraction with databases like mongodb and postgres .</p> 
                    </div>
                    
                </div>
                <div class="card">
                    <div class="icon"><i class="fa-solid fa-mobile-button"></i></div>
                    <div class="text">
                        <p class="title">Mobile App development</p>
                        <p class="msg">I also offer services in mobile app development especially in frontend stack with react native </p>
                    </div>
                </div>
                <div class="card">
                    <div class="icon"><i class="fa-solid fa-palette"></i></div>
                    <div class="text">
                        <p class="title">Graphic design</p>
                        <p class="msg">I'm a graphic designer experienced in producing best design projects with photoshop and other resources.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="icon"><i class="fa-solid fa-pen-ruler"></i></div>
                    <div class="text">
                        <p class="title">UI/UX design</p>
                        <p class="msg">I'm UI/UX designer experienced in working with Figma ,designing best mockups for websites ,web applications and mobile application .</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services