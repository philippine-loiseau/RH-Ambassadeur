$('.owl-carousel').owlCarousel({
    loop:true,
    dots: true,
    dotsEach: true,
    nav:true,
    margin: 10,
    responsive:{
        0:{
            items:1
        },
        375: {
            items: 1.2
        },
        600:{
            items:3
        },
        748: {
            items: 2.6
        },
        1024:{
            items: 3.6
        },
        1440: {
            items: 4
        },
        1700: {
            items: 5
        }
    }
})