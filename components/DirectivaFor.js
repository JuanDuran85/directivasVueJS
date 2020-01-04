let DirectivaFor = {
    template: `
        <div>
            <h2 v-text="titulo"></h2>
            <p v-html="mensaje"></p>
            <p>------------------------------</p>
            <h4>Lista de un array con v-for</h4>
            <ul>
                <li v-for="(colores,index) in lista" v-text="colores" :key="index"></li>
            </ul>
            <p>------------------------------</p>
            <h4>Lista desde un objeto con v-for</h4>
            <ul>
                <li v-for="(usuario,key,index) in persona" :key="index">
                    {{key}}: {{usuario}}
                </li>
            </ul>
            <p>------------------------------</p>
            <h4>Lista de un array con objetos con v-for</h4>
            <ul>
                <li v-for="(item,index) in usuarios">
                    Nombre: {{item.Nombre}}<br>
                    Apellido: {{item.Apellido}}<br>
                    Edad: {{item.Edad}}<br>
                    Correo Electronico: {{item.Correo}}
                </li>
            </ul>
            </div>
    `,
    data() {
        return {
            titulo: 'Directiva v-for',
            mensaje: '<em>usando directiva v-for</em>',
            lista: ["Rojo", "Verde", "Azul", "Negro", "Gris", "Amarillo", "Blanco"],
            persona: {
                Nombre:   "Juan",
                Apellido: "Duran",
                Edad:     "34",
                Correo:   "duran85juan@gmail.com"
            },
            usuarios: [
                {
                    Nombre:   "Juan",
                    Apellido: "Duran",
                    Edad:     "34",
                    Correo:   "duran85juan@gmail.com"
                },
                {
                    Nombre:   "Jose",
                    Apellido: "Perez",
                    Edad:     "60",
                    Correo:   "joseperez@gmail.com"
                },
                {
                    Nombre:   "Maria",
                    Apellido: "Petronila",
                    Edad:     "21",
                    Correo:   "mariap@gmail.com"
                },
            ]
        }
    }   
}

// en el v-for, se puede usar (alias, nombre para llave, index de la llave). 
//en el alias guarda el valor de la llave.