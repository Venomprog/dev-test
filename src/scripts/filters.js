document.addEventListener('DOMContentLoaded', () => {
  const filtersWrapper = document.querySelector('.filters__wrapper')
  const filterObj = document.querySelectorAll('[data-filter-first]')
  const categoryList = document.querySelectorAll('[data-filter-category]')
  const filterBackList = document.querySelectorAll('[data-filter-back]')

  filterObj.forEach(btn =>{
    btn.addEventListener('click', () =>{
      filtersWrapper.classList.toggle('active')
    })
  })

  categoryList.forEach(item =>{
    const id = item.dataset.filterCategory
    item.onclick = () => {
      document.querySelector(`[data-filter-checkboxes="${id}"]`).classList.add('active')
    }
  })

  filterBackList.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('[data-filter-checkboxes]').classList.remove('active')
    })
  })

  const inputList = document.querySelectorAll('.form___input--checkbox')
  const confirmBtn = document.querySelector('.filters__button-confirm')
  const filterConfirmWrapper = document.querySelector('.filters-confirm__wrapper')
  
  confirmBtn.addEventListener('click', () => {
    let inpArr = []
    inputList.forEach(input => {
      if (input.checked){
        inpArr.push(input.id)
      }
    })
    renderInputs(inpArr)
  })
  
  function renderInputs(arr){
    filterConfirmWrapper.innerHTML = " "
    for (let i of arr){
      filterConfirmWrapper.innerHTML += 
      `<div class="filters-confirm__item">
        <div class="filters-confirm__text" >${i}</div>
        <div class="filters-confirm__close">Close</div>
      </div>`
    }

    return filterConfirmWrapper
  }

  window.addEventListener('click', (event) => {
    const ev = event.target

    if (ev.classList.contains('filters-confirm__close')){
      const textCom = ev.parentNode.querySelector('.filters-confirm__text').textContent
      document.getElementById(`${textCom}`).checked = false
      
      ev.closest('.filters-confirm__item').remove()
    }
  })

  const resetBtn = document.querySelector('.filters__button-reset ')

  resetBtn.addEventListener('click', () =>{

    inputList.forEach(item =>{
      item.checked = false
    })
    filterConfirmWrapper.innerHTML = ""
  })
})