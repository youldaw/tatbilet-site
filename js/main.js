// swipper 1

let swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    slidesPerView: 1.1,
    spaceBetween: 480,
    speed: 1500,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 1280,
        },
        700: {
            slidesPerView: 1,
            spaceBetween: 940,
        },
        1000: {
            slidesPerView: 1,
            spaceBetween: 550,
        },
        1360: {
            slidesPerView: 1,
            spaceBetween: 480,
        }
    }
});


// swipper 2
let swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 28,
    grabCursor: true,
    speed: 1500,
});

// swipper 3
let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 28,
    grabCursor: true,
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 1000,
    },
});




