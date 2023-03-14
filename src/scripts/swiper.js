import Swiper from 'swiper/bundle'

const swiper = new Swiper('.image-swiper', {
    speed: 700,
    spaceBetween: 100,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


const swiperHistory = new Swiper('.slider__wrapper--history', {
    speed: 700,
    spaceBetween: 100,
    direction: 'horizontal',
    // loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.right-slide',
        prevEl: '.left-slide',
    },
    
});



const swiperThumbs = new Swiper('.swiper-thumbs', {
    speed: 700,
    spaceBetween: 100,
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        1080:{
            slidesPerView: 'auto',
            spaceBetween: 30
        }
    },
    slideToClickedSlide: true
    // // Navigation arrows
    // navigation: {
    //     nextEl: '.right-slide',
    //     prevEl: '.left-slide',
    // },
    
});



swiperHistory.on('slideChange', function (swiper) {
    let swipeIndex = swiperHistory.realIndex;
    
    swiperThumbs.activeIndex = swipeIndex

    swiperThumbs.updateSlidesClasses()

    
});


const butInd = document.querySelectorAll('.buttons-date__item');
    butInd.forEach((btn, i) => {
        btn.addEventListener('click', () =>{
            
            swiperHistory.slideTo(i)
        })
    })


const swiperWas = new Swiper('.swiper--was', {
    speed: 700,
    spaceBetween: 100,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.right-slide',
        prevEl: '.left-slide',
    },
    breakpoints: {
        // when window width is >= 320px
        1080: {
            slidesPerView: 'auto',
            spaceBetween: 20
        },
        // when window width is >= 480px
        
    },
    centeredSlides: true
});

const swiperPag = new Swiper('.swiper-pag', {
    speed: 700,
    spaceBetween: 0,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.right-slide-pag',
        prevEl: '.left-slide-pag',
    },
    // breakpoints: {
    //     // when window width is >= 320px
    //     1080: {
    //         slidesPerView: 'auto',
    //         spaceBetween: 20
    //     },
    //     // when window width is >= 480px
        
    // },
    centeredSlides: true
});

const swiperPagText = new Swiper('.swiper-pag-text', {
    speed: 0,
    spaceBetween: 30,
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination--custom',
        type: 'bullets',
        
    },

    // Navigation arrows
    navigation: {
        nextEl: '.right-slide-pag',
        prevEl: '.left-slide-pag',
    },
    // breakpoints: {
    //     // when window width is >= 320px
    //     1080: {
    //         slidesPerView: 'auto',
    //         spaceBetween: 20
    //     },
    //     // when window width is >= 480px
        
    // },
});







