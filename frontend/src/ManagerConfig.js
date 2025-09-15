import fs from 'fs';

const lugarConfig = "./config.json";

async function leerConfig()
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
async function guardarConfig(eConfig)
{
    try
    {
        await fs.promises.writeFile(lugarConfig, JSON.stringify(eConfig, null, 4));
        console.log('Configuración guardada exitosamente');
        return true;
    } 
    catch (error)
    {
        console.error('Error guardando configuración:', error);
        return false;
    }
}

async function existeConfig()
{
    return fs.existsSync(lugarConfig);
}

async function crearConfigPorDefecto()
{
    const configDefecto = {
        rutaFarlands: "",
        rutaInstancias: "",
        idioma: "Español",
        apiKey: "-1"
    };
    
    try
    {
        await fs.promises.writeFile(lugarConfig, JSON.stringify(configDefecto, null, 4));
        console.log('Archivo config.json creado exitosamente');
        return configDefecto;
    }
    catch (error)
    {
        console.error('Error creando config.json:', error);
        return null;
    }
}

async function rutaFarlands(eNovaRuta)
{
    if (!await existeConfig())
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

async function rutaInstancias(eNovaRuta)
{
    if (!await existeConfig())
    {
        console.error("No existe configuración");
        return;
    }

    if (eNovaRuta === null || eNovaRuta === false)
    {
        const config = await leerConfig();
        if (config) return config.rutaInstancias;
        else return -1;
    }
    else
    {
        const config = await leerConfig();
        if (config)
        {
            config.rutaInstancias = eNovaRuta;
            if (!await guardarConfig(config))
                console.error("Error al guardar la nueva ruta de Instancias");
        }
        else console.error("No se pudo leer la configuración para actualizar la ruta de Instancias");
    }
}

async function idioma(eNuevoIdioma)
{
    if (!await existeConfig())
    {
        console.error("No existe configuración");
        return;
    }

    if (eNuevoIdioma === null || eNuevoIdioma === false)
    {
        const config = await leerConfig();
        if (config) return config.idioma;
        else return -1;
    }
    else
    {
        const config = await leerConfig();
        if (config)
        {
            config.idioma = eNuevoIdioma;
            if (!await guardarConfig(config))
                console.error("Error al guardar el nuevo idioma");
        }
        else console.error("No se pudo leer la configuración para actualizar el idioma");
    }
}

async function handleArchivo()
{
    if (!await existeConfig())
    {
        await crearConfigPorDefecto();
    }
}

// ***************** GSI ***************** //
export async function RutaFarlands(eNovaRuta)
{
    await handleArchivo();
    if (eNovaRuta === null || eNovaRuta === false)
    {
        return await rutaFarlands(null);
    }
    else
    {
        await rutaFarlands(eNovaRuta);
    }
}

export async function RutaInstancias(eNovaRuta)
{
    await handleArchivo();
    if (eNovaRuta === null || eNovaRuta === false)
    {
        return await rutaInstancias(null);
    }
    else
    {
        await rutaInstancias(eNovaRuta);
    }
}

export async function Idioma(eNuevoIdioma)
{
    await handleArchivo();
    if (eNuevoIdioma === null || eNuevoIdioma === false)
    {
        return await idioma(null);
    }
    else
    {
        await idioma(eNuevoIdioma);
    }
}