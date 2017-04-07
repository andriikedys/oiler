'use strict';

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