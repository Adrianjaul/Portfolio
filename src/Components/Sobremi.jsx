import React from 'react'
import "./Sobremi.css"

export const Sobremi = () => {
  return (
    <section id="sobremi" class="sobremi">
    <div class="content-section">

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

        <div class="file">

            <div class="col">

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

            <div class="col">

                <h3>Intereses</h3>

                <div class="container-interesets">

                    <div class="interesets">
                        <i class="fa-solid fa-gamepad"></i>
                        <span>JUEGOS</span>
                    </div>

                    <div class="interesets">                       
                        <i class="fa-solid fa-headphones"></i>
                        <span>MUSICA</span>
                    </div>

                    <div class="interesets">
                        <i class="fa-solid fa-plane"></i>
                        <span>VIAJAR</span>
                    </div>

                    <div class="interesets">
                        <i class="fa-solid fa-desktop"></i>
                        <span>TECNOLOGIA</span>
                    </div>

                    <div class="interesets">                      
                        <i class="fa-solid fa-person-hiking"></i>
                        <span>DEPORTE</span>
                    </div>

                    <div class="interesets">                      
                        <i class="fa-solid fa-film"></i>
                        <span>CINE</span>
                    </div>

                    <div class="interesets">                      
                        <i class="fa-sharp fa-solid fa-laptop-code"></i>
                        <span>INFORMATICA</span>
                    </div>

                    <div class="interesets">                      
                        <i class="fa-solid fa-tree"></i>
                        <span>NATURALEZA</span>
                    </div>
                    
                </div>
            </div>
        </div>

        <button>
            <a href="cv/CV Adrián Jaular Iglesias.pdf" download=""> Descargar CV </a>
            <i class="fa-solid fa-download"></i>
            <span class="overlay"></span>
        </button>

    </div>
</section>

  );
}


export default Sobremi;
