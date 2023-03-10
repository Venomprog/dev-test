
document.addEventListener('DOMContentLoaded', () => {
    const accordList = document.querySelectorAll('.accord__row--top');

    

    window.addEventListener('click', event => {
        const target = event.target

        if (target.closest('[data-accordion-button]')) {
            const accordion = target.closest('[data-accordion]')
            const dropdown = accordion.querySelector('[data-accordion-dropdown]')

            accordion.classList.toggle('active')
            $(dropdown).slideToggle()
        }
    })

})