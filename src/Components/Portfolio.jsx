import React from 'react'
import "./Portfolio.css"
import Inkrhyme from '../Assets/Inkrhyme.png'
import Consultoria from '../Assets/Consultoria.png';
import Todolist from '../Assets/Todolist.png';
import Codersllc from '../Assets/Codersllc.png';
import Calculadora from '../Assets/Calculadora.png';
import Pptlspock from '../Assets/Pptlspock.png';
import Pcshop from '../Assets/Pcshop.png';




export const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
        <div className="content section">
            <h2>PORTFOLIO</h2>
            <div className="galery">
                <div className="proyect">
                    <img className='Consultoria' src={Consultoria}/>
                    <div className="overlay">
                        <h3>Consultoría León</h3>
                        <p>Web</p>
                    </div>
                </div>

                <div className="proyect">
                    <img className='Inkrhyme' src={Inkrhyme}/>
                    <div className="overlay">
                        <h3>Inkrhyme</h3>
                        <p>Aplicatión</p>
                    </div>
                </div>

                <div className="proyect">
                    <img className='Todolist' src={Todolist}/>
                    <div className="overlay">
                        <h3>ToDoList</h3>
                        <p>Aplicación</p>
                    </div>
                </div>

                <div className="proyect">
                    <img className='Codersllc' src={Codersllc}/>
                    <div className="overlay">
                        <h3>Coders LLC</h3>
                        <p>Web</p>
                    </div>
                </div>

                <div className="proyect">
                    <img className='Calculadora' src={Calculadora}/>
                    <div className="overlay">
                        <h3>Calculadora</h3>
                        <p>Aplicación</p>
                    </div>
                </div>

                <div className="proyect">
                    <img className='Pptlspock' src={Pptlspock}/>
                    <div className="overlay">
                        <h3>Pptlspock</h3>
                        <p>Juego</p>
                    </div>
                </div>

                <div className="proyect">
                    <img className='Pcshop' src={Pcshop}/>
                    <div className="overlay">
                        <h3>Pc Shop</h3>
                        <p>Ecommerce</p>
                    </div>
                </div>

            </div>
        </div>
     </section>  
  );
}

export default Portfolio;
