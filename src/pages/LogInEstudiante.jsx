import React from 'react'
import '../styles/LogInEstudiante.css'
import React from "react";
import "../styles/StyleLogInEstudiante.css";
import { useState, useEffect } from "react";
import { end_points, fakeRoutes } from "../services/api";
import { alertaGeneral, redirectAlert } from "../helpers/alerts";
import { saveLocalStorage } from "../helpers/local-storage";

export function LogInEstudiante() {
  /* [0,1] = useState('','')*/

  let [userEstudiante, setUserEstudiante] = useState("");
  let [passwordEstudiante, setPasswordEstudiante] = useState("");
  const [estudiantes, setUserEstudiantes] = useState([]);

  function getEstudiantes() {
    fetch(fakeRoutes.logInEstudiante)
      .then((response) => response.json())
      .then((data) => setUserEstudiantes(data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getEstudiantes();
  }, []);

  function findUser() {
    let foundEstudiante = estudiantes.find(
      (item) =>
        userEstudiante == item.email && passwordEstudiante == item.documentoID,
    );

    return foundEstudiante;
  }

  function signInEstudiante(e) {
    e.preventDefault();

    if (userEstudiante === "" || passwordEstudiante === "") {
      return alertaGeneral("Error", "Contraseña o email vacío", "warning");
    } else if (findUser()) {
      saveLocalStorage("estudiante", findUser() );
      redirectAlert(
        `Hola ${findUser().nombre}`,
        "Bienvenido, será redireccionado a su calendario",
        "/calendario-estudiante",
        "success",
      );
      return;
    } else if (findUser() == undefined) {
      return alertaGeneral("Error", "Contraseña o email invalidos", "error");
    }
  }

  return (
    <div className="log-in-estudainte-style">
      <div className="h-96 flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="relative">
          <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg animate-pulse"></div>

          <div
            id="form-container"
            className="bg-white p-16 rounded-lg shadow-2xl w-80 relative z-10 transform transition duration-500 ease-in-out"
          >
            <h2 className="text-center text-3xl font-bold mb-10 text-gray-800">
              Estudiante
            </h2>

            <form className="space-y-5">
              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Email"
                id="email"
                name="email"
                type="text"
                //se me te el onchange en los campos que requieran use state
                onChange={(e) => {
                  setUserEstudiante(e.target.value);
                }}
              />

              <input
                className="w-full h-12 border border-gray-800 px-3 rounded-lg"
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                onChange={(e) => {
                  setPasswordEstudiante(e.target.value);
                }}
              />

              <button
                type="submit"
                className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={(e) => signInEstudiante(e)}
              >
                Sign in
              </button>

              <button
                type="button"
                className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Register
              </button>

              <a className="text-blue-500 hover:text-blue-800 text-sm" href="#">
                Forgot Password?
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
