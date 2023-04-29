import React from 'react'
import "./Header.css"
import Hamburguer from '../Assets/Hamburguer.png';


export const Header = () => {
  return (
    <div className="header-container">
        <header>
            <div className="logo">
                <a href="#">Adrián</a>
            </div>
            <nav id="nav">
                <ul>
                    <li><a href="#inicio">INICIO</a></li>
                    <li><a href="#sobremi">SOBRE MI</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#curriculum">CURRICULUM</a></li>
                    <li><a href="#portfolio">PORTFOLIO</a></li>
                    <li><a href="#contacts">CONTACTO</a></li>
                </ul>
            </nav> 
             <div className="nav-responsive" onclick="mostrarOcultarMenu()"> 
                <img className="fa-solid fa-bars" src={Hamburguer}/>
            </div>
        </header>
    </div>
  )
}


export default Header; 



