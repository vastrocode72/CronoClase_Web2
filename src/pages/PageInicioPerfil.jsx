import React from 'react'
import LogoClock from '../components/LogoClock'
import PageInicioPerfilButton from '../components/PageInicioPerfilButton'

function PageInicioPerfil() {
  return (
    <div>
      <LogoClock />
       <h1 className="panel-title">
          Escoge tu rol
        </h1>
      <PageInicioPerfilButton/>
    </div>

  )
}

export default PageInicioPerfil