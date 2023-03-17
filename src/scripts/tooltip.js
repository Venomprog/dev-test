import tippy from 'tippy.js';

document.addEventListener('DOMContentLoaded', () => {

  const tippy1 = document.querySelector('.tooltip__content');

  if (tippy1){
    tippy('#tooltip', {
      content: tippy1.innerHTML,
      allowHTML: true,
      duration: 500,
      arrow: false,
      trigger: 'mouseenter',
      animation: 'scale',
      delay: 0
    });
  }
  
  
})