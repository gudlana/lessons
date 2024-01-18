"use strict"

// ---------------Задача №1----------------------------

document.addEventListener("click", documentActionClick)

function documentActionClick(e){
	const targetElement = e.target
	if (targetElement.closest('.item')){
		if (!targetElement.classList.contains('active')){
			targetElement.classList.add('active')
		}	else {
			targetElement.classList.remove('active')
		}
	}
}

// ---------------Задача №2----------------------------

window.addEventListener("load", pageLoaded)

function pageLoaded(){
	const bodyElement = document.body
	bodyElement.classList.add('loaded')
}

// ---------------Задача №3----------------------------

document.addEventListener("mouseover", documentActionMouseover)

const footerElement = document.querySelector('.footer')

function documentActionMouseover(e){
	const targetElement = e.target
	if (targetElement.closest('.header')){		
		if (footerElement){
			footerElement.classList.add('footer--purple')
		}
	}
}

document.addEventListener("mouseout", documentActionMouseout)

function documentActionMouseout(e){
	const targetElement = e.target
	if (targetElement.closest('.header')){		
		if (footerElement){
			footerElement.classList.remove('footer--purple')
		}
	} 
}

// ---------------Задача №4----------------------------
const counterElement = document.querySelector('.item-counter')

function setCounter(){
	let i = 1 
	let timer = setInterval(() => {		
		counterElement.textContent = `${i}`
		i === (parseFloat(counterElement.dataset.maxcounter)) ? clearInterval(timer) : null
		++i
	}, parseFloat(counterElement.dataset.delay))
}

let options = {
	root: null,
	rootMargin: "0px 0px 0px 0px",
	threshold: 1,
};

let callback = (entries, observer) => {
	entries.forEach((entry) => {
		const targetElement = entry.target;
		if (entry.isIntersecting && !targetElement.classList.contains('run')) {
			targetElement.classList.add("show");
			setCounter()
			targetElement.classList.add("run");
		} 
	})
}

let observer = new IntersectionObserver(callback, options)

if (counterElement){
 	observer.observe(counterElement)
}