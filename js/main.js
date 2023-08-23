$(function () {

    $('.header-search').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active');
    });


    $(document).mouseup(function (e) {
        var div = $(".header-search");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.removeClass('active');
        }
    });

    $('.consert-btn').on('click', function (e) {
        e.preventDefault();
        $( ".reviews__cards .hidden" ).slideDown( "slow", function(){

        });
    });

    $('.consert-btn').on('click', function (e) {
        e.preventDefault();
        $( ".concert__info-wrap .hidden" ).slideDown( "slow", function(){

        });
    });

});




// swipper 1

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 20,
    spaceBetween: 26,
    speed: 1000,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 5,
            spaceBetween: 10,
        },
        370: {
            slidesPerView: 7,
            spaceBetween: 10,
        },
        700: {
            slidesPerView: 10,
            spaceBetween: 10,
        },
        1000: {
            slidesPerView: 16,
            spaceBetween: 20,
        },
        1360: {
            slidesPerView: 20,
            spaceBetween: 20,
        }
    }
});


// swipper 2
let swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 28,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    speed: 1000,
});

// swipper 3
let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 28,
    grabCursor: true,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
});





