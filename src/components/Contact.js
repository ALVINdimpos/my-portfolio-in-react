import React from 'react';
import NavBar from './NavBar';
import { FaInstagram} from 'react-icons/fa';


const Contact = () => {
  return (
    <div>
        <NavBar/>
        <div id='contact'>
            <div class="header">
                <div class="background">CONTACT</div>
                <div class="over">Get in Touch</div>
                <div class="line"></div>
            </div>
            <div class="middle">
                <div class="left">
                    <div class="title">ADDRESS</div>
                    <div class="loc">
                        <p>Kigali,  Rwanda</p>
                        <p>kanombe</p>
                        <p>kk 221 ave,</p>
                    </div>
                    <div class="cont">
                        <p><i class="fa-solid fa-phone-flip"></i>  (250) 785767647</p>
                        <p class=""><i class="fa-solid fa-envelope"></i>  fistonalvin@gmail.com</p>
                      
                    </div>
                    <div class="soc">
                        <div class="title">FOLLOW ME</div>
                        <a class="tooltip" href="https://www.instagram.com/iamalvin250/"><FaInstagram/><span class="tooltiptext">Instagram</span></a>
                        <a class="tooltip" href="https://twitter.com/fistonalvin"><i class="fa-brands fa-twitter"></i><span class="tooltiptext">Twitter</span></a>
                        <a class="tooltip" href="https://www.linkedin.com/in/fiston-alvin-niyigena-73805b1b2/"><i class="fa-brands fa-linkedin"></i><span class="tooltiptext">Linkedin</span></a>
                        <a class="tooltip" href="https://github.com/ALVINdimpos"><i class="fa-brands fa-github"></i><span class="tooltiptext">Github</span></a>
                    </div>
                </div>
                <div class="right">
                    <div class="title">SEND US A NOTE</div>
                    <div class="input">
                        <form action="" method="POST">
                            <input type="hidden" name="_next" value=""></input>
                            <input type="hidden" name="_captcha" value="false"></input>
                            <input type="text" id="name" name="name" placeholder="Name" required></input>
                            <input type="email" id="email" name="email" placeholder="Email" required></input>
                            <textarea id="" name="Message" placeholder="Tell us more about what you need....." required></textarea>
                            <input class="btn" type="submit" value="Send Message"></input>
                        </form>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p>Copyrights &copy; 2022 <span>Alvin.</span> All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Contact;