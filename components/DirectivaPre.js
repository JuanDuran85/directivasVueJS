let DirectivaPre = {
    template: `
        <div>
            <h4 v-text="titulo"></h4>
            <p v-pre>{{mensaje}}</p>
        </div>
    `,
    data() {
        return {
            titulo: 'Directiva v-pre',
            mensaje: 'Uso de la directiva v-pre en VueJS'
        }
    }
}

//v-pre no renderiza la interpolacion de variables en VueJS