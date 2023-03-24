document.addEventListener('DOMContentLoaded', () => {


  const lkInputs = document.querySelectorAll('[data-input]')
  const redactBtn = document.querySelector('[data-button-redact]')

  if (lkInputs){

    let arrInp = []
  
    redactBtn.addEventListener('click', () => {
      
      lkInputs.forEach((inp, i) => {
        inp.classList.remove('not-active')
        arrInp[i] = inp.value
      })
  
      console.log(arrInp)
    })
  
    const cancelBtn = document.querySelector('[data-button-cancel]')
  
    cancelBtn.addEventListener('click', () => {
      lkInputs.forEach((inp, i) => {
        inp.value = arrInp[i]
        inp.classList.add('not-active')
      })
    })
  
  
    const saveBtn = document.querySelector('[data-button-save]')
  
    saveBtn.addEventListener('click', () => {
      lkInputs.forEach((inp, i) => {
        arrInp[i] = inp.value
        inp.classList.add('not-active')
      })
    })
  }

})