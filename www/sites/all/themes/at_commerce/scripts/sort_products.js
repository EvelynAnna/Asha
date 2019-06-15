function compare(a,b) {
    return (a - b);
}

(function ($) {
$(document).ready(function(e) {
        $(".sortBtn").click(function() { 
            var products = document.querySelectorAll('article');
            var parent = document.body;
            var SortElements = new Object();
            for (var i = 1; i < products.length; ++i){
                var productPriceContent = products[i].querySelector('.component-total').textContent.replace('₽','');
                var prodPrice = parseInt(productPriceContent);
                SortElements[prodPrice] = {'element': products[i], 'index': i};
            };
            
            var keys = Object.keys(SortElements);
            keys.sort(compare);
            keys.map(function(key, i){
                parent.insertAdjacentElement('beforeend', SortElements[key]['element'])
            })
        });
    });
})(jQuery);