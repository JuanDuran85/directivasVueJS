let DirectivaOn = {
    template: `
        <div>
            <h3 v-text="titulo"></h3>
            <p v-html="mensaje"></p>
            <button v-on:click.stop="llamado">Click Aqui</button>
            <button v-on:click.stop="llamado2">Llamado a Data</button>
            <p>-----------------------</p>
            <p v-text="pelicula"></p>
            <button @click.stop="comprarEntrada">Comprar Entrada</button>
            <p>Entradas disponibles: <span v-text="entradas"></span></p>
            <p>-----------------------</p>
            <input type="text" @keydown="llamado" />
            <p>-----------------------</p>
            <h3>Modificando Vista y Modelo</h3>
            <input :value="textImput" type="text" @keyup="llamadoInput"/>
        </div>
    `,
    data() {
        return {
            titulo: 'Directiva v-on',
            mensaje: '<em>Usando Directiva v-on</em>',
            mensaje2: 'MENSAJE DESDE DATA',
            pelicula: 'El Padrino',
            entradas: 5,
            textImput: "mensaje desde input text"
        }
    },
    methods: {
        llamado: function () {
            alert('mensaje desde funcion con v-on')
        },
        llamado2(){
            alert(this.mensaje2)
        },
        comprarEntrada(){
            if (this.entradas > 0) {
                this.entradas--;
                return alert(`Entrada comprada para ${this.pelicula}`)
            }
            return alert('Ya no hay entredas')
        },
        llamadoInput(event){
            this.textImput = event.target.value
        }
    }
}

//no usar funcion flecha porque esta llevan al windows y no a las instancias de vue