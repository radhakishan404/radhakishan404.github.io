$(document).ready(function () {
    $('body').addClass('page-ready');
    $('body').removeClass('no-js');
})

$('.js-menu-trigger').click(function (e) {
    e.preventDefault();
    if ($('body').hasClass('menu-is-active')) {
        $('body').removeClass('menu-is-active');
    } else {
        $('body').addClass('menu-is-active');
    }
});