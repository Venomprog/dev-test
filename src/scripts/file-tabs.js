document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('[data-tabs]')
    tabs.forEach(tab => {
        const fileBtns = tab.querySelectorAll('.file-card__buttons-item');
        const fileWrappers = tab.querySelectorAll('.contact-page__file-wrapper');
        
    
        fileBtns.forEach((card, i) =>  {
            card.addEventListener('click', () =>{
                if (!card.classList.contains('active')) {
                    tab.querySelector('.file-card__buttons-item.active').classList.remove('active')
                    tab.querySelector('.contact-page__file-wrapper.visible').classList.remove('visible')
                    
                    card.classList.add('active');
                    fileWrappers[i].classList.add('visible')
                }
                
            });
        })
    })

})
