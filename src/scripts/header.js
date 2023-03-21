document.addEventListener('DOMContentLoaded', () => {
  const headerMenu = document.querySelector('.header__menu');
  const headerMenuMob = document.querySelector('.header__menu--mob');
  const headerMenuOpen = document.querySelector('.header__menu--open')
  const headerOverlay = document.querySelector('.overlay')
  const menuFull = document.querySelector('.menu--full')
  const menuFullMob = document.querySelector('.header__menu--open-mob')
  const bodyScroll = document.querySelector('.body')
  const headerDesktop = document.querySelector('.header--desktop')

  headerOverlay.addEventListener('click', () => {
    toggleHeader();
  })
  headerMenu.addEventListener('click', () => {
    toggleHeader();
  })

  function toggleHeader(){
    headerMenuOpen.classList.toggle('hidden')
    bodyScroll.classList.toggle('none-scroll')
    headerOverlay.classList.toggle('hidden')
    menuFull.classList.toggle('zed-zero')
    if (!headerDesktop.classList.contains('scroll')){
      headerDesktop.classList.toggle('scroll')
    }
    
  }


  //for mobile
  headerMenuMob.addEventListener('click', () => {
    toggleHeaderMob();
  })
  function toggleHeaderMob(){
    menuFullMob.classList.toggle('visible')
    bodyScroll.classList.toggle('none-scroll')
    if (!headerDesktop.classList.contains('scroll')){
      headerDesktop.classList.toggle('scroll')
    }
    
  }
})