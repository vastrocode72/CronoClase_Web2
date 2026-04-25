import "../styles/NavBar.css";

import calendarioImg from "../assets/images/calendario.png";
import panelCargaImg from "../assets/images/acortar.png";
import vistaEstudiantesImg from "../assets/images/graduado.png";
import panelEvaluacionImg from "../assets/images/journal-code.svg";
import cerrarSesionImg from "../assets/images/lock-fill.svg";

import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage";
import { redirectAlert } from "../helpers/alerts";

export default function NavBarEstudiante() {
  let userEstudiante = JSON.parse(getLocalStorage("estudiante"));

  function logOut() {
    removeLocalStorage("estudiante");
    redirectAlert(
      "Cerrar sesión",
      "Será redirigido al LogIn",
      "/inicio-sesion-estudiante",
      "info",
    );
  }

  return (
    <nav className="navCalendar">
      <div className="nav-buttons">
        <a href="#" className="nav-button">
          <img src={vistaEstudiantesImg} alt="Vista de Estudiantes" />
          {userEstudiante.nombre}
        </a>

        <a href="#" className="nav-button">
          <img src={panelCargaImg} alt="Panel de Carga" />
          Materias
        </a>

        <a
          href="#"
          className="nav-button"
          onClick={(e) => {
            e.preventDefault();
            logOut();
          }}
        >
          <img src={cerrarSesionImg} alt="Cerrar sesión" />
          Cerrar sesión
        </a>
      </div>
    </nav>
  );
}
