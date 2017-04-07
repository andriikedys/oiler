'use strict';

$(document).ready(function () {

    $('.js-oil-slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="oil-slider__prev"><svg class="icon-arrow-bold"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-bold"></use></svg></button>',
        nextArrow: '<button type="button" class="oil-slider__next"><svg class="icon-arrow-bold"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-bold"></use></svg></button>',
        responsive: [{
            breakpoint: 1023,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.js-serv-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }

        }, {
            breakpoint: 1023,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.js-certif-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 1023,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('.js-slider-vertical').slick({
        vertical: true,
        prevArrow: $('.js-arr-top'),
        nextArrow: $('.js-arr-bottom'),
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{

            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                vertical: false
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                vertical: false
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                vertical: false
            }
        }]
    });

    $('.js-gallery').fancybox({
        infobar: true,
        buttons: true,
        slideShow: false,
        fullScreen: false,
        thumbs: false,
        closeBtn: true
    });

    function initSlider(slider) {
        initSlickSlider(slider);
        toggleSlider(768, slider);

        $(window).resize(function () {
            toggleSlider(768, slider);
        });

        function toggleSlider(breakpoint, slider) {
            if ($(window).width() < breakpoint) {
                if (!slider.hasClass('slick-initialized')) {
                    initSlickSlider(slider);
                }
            } else {
                slider.slick('unslick');
            }
        }

        function initSlickSlider(slider) {
            slider.slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2
                    }
                }, {
                    breakpoint: 350,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
        }
    }

    initSlider($('.js-partners-slider'));
    initSlider($('.js-passed-slider'));
});