document.addEventListener('DOMContentLoaded', () => {
    const fileBtns = document.querySelectorAll('.file-card__buttons-item');
    const fileWrappers = document.querySelectorAll('.contact-page__file-wrapper');
    

    fileBtns.forEach(card =>  {
        card.addEventListener('click', () =>{
            fileBtns.forEach(item => {
                item.classList.remove('active');
                card.classList.add('active');

                fileWrappers.forEach(fileWrapper =>{
                    fileWrapper.classList.add('not-visible');
                    fileWrapper.classList.remove('visible');
                });
                fileWrappers.forEach(wrapper =>{
                    if (card.dataset.doc == wrapper.dataset.id){
                        wrapper.classList.add('visible');
                    }
                });
                
                
            });
        });
    })

})
