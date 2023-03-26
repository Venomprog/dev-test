document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('[data-slides]')
  slides.forEach(slide => {
    

    const customBtns = document.querySelectorAll('.custom--button')
    let target;
    customBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lastSlide = document.querySelector('.swiper-slide-active');
        const leftSlide = $(lastSlide).index()
        const rightSlide = ($(leftSlide).index() + 6)
      })
    })

    slide.addEventListener('mouseover', () => {
      const lastSlide = document.querySelector('.swiper-slide-active');
      const leftSlide = $(lastSlide).index()
      const rightSlide = (leftSlide + 5)
      console.log($(slide).index());
      console.log(leftSlide)
      console.log(rightSlide)
      slide.classList.add('active')
      if ($(slide).index() === leftSlide){
        
      } else {
        slides.forEach(slide => {
          slide.classList.add('translate')
        }) 
      }
      if ($(slide).index() === rightSlide){
        slides.forEach(slide => {
          slide.classList.add('translate-extreme')
        }) 
        // slides.forEach(slide => {
        //   slide.classList.add('translate-extreme')
        // })
        
      }
      // if (slide.closest('[data-slider-extreme]')){
      //   slides.forEach(slide => {
      //     slide.classList.add('translate-extreme')
      //   })
        
      // }
    })

    slide.addEventListener('mouseout', () => {
      slide.classList.remove('active')
      slides.forEach(slide => {
        slide.classList.remove('translate')
        slide.classList.remove('translate-extreme')
      })
    })
  })
})