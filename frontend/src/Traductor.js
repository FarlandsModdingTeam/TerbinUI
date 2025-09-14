import fs from 'fs';

// TODO: cambiar el idioma.
// TODO: Actualizar todos los T.

var idiomaCargado = "Ninguno";

function handleLenguage()
{
    // TODO: comprobar el idioma cargado.
}

export function getLenguages()
{
    try
    {
        const jsonFiles = fs.readFileSync("./lenguages")
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

    return fetch(`/src/lenguages/${idioma}.json`)
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
