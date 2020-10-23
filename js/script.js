$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.burger-menu,.main-nav,.header-social').toggleClass('active');
        $('body').toggleClass('lock');
    });
 });

