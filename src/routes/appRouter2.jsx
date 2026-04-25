import App from '../App'
import FormularioEstudiante from '../pages/FormularioEstudiante'
import { FormularioProfesor } from '../pages/FormularioProfesor'
import { InicioSesion } from '../pages/InicioSesion'
import { PanelCargaActividades } from '../pages/PanelCargaActividades'
import { PanelProfesor } from '../pages/PanelProfesor'
import { MainView } from '../pages/MainView'
import { LogInEstudiante } from '../pages/LogInEstudiante'
import { LogInProfesor } from '../pages/LogInProfesor'

export let appRouter2 = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "/formulario-estudiante",
        element: <FormularioEstudiante />
    },
    {
        path: "/formulario-profesor",
        element: <FormularioProfesor />
    },
    {
        path: "/inicio-sesion-estudiante",
        element: <LogInEstudiante />
    },

    {
        path: "/inicio-sesion-profesor",
        element: <LogInProfesor />
    },


    {
        path: "/panel-carga-actividades",
        element: <PanelCargaActividades />
    },
    {
        path: "/panel-profesor",
        element: <PanelProfesor />
    },

    {path: "/calendario-estudiante",
        element: <MainView />}
]