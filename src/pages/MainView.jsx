import { Calendario } from "../components/Calendario";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";
import "../styles/MainView.css";
import NavBarEstudiante from "../components/NavBarEstudiante";

export function MainView() {
  return (
    <div className="page-container">
      <NavBarEstudiante />

      <main className="mainViewContainer">
        <h1 className="main-title">2026</h1>
        <Calendario />
      </main>

      <Footer />
    </div>
  );
}