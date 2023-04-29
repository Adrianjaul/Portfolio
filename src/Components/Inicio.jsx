import React from 'react'
import Photo from '../Assets/photo.png'
import Linkedin from '../Assets/Linkedin.png';
import Github from '../Assets/Github.png';
import Email from '../Assets/Email.png';
import "./Inicio.css"

export const Inicio = () => {
  return (
    <section id="inicio" className="inicio">
    <div className="banner-content">
        <div className="container-img">
            <img className='Foto Redonda' src={Photo}/>
            
        </div>
        <h1>Adrián Jaular</h1>
        <h2>Desarrollador Web Full Stack Junior</h2>
        <div className="redes">
            <a href="#"><img src={Linkedin}/></a>
            <a href="#"><img src={Github}/></a>
            <a href="mailto:adrijaulig@gmail.com"><img src={Email}/></a>
        </div>
    </div>
</section> 
  );
}

export default Inicio;