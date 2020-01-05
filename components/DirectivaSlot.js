let DirectivaSlot = {
    template: `
        <div>
            <h4 v-text="titulo"></h4>
            <p v-text="mensaje"></p>
            <componenteBoton>
                <template v-slot:accion>
                    Cerrar
                </template>
                <template #elemento>
                    Modal
                </template>
            </componenteBoton>
        </div>
    `,
    data() {
        return {
            titulo: 'Directiva v-slot',
            mensaje: 'Uso de la directiva v-slot con VueJS'
        }
    },
    components: {
        componenteBoton
    }
}