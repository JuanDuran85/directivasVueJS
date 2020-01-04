let DirectivaIf = {
    template: `
        <div>
            <h2 v-text="titulo"></h2>
            <p v-if="usuario.permiso" v-html="mensaje"></p>
            <p>-----------------------------</p>
            <h3>Uso de v-if / v-else</h3>
            <p v-if="usuario.permiso2">El usuario Si tiene permiso para ver el mensaje</p>
            <p v-else="usuario.permiso2">El usuario No tiene permiso para ver el mensaje</p>
            <p>-----------------------------</p>
            <h3>Uso de v-if / v-else-if / v-else</h3>
            <p v-if="usuario.permiso2 && usuario.vip">El usuario Si tiene permiso y es VIP</p>
            <p v-else-if="usuario.permiso2">El usuario tiene permiso pero No es VIP</p>
            <p v-else-if="usuario.vip">El usuario es VIP</p>
            <p v-else>El usuario No tiene permiso y No es VIP</p>
        </div>
    `,
    data() {
        return {
            titulo: 'Directiva v-if',
            mensaje: '<em>Usando la directiva v-if en VueJS</em>',
            usuario: {
                permiso: true,
                permiso2: false,
                vip: true
            }
        }
    }
}