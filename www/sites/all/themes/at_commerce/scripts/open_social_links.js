function socialopen(url){
window.open(url,'tvkw');
}
(function ($) { 
    $(document).ready(function(e) {
        $('a.soc-icon').click(function(){
        var url = $(this).attr('href'); 
            socialopen(url);
        return false;
        })
    });
})(jQuery);