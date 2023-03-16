const headerDesk = document.querySelector('.header--desktop')

window.addEventListener('scroll', () => {
    if (window.scrollY > 0){
        headerDesk.classList.add('scroll')
    } else{
        headerDesk.classList.remove('scroll')
    }

    

})