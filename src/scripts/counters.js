
document.addEventListener('DOMContentLoaded', () => {
  const minesBtn = document.querySelectorAll('[data-counter-left]')
  const sumWrapper = document.querySelector('.counter__row-sum')

  if (minesBtn){

    minesBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.counterLeft
        const numWrapper = document.querySelector(`[data-number-container="${id}"]`)
        let num = parseInt(numWrapper.textContent);
  
        if (num > 0){
          num--
        }
  
        numWrapper.innerHTML = num;
  
        if (sumWrapper){
  
          getSum()
          const zumer = document.querySelector('[data-number-invalid="invalid"]')
          let zum = parseInt(zumer.textContent)
  
          if (zum >= getSum()){
            zumer.innerHTML = getSum()
          }
        }
      })
    })
  
  
    const counterNumbers = document.querySelectorAll('.counter__number')
    
    function getSum(){
      let sum = 0
      if (sumWrapper){
  
        counterNumbers.forEach(number =>{
          if (number.dataset.numberInvalid !== "invalid"){
            sum += parseInt(number.textContent)
          }
          
          sumWrapper.innerHTML = sum
        })
        
        if (sum >= 12){
          alert('modal')
        }
      }
      return sum;
    }
    
    const plusBtn = document.querySelectorAll('[data-counter-right]')
  
    plusBtn.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.counterRight
        const numWrapper = document.querySelector(`[data-number-container="${id}"]`)
  
        let number = parseInt(numWrapper.textContent);
        
        if (getSum() > 11){
          if (numWrapper.dataset.numberInvalid == "invalid" && number < getSum()){
            number++
          } 
        } else {
          if (numWrapper.dataset.numberInvalid == "invalid" && number >= getSum()){
            return
          } 
          number++
        }
        
        numWrapper.innerHTML = number;
        
        if (sumWrapper){
          getSum()
        }
      })
    })
////////////////////////////

    const dataEl = document.querySelector('[data-select-data]')
    if (dataEl){

      const data = JSON.parse(dataEl.getAttribute('data-select-data'))
      const selectWrapper = document.querySelector('.select-wrapper__item')
      const dataIt = document.querySelector('[data-select-item]')
      const clearBtn = document.querySelector('[data-select-clear]')
      
      data.forEach(item =>{
        const text = item.option
        const option = new Option(text)
        dataEl.append(option)
        
          dataEl.onchange = function() {
            if (dataEl.value){
              const obj = data.find(item => item.option === this.value)
              const items = obj.items
              
              selectWrapper.classList.remove('hidden')
              
              for (let i = 1; i < dataIt.length; i++) {
                dataIt[i].remove()
                i--
              }
          
              items.forEach(key =>{
                const items = new Option(key, key)
                dataIt.append(items)
              })
          
              if (dataIt.value) {
                dataIt.value = null
                dataIt.dispatchEvent(new Event('change'))
              }
            }
          }
        
        
          clearBtn.addEventListener('click', () => {
            dataEl.value = null
            dataEl.dispatchEvent(new Event('change'))
            selectWrapper.classList.add('hidden')
            
            for (let i = 1; i < dataIt.length; i++) {
              dataIt[i].remove()
              i--
            }
          })
      })
    }
  }

});


  
