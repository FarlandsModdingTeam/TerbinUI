import { useState, useEffect } from 'react';
import { loadText } from '../Traductor.js';
import { eventManager } from "../EventManager.js";

function T({ k, children })
{
    const [texto, setTexto] = useState(children || k);

    if (!k)
    {
        console.error('Componente T usado sin prop key');
        return children || 'Error: key requerida';
    }

    function setText()
    {
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
    }

    function onLanguageChanged()
    {
        setText();
    }
    eventManager.on('languageChanged', onLanguageChanged);

    setText();

    return texto;
}

export default T;