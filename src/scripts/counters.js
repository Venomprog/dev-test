document.addEventListener('DOMContentLoaded', () => {
  let counter = 5;
  window.addEventListener('click', (event) => {
    const element = event.target;
    console.log(element)


    
    if (element.closest('[data-counter-left]')){
      
      console.log('jop')
      counter--;
      // const id = element.dataset.counterLeft;
      console.log(element.dataset.counterLeft);
      // document.querySelector(`[data-number-container="${id}"]`).innerHTML = counter;
    }
    
    
  });



});