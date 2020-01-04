let DirectivaHTML = {
    template: `
        <div>
            <h2 v-text="titulo"></h2>
            <p v-html="mensaje"></p>
        </div>
    `,
    data() {
        return {
            titulo: 'Usando la Directiva v-html',
            mensaje: '<b>Mensaje desde Directiva HTML con negrita</b>'
        }
    },
}

//la directiva v-html permite renderizar las etiquetas de html en los textos.