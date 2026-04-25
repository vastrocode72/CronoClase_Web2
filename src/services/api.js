const URL_BASE = 'http://localhost:8080/api/'

/*Aqui es donde se configuran las rutas que vienen del back-end*/

export let end_points={
    //OJO CON ESTA url
    estudiantes:`${URL_BASE}estudiante`
}


export let fakeRoutes = {

    logInProfesor:
    "https://raw.githubusercontent.com/GGP113/CronoClase_Web2/refs/heads/master/src/data/profesor.json",

    logInEstudiante: "https://raw.githubusercontent.com/GGP113/CronoClase_Web2/refs/heads/develop/creacion-registros/src/data/estudiantes.json"


}