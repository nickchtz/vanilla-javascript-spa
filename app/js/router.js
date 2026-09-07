export const router = {
    async init(routes) {
        this.routes = routes;

        await this.render(window.location.hash || '#overview');

        window.addEventListener('hashchange', async () => {
            await this.render(window.location.hash);
        });
    },
    async render(route) {
        const page = routes[route] || routes['#notFound'];

        const response = await fetch(`./app/pages/${page.file}/${page.file}.html`);
        const html = await response.text();
        
        document.querySelector('#app').innerHTML = html;

        if(typeof(page.onload) === "function")
            await page.onload();
    }
};

export const redirect = (route) => {
    window.location.hash = route;
}