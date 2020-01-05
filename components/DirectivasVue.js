Vue.component('directivas-vue', {
    template: `
        <div>
            <h1 v-text="titulo"></h1>
            <p v-text="texto"></p>
            <a v-bind:href="link.href" :title="link.title" v-text="link.text"></a>
            <hr>
            <DirectivaHTML/>
            <hr>
            <DirectivaShow/>
            <hr>
            <DirectivaIf/>
            <hr>
            <DirectivaFor/>
            <hr>
            <DirectivaOn/>
            <hr>
            <DirectivaModel/>
            <hr>
            <DirectivaSlot/>
            <hr>
            <DirectivaPre/>
            <hr>
            <DirectivaOnce/>
        </div>
    `,
    data() {
        return {
            titulo: 'Directivas de VueJS',
            texto: "Uso de directiva v-text en VueJS",
            link: {
                text: 'Vue.JS',
                href: 'https://vuejs.org/',
                title: 'Página web oficial de VueJS - uso de v-bind'
            }
        }
    },

    components: {
        DirectivaHTML,
        DirectivaShow,
        DirectivaIf,
        DirectivaFor,
        DirectivaOn,
        DirectivaModel,
        DirectivaSlot,
        DirectivaPre,
        DirectivaOnce
    }
});