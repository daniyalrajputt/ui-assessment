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

var education_swiper = new Swiper(".education-card-slider", {
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
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


var testimonial_swiper = new Swiper(".testimonial-card-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    loopedSlides: 10,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});



var project_slider_left_swiper = new Swiper(".project_slider_left", {
    slidesPerView: 1,
    spaceBetween: 30,
    direction: 'horizontal',
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
        //waitForTransition: false,
        reverseDirection: true,
    },
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

var project_slider_right_swiper = new Swiper(".project_slider_right", {
    slidesPerView: 1,
    spaceBetween: 30,
    direction: 'horizontal',
    freeMode: true,
    freeModeMomentum: false,
    freeModeMomentumBounce: false,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: true,
        //waitForTransition: false,
        reverseDirection: false,
    },
    loop: true,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});



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
            slidesPerView: 2,
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