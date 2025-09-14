import { create } from 'domain';
import fs from 'fs';

const lugarConfig = "./config.json";

function leerConfig()
{
    return fetch(lugarConfig)
        .then(response =>
        {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(data => data)
        .catch(err =>
        {
            console.error("Error al leer configuración:", err);
            return null;
        });
}
function guardarConfig(eConfig)
{
    try
    {
        fs.writeFileSync(lugarConfig, JSON.stringify(eConfig, null, 4));
        console.log('Configuración guardada exitosamente');
        return true;
    } 
    catch (error)
    {
        console.error('Error guardando configuración:', error);
        return false;
    }
}

function existeConfig()
{
    return fs.existsSync(lugarConfig);
}

function crearConfigPorDefecto()
{
    const configDefecto = {
        rutaFarlands: "",
        rutaInstancias: "",
        idioma: "Español",
        apiKey: "-1"
    };
    
    try
    {
        fs.writeFileSync(lugarConfig, JSON.stringify(configDefecto, null, 4));
        console.log('Archivo config.json creado exitosamente');
        return configDefecto;
    }
    catch (error)
    {
        console.error('Error creando config.json:', error);
        return null;
    }
}

function rutaFarlands(eNovaRuta)
{
    if (!existeConfig())
    {
        console.error("No existe configuración");
        return;
    }

    if (eNovaRuta === null || eNovaRuta === false)
    {
        const config = leerConfig();
        if (config) return config.rutaFarlands;
        else return -1;
    }
    else
    {
        const config = leerConfig();
        if (config)
        {
            config.rutaFarlands = eNovaRuta;
            if (!guardarConfig(config))
                console.error("Error al guardar la nueva ruta de Farlands");
        }
        else console.error("No se pudo leer la configuración para actualizar la ruta de Farlands");
    }
}

function rutaInstancias(eNovaRuta)
{
    if (!existeConfig())
    {
        console.error("No existe configuración");
        return;
    }

    if (eNovaRuta === null || eNovaRuta === false)
    {
        const config = leerConfig();
        if (config) return config.rutaInstancias;
        else return -1;
    }
    else
    {
        const config = leerConfig();
        if (config)
        {
            config.rutaInstancias = eNovaRuta;
            if (!guardarConfig(config))
                console.error("Error al guardar la nueva ruta de Instancias");
        }
        else console.error("No se pudo leer la configuración para actualizar la ruta de Instancias");
    }
}

function idioma(eNuevoIdioma)
{
    if (!existeConfig())
    {
        console.error("No existe configuración");
        return;
    }

    if (eNuevoIdioma === null || eNuevoIdioma === false)
    {
        const config = leerConfig();
        if (config) return config.idioma;
        else return -1;
    }
    else
    {
        const config = leerConfig();
        if (config)
        {
            config.idioma = eNuevoIdioma;
            if (!guardarConfig(config))
                console.error("Error al guardar el nuevo idioma");
        }
        else console.error("No se pudo leer la configuración para actualizar el idioma");
    }
}

function handleArchivo()
{
    if (!existeConfig())
    {
        crearConfigPorDefecto();
    }
}

// ***************** GSI ***************** //
export function RutaFarlands(eNovaRuta)
{
    handleArchivo();
    if (eNovaRuta === null || eNovaRuta === false)
    {
        return rutaFarlands(null);
    }
    else
    {
        rutaFarlands(eNovaRuta);
    }
}

export function RutaInstancias(eNovaRuta)
{
    handleArchivo();
    if (eNovaRuta === null || eNovaRuta === false)
    {
        return rutaInstancias(null);
    }
    else
    {
        rutaInstancias(eNovaRuta);
    }
}

export function Idioma(eNuevoIdioma)
{
    handleArchivo();
    if (eNuevoIdioma === null || eNuevoIdioma === false)
    {
        return idioma(null);
    }
    else
    {
        idioma(eNuevoIdioma);
    }
}