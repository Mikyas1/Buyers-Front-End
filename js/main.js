(function(global, $){

    $.component('cmain', {

        data: function() {
            return {
                value: 'this is clicked'
            }
        },
        methods: {
            main_clicked() {
                Event.fire('main_clicked');
            }
        },
        created() {
            
        }
    });

}(window, Vue));