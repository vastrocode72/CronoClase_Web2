import React from "react";
import "../styles/StyleLogInEstudiante.css";
import { useState, useEffect } from "react";
import { end_points, fakeRoutes } from "../services/api";
import { alertaGeneral, redirectAlert } from "../helpers/alerts";
import { saveLocalStorage } from "../helpers/local-storage";

export function LogInProfesor() {
  let [userProfesor, setUserProfesor] = useState("");
  let [passwordProfesor, setPasswordProfesor] = useState("");
  const [profesores, setProfesores] = useState([]);

  function getProfesores() {
    // Asumiendo que existe esta ruta en tu api.js, si no, cámbiala a la correcta
    fetch(fakeRoutes.logInProfesor || fakeRoutes.logInEstudiante)
      .then((response) => response.json())
      .then((data) => setProfesores(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getProfesores();
  }, []);

  function findUser() {
    let foundProfesor = profesores.find(
      (item) =>
        userProfesor === item.email && passwordProfesor === item.documentoID,
    );
    return foundProfesor;
  }

  function signInProfesor(e) {
    e.preventDefault();

    const user = findUser();

    if (userProfesor === "" || passwordProfesor === "") {
      return alertaGeneral("Error", "Contraseña o email vacío", "warning");
    } else if (user) {
      saveLocalStorage("profesor", user);
      redirectAlert(
        `Hola Prof. ${user.nombre}`,
        "Bienvenido, será redireccionado a su panel de control",
        "/panel-profesor", // Ruta sugerida actualizada
        "success",
      );
      return;
    } else {
      return alertaGeneral("Error", "Contraseña o email inválidos", "error");
    }
  }

  return (
    <div className="log-in-estudainte-style">
      <div className="h-96 flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800">
        <div className="relative">
          <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 shadow-lg animate-pulse"></div>

          <div
            id="form-container"
            className="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
          >
            <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
              Profesor
            </h2>

            <form className="space-y-5">
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Email Institucional"
                id="email"
                name="email"
                type="text"
                onChange={(e) => {
                  setUserProfesor(e.target.value);
                }}
              />

              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                onChange={(e) => {
                  setPasswordProfesor(e.target.value);
                }}
              />

              <button
                type="submit"
                className="w-full h-12 bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
                onClick={(e) => signInProfesor(e)}
              >
                Sign in
              </button>

              <button
                type="button"
                className="w-full h-12 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
              >
                Register
              </button>

              <div className="text-center">
                <a className="text-indigo-600 hover:text-indigo-900 text-sm" href="#">
                  ¿Olvidó su contraseña?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}