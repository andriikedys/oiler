"use strict";

(function () {
    var cache = {};

    window.tmpl = function tmpl(str, data) {
        // Figure out if we're getting a template, or if we need to
        // load the template - and be sure to cache the result.
        var fn = !/\W/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) :

        // Generate a reusable function that will serve as a template
        // generator (and which will be cached).
        new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};" +

        // Introduce the data as local variables using with(){}
        "with(obj){p.push('" +

        // Convert the template into pure JavaScript
        str.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');");

        // Provide some basic currying to the user
        return data ? fn(data) : fn;
    };
})();

var container = $('.js-datail-container');
var content = tmpl('tmpl', items);

container.html(content);
var datailItem = $('.js-datail-item');
var $summ = $('.js-datail-summ');

datailItem.on('click', function () {
    $(this).toggleClass('is-active');
    var price = +$(this).find('.js-price').html();

    var summValue = +$summ.html();
    if ($(this).hasClass('is-active')) {
        summValue = summValue + price;
    } else {
        summValue = summValue - price;
    }
    $summ.html(summValue);
});