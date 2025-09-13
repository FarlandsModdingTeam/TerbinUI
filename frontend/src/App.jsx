import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './templates/Home.jsx'
import Configuracion from './templates/Configuracion.jsx'
import Instancias from "./templates/Instancias.jsx"
import Mods from "./templates/Mods.jsx"

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  // Función para obtener el componente correcto
  const devolverPagina = (nombrePagina) => {
    switch(nombrePagina) {
      case 'Home':
        return <Home />;
      case 'Instancias':
        return <Instancias />;
      case 'Mods':
        return <Mods />;
      case 'Configuracion':
        return <Configuracion />;
      default:
        return <Home />;
    }
  };

  const cargarPagina = (pagina) => {
    console.log(`Cargando página: ${pagina}`);
    setCurrentPage(pagina);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-9">
          <div className="align-items-left p-3 mb-2 bg-primary text-white">
            <h1 id="nombre-componente">{currentPage}</h1>
          </div>

          <div id="main-content">
            {devolverPagina(currentPage)}
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-secondary p-3 h-100">
            <h5 className="text-white mb-3">TerbinUI</h5>
            <div className="d-grid gap-2">
              <button 
                type="button" 
                className="btn btn-outline-light" 
                onClick={() => cargarPagina('Home')}
              >
                Inicio
              </button>
              <button 
                type="button" 
                className="btn btn-outline-light" 
                onClick={() => cargarPagina('Instancias')}
              >
                Instancias
              </button>
              <button 
                type="button" 
                className="btn btn-outline-light" 
                onClick={() => cargarPagina('Mods')}
              >
                Mods
              </button>
              <button 
                type="button" 
                className="btn btn-outline-light" 
                onClick={() => cargarPagina('Configuracion')}
              >
                Configuración
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
