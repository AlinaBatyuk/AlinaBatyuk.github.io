const iconOpen = document.getElementById('iconOpen')
const iconClose = document.getElementById('iconClose')
const mainMenu = document.getElementById('mainMenu')
const menuIcons = document.getElementById('menuIcons')

menuIcons.addEventListener('click', ()=> {
	iconOpen.classList.toggle('hide')
	iconClose.classList.toggle('hide')
	mainMenu.classList.toggle('hide')
})

const itemOpen = document.getElementById('itemOpen')
const itemClose = document.getElementById('itemClose')
const basketFunctions = document.getElementById('basketFunctions')
const menuItem = document.getElementById('menuItem')

menuItem.addEventListener('click', ()=> {
	itemOpen.classList.toggle('item')
	itemClose.classList.toggle('hide')
	basketFunctions.classList.toggle('hide')
})

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  		breakpoints: {
            // when window width is >= 320px
            314: {
                slidesPerView: 1,
                spaceBetween: 0,
                slideToClickedSlide: true,
            },
            // when window width is >= 480px
            466: {
                slidesPerView: 2,
                spaceBetween: 20,
                slideToClickedSlide: true,
            },
            // when window width is >= 640px
            826: {
                slidesPerView: 3,
                spaceBetween: 20,
                slideToClickedSlide: true,
            }
        }
});