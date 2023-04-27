import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}


function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progress");
    console.log(habilidades);
    habilidades[0].classList.add("html");
    habilidades[1].classList.add("css");
    habilidades[2].classList.add("javascript");
    habilidades[3].classList.add("java");
    habilidades[4].classList.add("mysql");
    habilidades[5].classList.add("intellij");
    habilidades[6].classList.add("react");
    habilidades[7].classList.add("flexbox");
    habilidades[8].classList.add("grid");
    habilidades[9].classList.add("bootstrap");
    habilidades[10].classList.add("git");
    habilidades[11].classList.add("node");
    habilidades[12].classList.add("github");
    habilidades[13].classList.add("jyra");
    habilidades[14].classList.add("confluence");
    habilidades[15].classList.add("figma");
    habilidades[16].classList.add("wordpress");
    habilidades[17].classList.add("comunicacion");
    habilidades[18].classList.add("trabajo-en-equipo");
    habilidades[19].classList.add("creatividad");
    habilidades[20].classList.add("dedicacion");
    habilidades[21].classList.add("project-managment");
  }
  }

 






window.onscroll = function(){
    efectoHabilidades();
} 



reportWebVitals();


