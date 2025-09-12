/*
import { IVistaScript } from "./IVistaScript.js";

export class VistaMods extends IVistaScript
{
    cargado()
    {
        console.log("VistaMods cargado");
    }
}

*/
document.addEventListener('click', (event) =>
{
    console.log(`AAAAAAAAAAAAAAAAAAAAAAAAAA`);
    if (event.target.matches('button[di]'))
    {
        const route = event.target.getAttribute('di');
        if (route)
        {
            console.log(`diciendo ${route}`);
        }
        else
        {
            console.log(`no tiene atributo di`);
        }
    }
    else
    {
        console.log(`no tiene di`);
    }
    
});