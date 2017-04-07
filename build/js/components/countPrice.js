'use strict';

/**
 * Created by -------------------- on 28.02.2017.
 */
(function () {
    function PriceCounter() {
        var motorTypeBtn = void 0;
        var detalNumb = void 0;
        var price = void 0;
        var defultResult = void 0;
        var cilinderNumber = void 0;

        function readCheckboxes() {
            motorTypeBtn = $('.js-change-price');
            detalNumb = $('.js-motor-numb');
            price = $('.js-chage-price');
            defultResult = $('.js-result').html();
            cilinderNumber = parseInt($('.js-motor-numb:checked').val());
        }
        function count(arg) {
            if (!arg) {
                var visual = parseInt($('.js-visual-price').html());
                var diagnostic = parseInt($('.js-comp-diagnostic').html());
                cilinderNumber = parseInt($('.js-motor-numb:checked').val());
                var newPrice = parseInt(price.html());
                var result = visual + diagnostic + newPrice * cilinderNumber;
                $('.js-result').html('<span class="result-price">' + result + ' грн </span>');
            } else {
                $('.js-result').html(arg);
            }
        }
        function init() {
            readCheckboxes();
            motorTypeBtn.on('change', function () {
                price.html($(this).val());
                readCheckboxes();
                if (cilinderNumber) {
                    count();
                } else {
                    $('.js-result').html(defultResult);
                }
            });
            detalNumb.on('change', function () {
                if ($(this).val() !== '0') {
                    count();
                } else {
                    count('<span class="result-price">-</span>');
                }
            });
        }
        init();
    }
    var countprice = new PriceCounter();
})();