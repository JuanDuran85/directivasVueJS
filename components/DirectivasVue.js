Vue.component('directivas-vue', {
    template: `
        <div>
            <p v-text="texto"></p>
        </div>
    `,
    data() {
        return {
            texto: "Uso de directiva v-text en VueJS"
        }
    }
});