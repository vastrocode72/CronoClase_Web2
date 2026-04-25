import "../styles/CardProfesor.css";
import CardProfesor from "../components/CardProfesor";
import NavBar from "../components/NavBar";
import NavBarProfesor from "../components/NavBarProfesor";
import { Footer } from "../components/Footer";

//Esto va a cambiar el visual para que se vean los grupos


export function PanelProfesor() {
  return (
    <div className="page-container">
      <NavBarProfesor />


      <main className="panel-container">
        <h1 className="panel-title">
          Panel del Profesor
        </h1>

        <div className="momentos-wrapper">
          <CardProfesor grupo={1} momento={1} />
          <CardProfesor grupo={2} momento={2} />
          <CardProfesor grupo={3} momento={3} />

        </div>
      </main>

      <Footer />
    </div>
  );
}