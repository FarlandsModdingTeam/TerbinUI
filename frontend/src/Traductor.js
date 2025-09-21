import fs from 'fs';
import * as config from "./ManagerConfig.js";
import { eventManager } from "./EventManager.js";
 

var _idiomaCargado_i = null;

function setIdioma(eNovoIdioma)
{
    _idiomaCargado_i = eNovoIdioma;
    config.Idioma(eNovoIdioma);
    eventManager.emit('languageChanged', eNovoIdioma);
}

function handleLanguage()
{
    if (_idiomaCargado_i === null)
    {
        const lang = config.Idioma(null);

        if (lang !== -1) _idiomaCargado_i = lang;
        else _idiomaCargado_i = "English";

        setIdioma(_idiomaCargado_i);
    }
    else
    {
        const lang = config.Idioma(null);
        if (lang !== _idiomaCargado_i)
        {
            config.Idioma(_idiomaCargado_i);
        }
    }
}

export function ChangeLanguage(eLanguage)
{
    handleLanguage();
    if (eLanguage === _idiomaCargado_i) return;
    setIdioma(eLanguage);
}

export function GetCurrentLanguage()
{
    handleLanguage();
    return _idiomaCargado_i;
}

export function getLanguages()
{
    try
    {
        const jsonFiles = fs.readFileSync("./languages")
                        .filter(f => f.endsWith('.json'))
                        .map(f => f.replace('.json', ''));

        console.log('Idiomas disponibles:', jsonFiles);
        return jsonFiles;
    }
    catch (error)
    {
        console.error("Error al obtener los lenguajes:", error);
        return ["Error", "404"];
    }
}

export function cargarTexto(codigo, idioma)
{
    if (!codigo)
    {
        console.error('Código no proporcionado a cargarTexto');
        return Promise.reject(new Error('Código requerido'));
    }

    const key = codigo.toLowerCase();

    return fetch(`/src/languages/${idioma}.json`)
        .then(response => 
        {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(data =>
        {
            const obj = JSON.parse(JSON.stringify(data));
            return obj[key] || codigo; // Devolver codigo original si no se encuentra
        });
}

export function loadText(key)
{
    if (!key)
    {
        console.error('Key no proporcionada a loadText');
        return Promise.reject(new Error('Key requerida'));
    }
    
    return cargarTexto(key, "Español");
}
