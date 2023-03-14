// document.addEventListener('DOMContentLoaded', () => {
//     const fileBtns = document.querySelectorAll('.file-card__buttons-item')
//     const fileDocs = document.querySelector('.contact-page__file-wrapper-document');
//     const fileProt = document.querySelector('.contact-page__file-wrapper-protocol');

//     fileBtns.forEach(card =>  {
//         card.addEventListener('click', () =>{
//             fileBtns.forEach(item => {
                
//                 item.classList.remove('active');
//                 card.classList.add('active');
                
//                 if (card.closest('[data-document]')){
                    
//                     fileProt.classList.add('not-visible')
//                     fileProt.classList.remove('visible');
//                     fileDocs.classList.remove('not-visible')
//                 } else {
                    
//                     fileProt.classList.remove('not-visible')
//                     fileProt.classList.add('visible');
//                     fileDocs.classList.add('not-visible')
//                 }
//             });
//         });
//     })

// })