$(document).ready(()=>{

    $('#menu-bars').click(()=>{
        $('.nav').toggleClass('hide show');
    })

    $('.banner-images').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 150,
        slidesToShow: 1,
        slidesToScroll: 1,
     })

    // Back to top button
    let btn = $('#back-to-top');
    $(window).on('scroll', function(){
        if($(window).scrollTop()>300){
            btn.addClass('show-btn');
        } else {
            btn.removeClass('show-btn');
        }
    });
    btn.on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, '300');
        return false
    })

})
