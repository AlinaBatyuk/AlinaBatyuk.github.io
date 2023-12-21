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