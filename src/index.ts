import { cargarHome } from './templates/home';
import { cargarConfig } from './templates/configuracion';

const maincontent = document.getElementById('main-content');

export function cargarPagina(nombre: string): void
{
    console.log(`Cargando página: ${nombre}`);

    if (nombre === 'home')
    {
        maincontent!.innerHTML = cargarHome();
    }

}

const boton = document.getElementById('inicio');
boton?.addEventListener('click', () => cargarPagina("home"));

document.addEventListener('DOMContentLoaded', () => {
  cargarPagina('home');
});
