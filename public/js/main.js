$(document).ready(function() {
    const slide = document.getElementById('slides');
    let bg = ['../img/img1.jpg', '../img/img2.jpg', '../img/img3.jpg']
    $('#slides').css('background-image', 'url('+bg[0]+')')
    let counter = 0;
    let nextColor;
    function bgChange() {
        counter = (counter + 1) % bg.length;
        nextColor = bg[counter];
        // slide.style.backgroundImage = "url('+nextColor+')";
        $('#slides').css('background-image', 'url('+nextColor+')')
    }
    setInterval(bgChange, 5000)

    $('.main-element').each(function() {
        var $this = $(this);
        $this.typed({
            strings: $this.attr('data-elements').split(','),
            typeSpeed: 100,
            backDelay: 3000
        })
    })
})