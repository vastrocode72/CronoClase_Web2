import "../styles/PanelCargaActividades.css";
import { PanelMomento } from "../components/PanelMomento";
import NavBar from "../components/NavBar";


export function PanelCargaActividades() {
    return (
        <div className="PanelCargaActividadesContainer">
            <NavBar />
            <main className="PanelCargaActividades">
                <h2>Panel de carga de Actividades</h2>
                <div>
                    <PanelMomento />
                    <PanelMomento />
                    <PanelMomento />
                </div>

            </main>

        </div>

    );
}

