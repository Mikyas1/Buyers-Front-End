;(function(global, $){
    $(document).on('ready', function() {
        $(".item-images").slick({
            lazyLoad: 'ondemand',
            prevArrow: false,
            nextArrow: false,
            dots: true,
        });
    });
}(window, $));