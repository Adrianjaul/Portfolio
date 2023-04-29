import React, { useEffect, useState } from "react";


function Habilidades() {
  const [habilidades, setHabilidades] = useState([]);

  useEffect(() => {
    const handleHabilidades = () => {
      const skills = document.getElementById("skills");

      if (!skills) {
        return;
      }

      const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

      if (distancia_skills >= 300) {
        const habilidades = document.getElementsByClassName("progress");      
        const nuevasHabilidades = [
          "html",
          "css",
          "javascript",
          "java",
          "mysql",
          "intellij",
          "react",
          "flexbox",
          "grid",
          "bootstrap",
          "git",
          "node",
          "github",
          "jyra",
          "confluence",
          "figma",
          "wordpress",
          "comunicacion",
          "trabajo-en-equipo",
          "creatividad",
          "dedicacion",
          "project-managment",
        ];      
        setHabilidades(Array.from(habilidades).map((habilidad, idx) => {
          const nuevaClase = nuevasHabilidades[idx];
          habilidad.classList.add(nuevaClase);
          return habilidad;
        }));
      }
    };
    
    window.addEventListener("scroll", handleHabilidades);

   
    return () => window.removeEventListener("scroll", handleHabilidades);
  }, []);

  return (
    <div id="skills">
      {habilidades.map((habilidad, idx) => (
        <div key={idx} className={habilidad.className}>
          {/* {habilidad.innerHTML} */}
        </div>
      ))}
    </div>
  );
}

export default Habilidades; 

