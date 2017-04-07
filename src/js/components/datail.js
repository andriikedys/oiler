
//=include template.js

    let container = $('.js-datail-container');
    let content = tmpl('tmpl', items);

    container.html(content);
    let datailItem = $('.js-datail-item');
    var $summ = $('.js-datail-summ');

    datailItem.on('click', function(){
        $(this).toggleClass('is-active');
        var price = + $(this).find('.js-price').html();

        var summValue = + $summ.html();
        if($(this).hasClass('is-active')){
            summValue = summValue + price;
        } else{
            summValue = summValue - price;
        }
        $summ.html(summValue);
    });


