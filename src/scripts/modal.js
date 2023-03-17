import '@fancyapps/fancybox'

const modalForm = document.querySelector('.contact-page__modal-form');
const modalSubBlock = document.querySelector('.contact-page__row--submit');

const modalWrapper = document.querySelector('.contact-page__row--form');


$.fancybox.defaults.afterClose = function(instance, slide){
    if (modalWrapper.classList.contains('none-visible')){
        modalForm.reset();
        console.log(123);
        modalWrapper.classList.toggle('none-visible');
        modalSubBlock.classList.toggle('visible');
    }
    

}

document.addEventListener('DOMContentLoaded', () =>{

    const openModal = document.querySelector('.open-modal');
    const modal = document.querySelector('.container__modal');
    

    $.fancybox.defaults.smallBtn = false;
    if (openModal){
        openModal.addEventListener('click', (event) =>{
        
            event.preventDefault();
            $.fancybox.open($(modal));
        });
    }
    

    
})
