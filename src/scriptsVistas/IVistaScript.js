/**
 * Interfaz para los SCRIPT de una vista.
 * Pero no es una vista.
 */
export class IVistaScript
{
    constructor()
    {
        if (this.constructor === IVistaScript)
        throw new Error("No se puede instanciar una interfaz directamente");
    }

    cargado()
    {
        throw new Error("El método 'cargado()' debe ser implementado");
    }
}