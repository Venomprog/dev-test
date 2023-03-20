import Swiper from 'swiper/bundle'

const sliderList = document.querySelectorAll('[data-slider]')


sliderList.forEach((item, i) =>{
    const buttonsId = item.getAttribute('data-buttons-id')
    let options = {
        speed: 700,
        spaceBetween: 100,
        direction: 'horizontal',
        navigation: {
            nextEl: `[data-slider-right="${buttonsId}"]`,
            prevEl: `[data-slider-left="${buttonsId}"]`,
        },
        loop: true,
    }
    const id = item.getAttribute('data-slider')
    let isThumbs = item.hasAttribute('data-slider-thumbs')
    let thumbsSlider

    if (isThumbs) {
        console.log('done')
        const thumbsEl = document.querySelector('[data-thumbs]')
        thumbsSlider = new Swiper(thumbsEl , {
            ...options,
            loop: false,
            breakpoints: {
                1080:{
                    slidesPerView: 'auto',
                    spaceBetween: 30
                }
            },
            
        })
    }

    switch (id) {
        case '1':
            options = {
                ...options,
                loop: false,
                on: {
                    slideChange: function() {
                        let swipeIndex = slider.realIndex;
                        thumbsSlider.activeIndex = swipeIndex
                        // console.log(slider.activeIndex)
                        thumbsSlider.updateSlidesClasses()
                        
                    },
                    init: function(){
                        const butInd = document.querySelectorAll('.buttons-date__item');
                        butInd.forEach((btn, i) => {
                            btn.addEventListener('click', () =>{
                                console.log(i)
                                // console.log(slider)
                                slider.slideTo(i)
                            })
                        })
                    }
                },
                
            }
            break;
        case 'text':
            options = {
                ...options,
                speed: 0,
                spaceBetween: 10,
                pagination: {
                    el: '.swiper-pagination',
                },
            }
            break;
        
    }
    
    let slider = new Swiper(item, options)
    
});







