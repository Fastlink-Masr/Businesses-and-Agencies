$(document).ready(function () {
    var clicked = false;
    $('.menu-toggle').click(function () {
        $(this).toggleClass('open');
        $('.nav-mob').toggleClass('site-nav--open');
    });
    $('.nav-mob nav ul li ~ a').click(function () {
        $('.menu-toggle').toggleClass('open');
        $('.nav-mob').toggleClass('site-nav--open');
    });
    $('.nav-mob').click(function () {
        var $menu = $('.menu-toggle');
        var $nav = $('.nav-mob');
        if (!clicked) {
            clicked = true;
            $menu.toggleClass('open');
            $nav.toggleClass('site-nav--open');
            setTimeout(function () {
                clicked = false;
            }, 1200);
        };
    });
});