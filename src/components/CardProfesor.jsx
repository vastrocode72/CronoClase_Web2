import "../styles/CardProfesor.css";

export default function CardProfesor({ grupo, momento, onClick }) {
  return (
    <div className="momento-card">
      <h2 className="titulo">Grupo {grupo}</h2>
      <p className="subtitulo">Momento {momento}</p>

      <button className="btn-cargar" onClick={onClick}>
        Crear evaluación
      </button>
    </div>
  );
}