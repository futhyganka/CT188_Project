// header
const swiper = new Swiper('.slider.swiper', {
    // Optional parameters
    loop: true,
    grabCursor: true,
    slideToClickedSlide: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    speed: 2000,

    // Navigation arrows
    navigation: {
        nextEl: '.slider .swiper-button-next',
        prevEl: '.slider .swiper-button-prev',
    },

});



// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     slidesPerView: 2,
//     loop: false,
//     grabCursor: true,
//     slideToClickedSlide: false,

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     breakpoints: {
//         // 300: { slidesPerView: 2},
//         740: { slidesPerView: 3},
//         1024:{ slidesPerView: 4},
//         1200:{ slidesPerView: 5},
//     }

// });