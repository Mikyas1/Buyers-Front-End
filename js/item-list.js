;(function(global, $){

    $.component('item-list', {

        data: function() {
            return {
                
            }    
        },

        created() {
            console.log("item-list-constructed");
        }

    });

}(window, Vue));

// use this to render the featched items from API