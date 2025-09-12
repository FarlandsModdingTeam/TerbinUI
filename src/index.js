//const cargarHome = require('./templates/home').cargarHome;
//const cargarConfig = require('./templates/configuracion').cargarConfig;
// import { readFileSync } from "fs";

const $ = selector => document.querySelector(selector);

const maincontent = $('#main-content');
const mainscript = $('#main-script');
const nombreComponente = $('#nombre-componente');

function devolverPagina(eNombre)
{
    return fetch(`./templates/${eNombre}.html`)
        .then(response =>
        {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.text();
        });
}

function cargarPagina(ePagina)
{
    console.log(`Cargando página: ${ePagina}`);

    if (maincontent)
    {
        devolverPagina(ePagina)
            .then(html =>
            {
                // Crear un elemento temporal para poder usar querySelector
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                
                // Buscar los elementos fbody y fscript
                const bodyElement = tempDiv.querySelector('.fbody');
                const scriptElement = tempDiv.querySelector('.fscript');
                
                // Actualizar el nombre del componente
                nombreComponente.textContent = ePagina.charAt(0).toUpperCase() + ePagina.slice(1);
                
                if (bodyElement) maincontent.innerHTML = bodyElement.innerHTML;
                else maincontent.innerHTML = '<p>No se encontró contenido para esta página.</p>';
                
                // Cargar y ejecutar el script
                if (scriptElement)
                {
                    // Limpiar scripts anteriores
                    mainscript.innerHTML = '';
                    
                    if (scriptElement.src || scriptElement.getAttribute('src'))
                    {
                        const newScript = document.createElement('script');
                        newScript.type = scriptElement.type || 'text/javascript';
                        newScript.src = scriptElement.getAttribute('src');
                        mainscript.appendChild(newScript);
                    }
                    else
                    {
                        const newScript = document.createElement('script');
                        newScript.type = scriptElement.type || 'text/javascript';
                        newScript.textContent = scriptElement.textContent;
                        mainscript.appendChild(newScript);
                    }
                }
            })
            .catch(err =>
            {
                nombreComponente.textContent = "Error:";
                maincontent.innerHTML = `<p>Error cargando la página: ${err.message}</p>`;
            });
    }
}

document.addEventListener('DOMContentLoaded', () =>
{
    cargarPagina('home');
});

document.addEventListener('click', (event) =>
{
    if (event.target.matches('button[route]'))
    {
        const route = event.target.getAttribute('route');
        if (route)
        {
            cargarPagina(route);
        }
    }
});