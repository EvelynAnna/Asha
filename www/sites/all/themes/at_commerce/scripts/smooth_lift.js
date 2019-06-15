(function($) {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#ToTop').fadeIn();
        } 
        else {
            $('#ToTop').fadeOut();
        }
    });
    
    $('#ToTop').click(function() {
        $('body,html').animate({scrollTop:0},600);
        return false;
    });
    
})(jQuery);