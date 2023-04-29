import React from 'react'
import "./Sobremi.css"
import Download from '../Assets/Download.png';
import Gamepad from '../Assets/Gamepad.png';
import Headphones from '../Assets/Headphones.png';
import Plane from '../Assets/Plane.png';
import Desktop from '../Assets/Desktop.png';
import PersonHicking from '../Assets/PersonHiking.png';
import Film from '../Assets/Film.png';
import Laptop from '../Assets/Laptop.png';
import Tree from '../Assets/Tree.png';



export const Sobremi = () => {
  return (
    <section id="sobremi" className="sobremi">
    <div className="content-section">

        <h2>Sobre Mí</h2>

        <p><span>Hola, soy Adrián Jaular.</span> Soy un desarrollador Full Stack que está buscando oportunidades para crecer

            profesionalmente en el mundo de la tecnología. Aunque no tengo experiencia laboral
            
            previa en este sector, he invertido tiempo y esfuerzo en adquirir habilidades tanto en el
            
            desarrollo de front-end como de back-end. Tengo conocimientos sólidos en lenguajes de programación como HTML, CSS, JavaScript y

            Java, además de contar con experiencia en el manejo de bases de datos y el desarrollo de
            
            aplicaciones web. Estoy familiarizado con las principales tecnologías y herramientas
            
            utilizadas en el desarrollo de software moderno, como React, Node.js o Git, entre otros.
            
            Soy una persona apasionada por la tecnología y siempre estoy en constante aprendizaje.
            
            Me encanta trabajar en equipo y colaborar con otros desarrolladores para crear soluciones
            
            innovadoras y de alta calidad. También tengo habilidades para resolver problemas y
            
            encontrar soluciones creativas para solucionar desafíos técnicos.
            
            Estoy entusiasmado por la oportunidad de unirme a un equipo de desarrolladores para
            
            seguir creciendo profesionalmente y aplicar mis habilidades para contribuir al éxito del
            
            proyecto. Estoy seguro de que puedo hacer una contribución valiosa y estoy comprometido
            
            a aprender todo lo que sea necesario para ayudar a lograr los objetivos del equipo.</p>

        <div className="file">

            <div className="col">

                <h3>Datos Personales</h3>
                <ul>
                    <li>
                        <strong>Nacimiento</strong>
                        21-04-1985
                    </li>
                    <li>
                        <strong>Provincia</strong>
                        Asturias
                    </li>
                    <li>
                        <strong>Teléfono</strong>
                        615024907
                    </li>
                    <li>
                        <strong>Email</strong>
                        adrijaulig@gmail.com
                    </li>
                    <li>
                        <strong>Website</strong>
                        www.example.com
                    </li>
                </ul>
            </div>

            <div className="col">

                <h3>Intereses</h3>

                <div className="container-interesets">

                    <div className="interesets">
                        <img className='fa-solid fa-gamepad' src={Gamepad}/>
                        <span>JUEGOS</span>
                    </div>

                    <div className="interesets">                       
                        <img className='fa-solid fa-headphones' src={Headphones}/>
                        <span>MUSICA</span>
                    </div>

                    <div className="interesets">
                        <img className='fa-solid fa-plane' src={Plane}/>
                        <span>VIAJAR</span>
                    </div>

                    <div className="interesets">                       
                        <img className='fa-solid fa-desktop' src={Desktop}/>
                        <span>TECNOLOGIA</span>
                    </div>

                    <div className="interesets">                      
                        <img className='fa-solid fa-personhicking' src={PersonHicking}/>
                        <span>DEPORTE</span>
                    </div>

                    <div className="interesets">                      
                        <img className='fa-solid fa-film' src={Film}/>
                        <span>CINE</span>
                    </div>

                    <div className="interesets">                      
                        <img className='fa-solid fa-laptop' src={Laptop}/>
                        <span>INFORMATICA</span>
                    </div>

                    <div className="interesets">                      
                        <i className="fa-solid fa-tree"></i>
                        <img className='fa-solid fa-tree' src={Tree}/>
                        <span>NATURALEZA</span>
                    </div>
                    
                </div>
            </div>
        </div>

        <button>
            <a href="cv/CV Adrián Jaular Iglesias.pdf" download=""> Descargar CV <img className='Download' src={Download}/></a>
            <i className="fa-solid fa-download"></i>
            <span className="overlay"></span>
        </button>

    </div>
</section>

  );
}


export default Sobremi;
