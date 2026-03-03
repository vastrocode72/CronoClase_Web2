
import './App.css'

import { MainView } from './pages/MainView'
import { PanelCargaActividades } from './pages/PanelCargaActividades'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/panel-carga" element={<PanelCargaActividades />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
