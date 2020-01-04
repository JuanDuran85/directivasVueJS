let DirectivaShow = {
    template: `
        <div>
            <h2>Usando directiva v-show</h2>
            <p v-show="mensaje">Mensaje permito por v-show</p>
            <p v-show="usuario.permiso">El usuario tiene permiso para ver</p>
            <p v-show="!usuario.permiso">El usuario No tiene permiso para ver</p>
        </div>
    `,
    data() {
        return {
            mensaje: true,
            usuario: {
                permiso: true
            }
        }
    }
}

//solo usar en el caso que la informacion puede estar comprometida