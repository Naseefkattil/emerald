$(document).ready(function() {
    var wow = new WOW({
        boxClass: "wow", // animated element css class (default is wow)
        animateClass: "animated", // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {},
        scrollContainer: null, // optional scroll container selector, otherwise use window,
        resetAnimation: true, // reset animation on end (default is true)
    });
    wow.init();
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        nav: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            600: {
                items: 1,
                nav: true,
            },
            1000: {
                items: 1,
                nav: true,
                loop: false,
            },
        },
    });

    $(".slick").slick({
        infinite: true,
        nav: false,
        autoplay: true,
        dots: false,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow: '<button class="slide-arrow prev-arrow"><img src="./images/prev.png" alt="previous"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img src="./images/prev.png" alt="next" class="next"></img></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });
});

function menuOpen() {
    $("body").addClass("active");
}

function menuClose() {
    $("body").removeClass("active");
}