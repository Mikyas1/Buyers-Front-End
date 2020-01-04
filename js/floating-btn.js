;(function(global, $){

    $.component('floating-btn', {

        data: function() {
            return {
                showFlotBtn: true
            }    
        },

        created() {
            var self = this;
            global.addEventListener('scroll', function(){
                var element = document.querySelector('#main-btn');
                var position = element.getBoundingClientRect();

                if(position.top < global.innerHeight && position.bottom > 0) {
                    self.showFlotBtn = false;
                } else {
                    self.showFlotBtn = true;
                }
            });
        }

    });

}(window, Vue));