$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.sidebar').css({left: '0'})
        $('.backdrop').css({display: 'block'})
    })
    $('.backdrop').click(function() {
        $('.sidebar').css({left: '-67%'});
        $('.backdrop').css({display: 'none'})
    })
})