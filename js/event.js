;(function(global, $){

    global.Event = new class {

        constructor() {
            this.vue = new $;
        }

        fire(event, data = null) {
            this.vue.$emit(event, data);
        }

        listen(event, callback) {
            this.vue.$on(event, callback);
        }
    }

}(window, Vue));