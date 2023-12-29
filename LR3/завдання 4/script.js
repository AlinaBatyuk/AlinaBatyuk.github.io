let imagesArray = [ {path: 'images/cat1.jpg',
		title : 'Сіра гламурна киця',
		description : 'Британська короткошерста',
		},
	{	path: 'images/cat2.jpg',
		title : 'Голубоока киця',
		description : 'Сіамська порода'
		},
	{	path: 'images/cat3.jpg',
		title : 'Леопардова киця',
		description : 'Бенгальська кішка'
		}
];

				// const forward = document.getElementById('forward')


				// forward.addEventListener('click', ()=> {
				// 	document.querySelector('img').src = imagesArray[1].path
				// })


// back.addEventListener("click", () => {
// 	backphoto(currentIndex)
// 	// photo.removeChild(img)
// })



// initPhotoRotator();
const back = document.getElementById('back')
const numberphoto = document.getElementById('number-photo')
const forward = document.getElementById('forward')

				// function addLinks(object, text) {
				// 	const link = document.createElement('div')
				// 	// link.className = 'number-centred'
				// 	link.textContent = text;
				// 	object.prepend(link)
				// }

// addLinks(back, 'Назад')
// addLinks(forward, 'Вперед')

const goback = document.createElement('div')
goback.textContent = "Назад";
const goforward = document.createElement('div')
goforward.textContent = "Вперед";

back.prepend(goback)
forward.prepend(goforward)

function addNumber(){
	const selectphoto = document.createElement('div')
	selectphoto.className = 'number-centred'
	selectphoto.textContent = "Фото" + (imagesArray.length+1) + "з 3";
	numberphoto.prepend(selectphoto)
}
addNumber()
initPhotoRotator()

function initPhotoRotator() {
	const textphoto = document.getElementById('text-photo')
	const div = document.createElement('div')
	div.className = 'text-centered'
	div.textContent = imagesArray[0].title

	textphoto.prepend(div)
				    
	const div1 = document.createElement('div')
	div1.className = 'text-centered'
	div1.textContent = imagesArray[0].description

	textphoto.append(div1)

	// const div2 = document.createElement('div')
	// div2.imag = imagesArray[0].path

				    // block.prepend(div2)

}



// const currentIndex = 0;
				// var currentIndex = 0;

				// const photo = document.getElementById('photo')
				// console.log(photo)
				// const image = document.createElement('img')
				// image.src = imagesArray[currentIndex].path
				// photo.prepend(image)

				// function test(index) {
				//         const photo = document.getElementById('photo')
				// console.log(index)
				// const image = document.createElement('img')
				// image.src = imagesArray[index].path
				// photo.prepend(image)
				// // photo.removeChild(img)
				// currentIndex++

				// }

// forward.addEventListener("click", () => {
// 	test(currentIndex)
// 	// photo.removeChild(img)
// })

// const photo = document.getElementById('photo')
// console.log(photo)
// const image = document.createElement('img')
// image.src = imagesArray[currentIndex].path
// photo.prepend(image)

		// function backphoto(index) {
		//         const photo = document.getElementById('photo')
		// console.log(index)
		// const image = document.createElement('img')
		// image.src = imagesArray[index].path
		// photo.prepend(image)
		// // photo.removeChild(img)
		// currentIndex--

		// }

		// back.addEventListener("click", () => {
		// 	backphoto(currentIndex)
		// 	// photo.removeChild(img)
		// })



// forward.addEventListener("click", function (currentIndex) {
//         const photo = document.getElementById('photo')
// console.log(currentIndex)
// const image = document.createElement('img')
// image.src = imagesArray[currentIndex].path
// photo.prepend(image)

// });

				// function initPhotoRotator() {

				// 	// for (let i=0; i<imagesArray.length; i++) {
				// 	// 	console.log(i)
				// 	// }


				// 	imagesArray.forEach(function(item, index) {
				//   		console.log(item.title)
				// 	});


				// 	const textphoto = document.getElementById('text-photo')
				//     const div = document.createElement('div')
				//     div.className = 'text-centered'
				//     div.textContent = imagesArray[0].title

				//     textphoto.prepend(div)
				    
				//     const div1 = document.createElement('div')
				//     div1.className = 'text-centered'
				//     div1.textContent = imagesArray[0].description

				//     textphoto.append(div1)

				   
				//  // const div2 = document.createElement('div')
				//     // div2.imag = imagesArray[0].path
				//     block.prepend(div2)

// 				// }
// initPhotoRotator()


