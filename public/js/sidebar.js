// $(document).ready(function() {
//     $('.hamburger').click(function() {
//         $('.sidebar').css({left: '0'})
//         $('.backdrop').css({display: 'block'})
//     })
//     $('.backdrop').click(function() {
//         $('.sidebar').css({left: '-67%'});
//         $('.backdrop').css({display: 'none'})
//     })
// })

// $(function() {
//     var url = window.location.pathname,
//     urlRegExp = new RegExp(url.replace(/\/$/, '') + '$');
//     console.log(url)
//     $('.nav-menu li a').each(function(e) {
//         console.log(e)
//         if(urlRegExp.test(this.href.replace(/\/$/, ''))) {
//             $(this).addClass('activelink')
//         }
//     })
// })

$(document).ready(function() {
    var current = window.location.pathname;
    $('.nav-menu li a').each(function() {
        var link = $(this).attr('href');
        if(current == link) {
            $(this).parent().addClass('activelink');
        }
    })
})