import { Calendario } from "../components/Calendario";
import "../styles/MainView.css";
import NavBar from "../components/NavBar";


export function MainView() {
  return (
    <div className="mainViewContainer">
      <NavBar />
      <Calendario />
    </div>
  );
}