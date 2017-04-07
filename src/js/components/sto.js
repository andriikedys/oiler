$(function () {

   // price accordion and tabs
   (function () {
      var priceAccordion = $('.js-price-accordion');

      priceAccordion.each(function () {
         var _this = $(this),
            _thisItem = _this.children(),
            _thisTitle = _this.find('.price-accordion__item-title'),
            _thisContent = _this.find('.price-accordion__item-content'),
            priceTabs = _this.find('.price-accordion__item'),
            priceTabsContent = $('.js-price-tabs').find('.price-adv__tab');

         priceTabs.on('click', function (e) {
            var index = $(this).index();
            

            priceTabsContent.eq(index - 1).slideToggle(200);
            priceTabsContent.hide().eq(index - 1).slideToggle(200);

         });

         _thisTitle.on('click', function (e) {
            e.preventDefault();

            if ($(this).closest(_thisItem).hasClass('is-active')) {
               $(this).next().slideUp().closest(_thisItem).removeClass('is-active');
            } else {
               $(this).closest(_thisItem).siblings().filter('.is-active').each(function () {
                  $(this).removeClass('is-active').find(_thisContent).slideUp();
               });
               $(this).next().slideDown().closest(_thisItem).addClass('is-active');
            }

         });

         _thisTitle.first().trigger('click');
      });

   })();

   // partners hide content
   (function () {
      var partnersSlider = $('.js-partners-slider'),
         partnersMoreBtn = $('.js-partners-more');

      partnersMoreBtn.each(function () {

         var sliderContent = $(this).prev(partnersSlider).children();

         $(this).on('click', function (e) {
            e.preventDefault();

            $(this).toggleClass('is-active');

            if (($(this).text()) === 'Подробнее') {
               $(this).text('Скрыть');
            } else {
               $(this).text('Подробнее');
            }

            sliderContent.each(function () {
               if ($(this).hasClass('is-visible')) {
                  $(this).fadeOut().removeClass('is-visible');
               }
               if ($(this).is(':hidden')) {
                  $(this).fadeIn().css("display", "inline-block").addClass('is-visible');
               }
            });
         });

      });
   })();

   // pack ordering
   (function () {

      var packBtn = $('.js-pack-btn'),
         packPopup = packBtn.next(),
         popupClose = $('.js-subscribe-pack-close');

      packBtn.on('click', function (e) {
         e.preventDefault();
         e.stopPropagation();

         packPopup.toggleClass('is-active');

         if ($(this).parent().siblings().children(packPopup).hasClass('is-active')) {
            $(this).parent().siblings().children(packPopup).removeClass('is-active');
         }

      });

      popupClose.on('click', function () {
         $(this).parent().removeClass('is-active');
      });

      $(window).on('click', function () {
         packPopup.removeClass('is-active');
      });

      packPopup.on('click', function (e) {
         e.stopPropagation()
      });

   })();

   // gmap scroll disable
   $(function () {
      $('div.gmap-holder').click(function (e) {
         $(this).find('iframe').css('pointer-events', 'all');
      }).mouseleave(function (e) {
         $(this).find('iframe').css('pointer-events', 'none');
      });
   });

});
