import { Ruter } from './Ruter';
import { cargarHome } from './templates/home';
import { cargarConfig } from './templates/configuracion';

class App
{
  private router: Ruter;

  constructor()
  {
    this.router = new Ruter('#main-content');
    this.setupRoutes();
    this.setupNavigation();
  }

  private setupRoutes(): void
  {
    // Errores por todas partes.
    /*
    this.router.addRoute({
      path: '/',
      component: cargarHome,
      title: 'TerbinUI - Inicio'
        });

    this.router.addRoute({
      path: '/configuracion',
      component: cargarConfig,
      title: 'TerbinUI - Configuración'
    });
    */
  }

  private setupNavigation(): void
  {
    // Configurar botones de navegación
    document.addEventListener('click', (e) =>
    {
      const target = e.target as HTMLElement;
      if (target.hasAttribute('data-route'))
        {
        e.preventDefault();
        const route = target.getAttribute('data-route');
        if (route) {
          this.router.navigate(route);
        }
      }
    });
  }

  init(): void
  {
    this.router.init();
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});