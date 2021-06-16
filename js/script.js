$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 4,
        easing: 'easy',
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        draggable: false,
        waitForAnimate: false,
        // centerMode: true,
        responsive: [{
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }

        ]
    });
});