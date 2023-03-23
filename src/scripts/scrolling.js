document.addEventListener('DOMContentLoaded', () => {
  const dataScrolls = document.querySelectorAll('[data-scroll-color]')
  const rowList = document.querySelectorAll('.scrolling-row')
  
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY

    rowList.forEach((item) => {
      const trueOffset = parseFloat(item.offsetTop - 150)
      if(scrollPos >= trueOffset){
        resetColor()

        const id = item.dataset.scrollRow
        const scrollLink = document.querySelector(`[data-scroll-color="${id}"]`)
        scrollLink.classList.add('active')
      }
    })
  })
  
  function resetColor(){
    dataScrolls.forEach(item => {
      item.classList.remove('active')
    })
  }

  dataScrolls.forEach(btn => {
    btn.addEventListener('click', () =>{
      const id = btn.dataset.scrollColor
      const scrSection = document.querySelector(`[data-scroll-row="${id}"]`)
      const scrOffset = parseFloat(scrSection.offsetTop - 150)
      
      window.scrollTo(0, scrOffset)
      console.log(scrOffset)
    })
  })

})