
document.addEventListener('DOMContentLoaded', () => {
    const modalForm = document.querySelector('.contact-page__modal-form');
    const modalSubBlock = document.querySelector('.contact-page__row--submit');
    const modalWrapper = document.querySelector('.contact-page__row--form');
    const formCloseBtn = document.querySelector('.form__button--close');
    

    modalForm.addEventListener('submit', (event) =>{
        event.preventDefault();

        modalWrapper.classList.toggle('none-visible');
        modalSubBlock.classList.toggle('visible');
        modalForm.reset();
    });
    


    
    function toggleClose(){
        
        modalWrapper.classList.toggle('none-visible');
        modalSubBlock.classList.toggle('visible');
    }

})