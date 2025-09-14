class EventManager
{
    constructor() 
    {
        this.listeners = {};
    }

    // Suscribirse a un evento
    on(event, callback)
    {
        if (!this.listeners[event])
            this.listeners[event] = [];

        this.listeners[event].push(callback);
        
        return () => this.off(event, callback);
    }

    // Desuscribirse de un evento
    off(event, callback)
    {
        if (!this.listeners[event]) return;
        
        this.listeners[event] = this.listeners[event].filter(
            listener => listener !== callback
        );
    }

    // Emitir evento
    emit(event, data)
    {
        if (!this.listeners[event]) return;
        
        this.listeners[event].forEach(callback =>
        {
            try
            {
                callback(data);
            }
            catch (error)
            {
                console.error(`Error en listener de ${event}:`, error);
            }
        });
    }

    // Limpiar todos los listeners
    clear(event = null)
    {
        if (event)
            delete this.listeners[event];
        else 
            this.listeners = {};
        
    }
}

export const eventManager = new EventManager();