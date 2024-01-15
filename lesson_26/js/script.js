"use strict"

// const link = document.querySelector('.link')
// // link.addEventListener("click",() => {
// // 	//  code
// // })

// link.addEventListener("click",clickReaction)

// function clickReaction(){
// 	// code
// 	console.log("Click!");
// }


// const links = document.querySelectorAll('.link')

// links.forEach(link => {
// 	link.addEventListener("click", clickReaction)
// 	link.addEventListener("mouseenter", clickReaction)
// 	link.addEventListener("mouseleave", clickReaction)
// 	link.addEventListener("mousemove", clickReaction)
// })

// function clickReaction(e){
// 	console.log(e.type)
// 	if (e.type == "mouseenter"){
// 		// code
// 	}
// 	else if(e.type === "click"){
// 		console.log(e.target);
// 	}
// }

// document.addEventListener("click", documentAction)
// function documentAction(e){
// 	const targetElement = e.target
// 	if (targetElement.closest('.link')){
// 		console.log('ok');
// 		e.preventDefault()
// 	}
// 	if (targetElement.closest('.button')){
// 		console.log('ok it is');
// 		e.preventDefault()
// 	}
// 	if (!targetElement.closest('.menu')){
// 		// close menu
// 	}
// }

// window.addEventListener("scroll", windowScroll)
// const upButton = document.querySelector('.up-button')

// function windowScroll(e){
// 	if (window.screenY >=1000){
// 		upButton.classList.add('active')
// 	} else{
// 		upButton.classList.remove('active')
// 	}
// }

let observer = new IntersectionObserver(callback, options)

const target = document.querySelector('.button')
observer.observe(target)

let options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 0.5,
}
let callback = (entries, observer) =>{
	entries.forEach((entry) => {
		const targetElement = entry.target
		if (entry.isIntersecting){
			targetElement.classList.add("show")
			console.log('I see you');
		}else{
			targetElement.classList.remove("show")
			console.log('I dont see you');
		}
	});
}