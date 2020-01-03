//componente manual
Vue.component('saludo-componente', {
    template: `
        <header>
            <h1>{{titulo}}</h1>
            <h2>{{mensaje}}</h2>
        </header>
    `,
    data() {
        return {
            titulo: 'Saludos desde Vue.JS',
            mensaje: 'Bienvenido al curso'
        }
    }
});