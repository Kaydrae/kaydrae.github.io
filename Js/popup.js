$(document).ready(function(){

    // Open
    $('[data-popup-open]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
        console.log("Open");
        e.preventDefault();
    });

    // Close
    $('[data-popup-close]').on('click', function(e)  {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
        console.log("Close");
        e.preventDefault();
    });

});

/**
 <div class="popup" data-popup="">
 <div class="popup-inner">
 <h2 class="popup-title"></h2>
 <img class="popup-img" src="Images/" id="img01">
 <p class="caption"></a></p>
 <a class="popup-close" data-popup-close="" href="#">x</a>
 </div>
 </div>
 */