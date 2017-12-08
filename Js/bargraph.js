//For bar graphs
$(function() {
    $(".bars").find("li .bar").each( function( key, bar ) {
        var percentage = $(this).data('percentage');

        $(this).animate({
            'height' : percentage + '%'
        }, 1000);
    });
});

//Hide Header
(function($){
    $(function(){
        var scroll = $(document).scrollTop();
        var headerHeight = $('.fixed-header').outerHeight();

        $(window).scroll(function() {
            var scrolled = $(document).scrollTop();
            if (scrolled > headerHeight){
                $('.fixed-header').addClass('off-canvas');
            } else {
                $('.fixed-header').removeClass('off-canvas');
            }

            if (scrolled > scroll){
                $('.fixed-header').removeClass('fixed');
            } else {
                $('.fixed-header').addClass('fixed');
            }
            scroll = $(document).scrollTop();
        });

    });
})(jQuery);