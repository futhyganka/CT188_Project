// header
const swiperHeader = new Swiper('.slider.swiper', {
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


var swiper = document.querySelectorAll('#main .section .content');
var swiperMain = [];

var cntSwiper = swiper.length;

for(let i = 0; i < cntSwiper; i++) {
    swiper[i].classList.add(`swiper${i + 1}`);
    // swiper[i].children[1].classList.add(`swiper-button-prev${i + 1}`);
    // swiper[i].children[2].classList.add(`swiper-button-prev${i + 1}`);
    swiperMain[i] = new Swiper(`#main .section .swiper${i + 1}`, {
        // Optional parameters
        slidesPerView: 2,
        loop: false,
        grabCursor: true,
        slideToClickedSlide: false,

        // Navigation arrows
        navigation: {
            nextEl: `#main .section .swiper${i + 1} .swiper-button-next`,
            prevEl: `#main .section .swiper${i + 1} .swiper-button-prev`,
        },

        breakpoints: {
            // 300: { slidesPerView: 2},
            740: { slidesPerView: 3},
            1024:{ slidesPerView: 4},
            1200:{ slidesPerView: 5},
        }

    });

}


