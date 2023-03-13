document.addEventListener('DOMContentLoaded', () => {
    const fileBtns = document.querySelectorAll('.file-card__buttons-item')
    const fileDocs = document.querySelector('.contact-page__file-wrapper-document');
    const fileProt = document.querySelector('.contact-page__file-wrapper-protocol');

    fileBtns.forEach(card =>  {
        card.addEventListener('click', (event) =>{
            fileBtns.forEach(item => {
                const activeItem = event.target;
                item.classList.remove('active');
                activeItem.classList.add('active');
                
                if (activeItem.closest('[data-document]')){
                    fileDocs.classList.add('visible');
                    fileProt.classList.add('not-visible')
                    fileProt.classList.remove('visible');
                    fileDocs.classList.remove('not-visible')
                } else {
                    fileDocs.classList.remove('visible');
                    fileProt.classList.remove('not-visible')
                    fileProt.classList.add('visible');
                    fileDocs.classList.add('not-visible')
                }
            });
        });
    })

})