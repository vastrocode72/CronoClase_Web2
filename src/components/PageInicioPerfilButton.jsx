import { Link } from "react-router-dom";
import "../styles/Buttons.css";

export function PageInicioPerfilButton() {
  return (
    <div className="button-container">
      <button className="button">
        Estudiante
      </button>
      <button className="button">
        Profesor
      </button>
    </div>
  );
}

export default PageInicioPerfilButton;
