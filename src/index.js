//const cargarHome = require('./templates/home').cargarHome;
//const cargarConfig = require('./templates/configuracion').cargarConfig;
// import { readFileSync } from "fs";

const $ = selector => document.querySelector(selector);

const maincontent = $('#main-content');

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
            .then(html => {
                maincontent.innerHTML = html;
            })
            .catch(err => {
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