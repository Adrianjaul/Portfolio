import React from 'react'
import "./Header.css"



export const Header = () => {
  return (
    <div class="header-container">
        <header>
            <div class="logo">
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
            <div class="nav-responsive" onclick="mostrarOcultarMenu()">
                <i class="fa-solid fa-bars"></i>
            </div>
        </header>
    </div>
  )
}


export default Header;