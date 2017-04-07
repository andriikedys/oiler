$(function () {
    if($('.js-oil-fullpage').length){
        $('.js-oil-fullpage').fullpage({
            sectionsColor: ['#fff', '#f1f1f1', '#fff', '#f1f1f1', '#fff', '#f1f1f1', '#fff', '#f1f1f1', '#fff', '#f1f1f1'],
            anchors: ['oil-section-1', 'oil-section-2', 'oil-section-3', 'oil-section-4', 'oil-section-5', 'oil-section-6', 'oil-section-7', 'oil-section-8', 'oil-section-9', 'oil-section-10'],
            menu: '.js-oil-nav',
            scrollOverflow: true,
            dragAndMove: true,
        });

        if( $(window).width() <= 767){
            $.fn.fullpage.destroy('all');
        }
    }

	// more text button
    //=include components/btnMore.js

	// scroll to section
	(function () {
		var nav = $('.js-about-us-nav'),
			navItem = nav.children(),
			scrollLink = $('.js-scroll-link');

		navItem.on('click', function (e) {
			e.preventDefault();
			var el = $(this).attr('href');
			$('html, body').animate({scrollTop: $(el).offset().top}, 1000);
			return false;
		});

		scrollLink.on('click', function (e) {
			e.preventDefault();
			var el = $(this).attr('href');
			$('html, body').animate({scrollTop: $(el).offset().top}, 1000);
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
	}());

    //=include components/countPrice.js




});
