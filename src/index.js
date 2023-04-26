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
//Función que oculta o muestra el menu
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
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades

function efectoHabilidades() {
  var skills = document.getElementById("skills");
  var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distancia_skills >= 300) {
    let habilidades = document.getElementsByClassName("progress");
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
    habilidades[15].classList.add("comunicacion");
    habilidades[16].classList.add("trabajo-en-equipo");
    habilidades[17].classList.add("creatividad");
    habilidades[18].classList.add("dedicacion");
    habilidades[19].classList.add("project-managment");
  }
}



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


