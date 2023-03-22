document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('click', (event) => {
    const element = event.target
    // console.log('done')
    if (element.classList.contains('counter__button')){
      console.log('done')
    }
    
  })



})