import React from 'react'
import "./Footer.css"
import Linkedin from '../Assets/Linkedin.png'
import Github from '../Assets/Github.png'
import Email from '../Assets/Email.png'

export const Footer = () => {
  return (
    <footer>
    <a href="#inicio" class="up">
        <i class="fa-solid fa-angles-up"></i>
    </a>

    <div class="redes">
        <a href="#"><img className='fa-brands fa-Linkedin' src={Linkedin}/></a>
        <a href="#"><img className='fa-brands fa-Github' src={Github}/></a>
        <a href="mailto:adrijaulig@gmail.com"><img className="fa-solid fa-envelope" src={Email}/></a>
    </div>
 </footer>

  );
}


export default Footer;
