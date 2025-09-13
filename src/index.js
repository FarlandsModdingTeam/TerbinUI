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
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;
            const bodyElement = tempDiv.querySelector('.fbody');
            const scriptElement = tempDiv.querySelector('.fscript');
            
            if (bodyElement) maincontent.innerHTML = bodyElement.innerHTML;
            else maincontent.innerHTML = '<p>No se encontró contenido para esta página.</p>';
            
            mainscript.innerHTML = '';
            if (scriptElement)
            {
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
            
            nombreComponente.textContent = ePagina.charAt(0).toUpperCase() + ePagina.slice(1);
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