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

})
