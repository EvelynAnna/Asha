(function ($) {
    $(document).ready(function(e) {
    var elements = document.getElementsByClassName("component-title");
        for(var i = 0; i < elements.length; ++i) {
            elements[i].textContent = "Цена";
        }            
        
    });
});