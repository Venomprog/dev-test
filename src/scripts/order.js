document.addEventListener('DOMContentLoaded', () => {
  const formBlock = document.querySelector('.form__input-block');
  const inputList = formBlock.querySelectorAll('[data-form-input]')
  const table = document.querySelector('[data-init-table]');
  const tableInputs = table.querySelectorAll('[data-table-input]')
  const changeBtn = document.querySelector('[data-change-button]')

  changeBtn.addEventListener('click', () =>{
    getingFormContent();
  })

  function getingFormContent(){
    tableInputs.forEach(item => {
      const prop = item.dataset.tableInput
      const field = document.querySelector(`[data-form-input="${prop}"]`)
      field.value = item.textContent
      field.dispatchEvent(new Event('change'))
      // inputList.forEach(input =>{
      //   if (item.dataset.tableInput == input.dataset.formInput){
      //     input.value = item.textContent;
      //     // console.log(input)
      //   }
      // })
    })
  }

  tableInputs.forEach(item => {
    // console.log(item.dataset.tableInput)
    // console.log(item.textContent)
  })

  inputList.forEach(item =>{
    // console.log(item.dataset.formInput)
  })
})
