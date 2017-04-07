'use strict';

$(function () {
    if ($('.js-oil-fullpage').length) {
        $('.js-oil-fullpage').fullpage({
            sectionsColor: ['#fff', '#f1f1f1', '#fff', '#f1f1f1', '#fff', '#f1f1f1', '#fff', '#f1f1f1', '#fff', '#f1f1f1'],
            anchors: ['oil-section-1', 'oil-section-2', 'oil-section-3', 'oil-section-4', 'oil-section-5', 'oil-section-6', 'oil-section-7', 'oil-section-8', 'oil-section-9', 'oil-section-10'],
            menu: '.js-oil-nav',
            scrollOverflow: true,
            dragAndMove: true
        });

        if ($(window).width() <= 767) {
            $.fn.fullpage.destroy('all');
        }
    }

    // more text button
    /**
     * Created by -------------------- on 07.03.2017.
     */
    (function () {
        var moreTextBtn = $('.js-more-text'),
            moreCommentBtn = $('.js-more-comment');

        moreCommentBtn.on('click', function (e) {
            console.log('df');
            e.preventDefault();
            console.log($(this).prev());
            $(this).prev().fadeToggle();
            $(this).text(!$(this).hasClass('is-active') ? 'Свернуть' : 'Развернуть');
            $(this).toggleClass('is-active');
        });

        moreTextBtn.on('click', function (e) {
            e.preventDefault();

            $(this).prev().fadeToggle();
            $(this).text(!$(this).hasClass('is-active') ? 'Скрыть' : 'Подробнее');
            $(this).toggleClass('is-active');
        });
    })();

    // scroll to section
    (function () {
        var nav = $('.js-about-us-nav'),
            navItem = nav.children(),
            scrollLink = $('.js-scroll-link');

        navItem.on('click', function (e) {
            e.preventDefault();
            var el = $(this).attr('href');
            $('html, body').animate({ scrollTop: $(el).offset().top }, 1000);
            return false;
        });

        scrollLink.on('click', function (e) {
            e.preventDefault();
            var el = $(this).attr('href');
            $('html, body').animate({ scrollTop: $(el).offset().top }, 1000);
            return false;
        });
    })();

    // clear placeholder
    (function () {
        var el = $('input, textarea');
        el.focus(function () {
            $(this).data('placeholder', $(this).attr('placeholder'));
            $(this).attr('placeholder', '');
        });
        el.blur(function () {
            $(this).attr('placeholder', $(this).data('placeholder'));
        });
    })();

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
});