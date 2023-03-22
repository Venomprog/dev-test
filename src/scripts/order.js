// document.addEventListener('DOMContentLoaded', () => {
//   const formBlock = document.querySelector('.form__input-block');
//   const inputList = formBlock.querySelectorAll('[data-form-input]')
//   const table = document.querySelector('[data-init-table]');
//   const tableInputs = table.querySelectorAll('[data-table-input]')
//   const changeBtn = document.querySelector('[data-change-button]')

//   changeBtn.addEventListener('click', () =>{
//     getingFormContent();
//   })

//   function getingFormContent(){
//     tableInputs.forEach(item => {
//       const prop = item.dataset.tableInput
//       const field = document.querySelector(`[data-form-input="${prop}"]`)
//       field.value = item.textContent
//       field.dispatchEvent(new Event('change'))
//     })
//   }

//   tableInputs.forEach(item => {
//   })

//   inputList.forEach(item =>{
//   })
// })
