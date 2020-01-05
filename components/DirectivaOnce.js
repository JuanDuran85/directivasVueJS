let DirectivaOnce = {
    template: `
        <div>
            <h3 v-text="title" v-once></h3>
            <p v-text="mensaje"></p>
        </div>
    `,
    data() {
        return {
            title: 'Directiva v-once',
            mensaje: 'Usando la directiva v-once en VueJS'
        }
    },
}

// v-once previene que se realicen modificaciones porque deje de escuchar los cambios y no va al render