// TODO: cambiar el idioma.
// TODO: Actualizar todos los T.


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
