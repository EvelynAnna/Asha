function socialopen(url){
window.open(url,'tvkw');
}

(function ($) {
  Drupal.behaviors.ContentDisplayFrontPageGrid = {
    attach: function(context) {
      $("body.front #main-content").addClass("front-page-grid content-display-grid");
      $("body.front #main-content .article").equalHeight();
    }
  }
})(jQuery);

(function ($) {
  Drupal.behaviors.ContentDisplayTaxoPageGrid = {
    attach: function(context) {
      $("body.page-taxonomy #main-content").addClass("page-taxonomy-grid content-display-grid");
      $("body.page-taxonomy #main-content .article").equalHeight();
    }
  }
})(jQuery);

(function ($) { 
    $(document).ready(function(e) {
        $('a.ggrid').click(function(){
        var url = $(this).attr('href'); 
            socialopen(url);
        return false;
        })
    });
})(jQuery);