import React from 'react'
import "./Portfolio.css"
import Inkrhyme from '../Assets/Inkrhyme.png'
import Consultoria from '../Assets/Consultoria.png';
import Todolist from '../Assets/Todolist.png';
import Codersllc from '../Assets/Codersllc.png';




export const Portfolio = () => {
  return (
    <section id="portfolio" class="portfolio">
        <div class="content section">
            <h2>PORTFOLIO</h2>
            <div class="galery">
                <div class="proyect">
                    <img className='Consultoria' src={Consultoria}/>
                    <div class="overlay">
                        <h3>Consultoría León</h3>
                        <p>Web</p>
                    </div>
                </div>

                <div class="proyect">
                    <img className='Inkrhyme' src={Inkrhyme}/>
                    <div class="overlay">
                        <h3>Inkrhyme</h3>
                        <p>Web</p>
                    </div>
                </div>

                <div class="proyect">
                    <img className='Todolist' src={Todolist}/>
                    <div class="overlay">
                        <h3>ToDoList</h3>
                        <p>Web</p>
                    </div>
                </div>

                <div class="proyect">
                    <img className='Codersllc' src={Codersllc}/>
                    <div class="overlay">
                        <h3>Coders LLC</h3>
                        <p>Web</p>
                    </div>
                </div>

            </div>
        </div>
     </section>  
  );
}

export default Portfolio;
