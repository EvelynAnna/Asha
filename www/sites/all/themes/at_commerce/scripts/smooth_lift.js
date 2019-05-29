/*
$(function () {

    var scroll_timer;
    var displayed = false;
    var $message = $('#to_top');
    var $window = $(window);
    var top = document.getElementById("top").children; //$(document.body).children(0).position().top;

    $window.scroll(function () {
        window.clearTimeout(scroll_timer);
        scroll_timer = window.setTimeout(function () { 
            if($window.scrollTop() <= top) {
                displayed = false;
                $message.fadeOut(500);
            } else 
                if(displayed == false) {
                    displayed = true;
                    $message.stop(true, true).fadeIn(500).click(function () { $message.fadeOut(500); });
                }
        }, 100);
    });


    $('#top-link').click(function(e) {
        e.preventDefault();
        $.scrollTo(0,300);
    });
    
});
*/

//$('to_top').hide();
/*  
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()  300) {
            $('to_top').fadeIn();
              } else {
              $('to_top').fadeOut(); 
              } 
              });                                                                              
    $('to_top').click(function() {
        $(body,html).animate({scrollTop 0}, 800); return false; 
    }); 
});
*/

(function($) {
    $(window).scroll(function() {
        
    })
})