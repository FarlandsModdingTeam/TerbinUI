import { useState, useEffect } from 'react';
import { loadText } from '../Traductor.js';

function T({ k, children })
{
    const [texto, setTexto] = useState(children || k);

    if (!k)
    {
        console.error('Componente T usado sin prop key');
        return children || 'Error: key requerida';
    }

    useEffect(() =>
    {
        loadText(k)
        .then(textoTraducido =>
        {
            setTexto(textoTraducido);
        })
        .catch(error =>
        {
            console.error(`Error loading text for ${k}:`, error);
            setTexto(children || k);
        });
    }, [k, children]);

    return texto;
}

export default T;