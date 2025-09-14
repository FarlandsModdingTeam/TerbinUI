import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './templates/Home.jsx'
import Configuracion from './templates/Configuracion.jsx'
import Instancias from "./templates/Instancias.jsx"
import Mods from "./templates/Mods.jsx"

import T from './componentes/T.jsx'

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
                <T k="1">Home</T>
              </button>
              <button 
                type="button" 
                className="btn btn-outline-light" 
                onClick={() => cargarPagina('Instancias')}
              >
                <T k="2">Instances</T>
              </button>
              <button 
                type="button" 
                className="btn btn-outline-light" 
                onClick={() => cargarPagina('Mods')}
              >
                <T k="3">Mods</T>
              </button>
              <button 
                type="button" 
                className="btn btn-outline-light" 
                onClick={() => cargarPagina('Configuracion')}
              >
                <T k="9">Configuration</T>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
