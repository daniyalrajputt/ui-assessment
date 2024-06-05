var experience_swiper = new Swiper(".experience-card-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    loop: true,
    loopedSlides: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 4,
        },
    },
});

var testimonial_swiper = new Swiper(".testimonial-card-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    loopedSlides: 10,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
        640: {
            slidesPerView: 1.5,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});



// var project_slider_left_swiper = new Swiper(".project_slider_left", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     direction: 'horizontal',
//     freeMode: true,
//     freeModeMomentum: false,
//     freeModeMomentumBounce: false,
//     speed: 5000,
//     autoplay: {
//         delay: 2000,
//         disableOnInteraction: false,
//         //waitForTransition: false,
//         reverseDirection: true,
//     },
//     loop: true,
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     }
// });

// var project_slider_right_swiper = new Swiper(".project_slider_right", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     direction: 'horizontal',
//     freeMode: true,
//     freeModeMomentum: false,
//     freeModeMomentumBounce: false,
//     speed: 5000,
//     autoplay: {
//         delay: 2000,
//         //waitForTransition: false,
//         disableOnInteraction: false,
//         reverseDirection: false,
//     },
//     loop: true,
//     breakpoints: {
//         640: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 3,
//         },
//     }
// });



var blog_swiper = new Swiper(".blog-card-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopedSlides: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
        640: {
            slidesPerView: 1.5,
            centeredSlides: true,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



// Script for slick Carousel
$('.project_slider_left').slick({
    autoplay: true,
    // autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    infinite: true,
    cssEase: 'linear',
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-double-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-double-right"></i></button>',
    responsive: [{
        breakpoint: 1199,
        settings: {
            slidesToShow: 3
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            arrows: false
        }
    },
    {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            arrows: false
        }
    }
    ]
});
$('.project_slider_right').slick({
    autoplay: true,
    // autoplaySpeed: 1000,
    dots: false,
    arrows: false,
    infinite: true,
    cssEase: 'linear',
    rtl: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-double-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-double-right"></i></button>',
    responsive: [{
        breakpoint: 1199,
        settings: {
            slidesToShow: 3
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            arrows: false
        }
    },
    {
        breakpoint: 575,
        settings: {
            slidesToShow: 1,
            arrows: false
        }
    }
    ]
});



const scrollContainer = document.querySelector(".experience-slider");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});




$(document).ready(function () {
    // show more button - testimonials
    $(".description").each(function () {
        var $description = $(this);
        var descriptionText = $description.text();
        var maxLength = 300;

        if (descriptionText.length > maxLength) {
            $description.addClass("show-full");
            $description.text(descriptionText.slice(0, maxLength) + '...');
            var $showMoreButton = $description.siblings(".show-more");
            $showMoreButton.hide();

            $showMoreButton.on("click", function () {
                if ($description.hasClass("show-full")) {
                    $description.removeClass("show-full");
                    $description.text(descriptionText);
                    $showMoreButton.text("Show Less");
                } else {
                    $description.addClass("show-full");
                    $description.text(descriptionText.slice(0, maxLength) + '...');
                    $showMoreButton.text("Show More");
                }
            });

            $showMoreButton.show();
        } else {
            // If the length is less than or equal to 200 characters, hide the button
            $description.siblings(".show-more").hide();
        }
    });
});
