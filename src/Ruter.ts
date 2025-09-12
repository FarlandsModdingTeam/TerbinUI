export interface Ruter
{
    path: string;
    component: () => string;
    title?: string;
}

export class Ruter
{
    private routes: Ruter[] = [];
    private contentElement: HTMLElement;

    constructor(contentSelector: string)
    {
        this.contentElement = document.querySelector(contentSelector) as HTMLElement;
        window.addEventListener('popstate', () => this.handleRoute());
    }

    addRoute(route: Ruter): void
    {
        this.routes.push(route);
    }

    navigate(path: string): void
    {
        window.history.pushState({}, '', path);
        this.handleRoute();
    }

    private handleRoute(): void
    {
        const currentPath = window.location.pathname;
        const route = this.routes.find(r => r.path === currentPath) || this.routes[0];
        
        if (route) {
        this.contentElement.innerHTML = route.component();
        if (route.title) {
            document.title = route.title;
        }
        }
    }

    init(): void
    {
        this.handleRoute();
    }
}
