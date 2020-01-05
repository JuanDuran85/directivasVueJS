let DirectivaModel = {
    template: `
        <div>
            <h3 v-text="titulo"></h3>
            <p v-text="mensaje"></p>
            <input v-model="textInputData" type="text"/>
            <h4>Input tipi CheckBok</h4>
            <label>
                <input name="v" type="checkbox" v-model="checked"/>
                Aceptado
            </label>
            <h4>Peliculas</h4>
            <label v-for="(item,index) in peliculas" :key="index">
                <input :name="index" :value="item" type="checkbox" v-model="favoritas"/>
                {{item}}
            </label>
            <p>--------------------</p>
            <h4 v-show="favoritas.length > 0">Peliculas Favoritas</h4>
            <ul>
                <li v-for="(item2,index2) in favoritas" :key="index2" v-text="item2"></li>
            </ul>
        </div>
    `,
    data() {
        return {
            titulo: 'Directiva v-model',
            mensaje: 'Desde la directiva v-model VueJS',
            textInputData: 'Mensaje de la data en el Input Text',
            checked: false,
            favoritas: [],
            peliculas: ['El Padrino','Escuadron 6', 'El Señor de los Anillos','Batman']
        }
    }
}