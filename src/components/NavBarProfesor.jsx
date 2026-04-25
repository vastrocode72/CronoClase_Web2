
import "../styles/NavBar.css";

import calendarioImg from "../assets/images/calendario.png";
import panelCargaImg from "../assets/images/acortar.png";
import vistaEstudiantesImg from "../assets/images/graduado.png";
import panelEvaluacionImg from "../assets/images/journal-code.svg";
import cerrarSesionImg from "../assets/images/lock-fill.svg";

import React from 'react'

export default function NavBarProfesor() {
  return (
     <nav className="navCalendar">
      <div className="nav-buttons">
        

        <a href="#" className="nav-button">
          <img src={vistaEstudiantesImg} alt="Vista de Estudiantes" />
          Nombre profesor
        </a>

       

        

        <a href="#" className="nav-button">
          <img src={cerrarSesionImg} alt="Cerrar sesión" />
          Cerrar sesión
        </a>
      </div>
    </nav>
  )
}
