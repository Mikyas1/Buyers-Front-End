;(function(global, $){
    
    new $({
        el: "#app",
        data: {

        },
        methods: {
            under_drawer_clicked() {
                Event.fire('main_clicked');
            }
        },
        created() {
            
        }
    })
    
    
})(window, Vue);