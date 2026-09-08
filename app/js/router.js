export const router = {
    async init(routes, config) {
        this.routes = routes;
        this.config = config;

        await this.render(window.location.hash);
        
        window.addEventListener('hashchange', async () => {
            await this.render(window.location.hash);
        });
    },
    async render(route) {
        const page = this.routes[route] || this.routes[this.config.router.defaultRoute];
        const response = await fetch(`./app/pages/${page.file}.html`);
        const view = await response.text();
        
        const app = document.querySelector('#app');

        app.innerHTML = view;
        
        if(typeof(page.onload) === "function") {
            await page.onload();
        }
    }
};

export const redirect = (route) => {
    window.location.hash = route;
}