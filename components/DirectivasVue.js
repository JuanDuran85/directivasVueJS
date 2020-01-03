Vue.component('directivas-vue', {
    template: `
        <div>
            <p v-text="texto"></p>
            <a v-bind:href="link.href" :title="link.title" v-text="link.text"></a>
        </div>
    `,
    data() {
        return {
            texto: "Uso de directiva v-text en VueJS",
            link: {
                text: 'Vue.JS',
                href: 'https://vuejs.org/',
                title: 'Página web oficial de VueJS - uso de v-bind'
            }
        }
    }
});