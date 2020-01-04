;(function(global, $){

    $.component('cnav', {
    
        data: function() {
            return {
                navDrawer: false,
                search: false,
                cart: false,
                account: false
            };
        },
    
        methods: {
            handleNavClick(val) {
                val = val || 'empty';
                var self = this;
    
                (function(){
                    // open or close the desired tab
                    self[val] = !self[val];
    
                    // close everything else by reflecting the self._data
                    for(var prop in self._data) {
                        if (val !== prop) { 
                            self[prop] = false;
                        }
                    }
                })();
    
            }
        },

        created() {
            Event.listen('main_clicked', this.handleNavClick);
        }
    
    });

})(window, Vue);