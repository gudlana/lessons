"use strict"

const windowWidth = window.innerWidth
// console.log(windowWidth)
const windowHeight = window.innerHeight
// console.log(windowHeight)

// console.log(navigator.userAgent)
if (navigator.userAgent.includes("Chrome")){
	// console.log('Chrome');
} else if (navigator.userAgent.includes('Firefox')){
	// console.log('Firefox');
}

// console.log(location.href);

// alert('message')

// let comfirmAnswer = confirm('Question')
// console.log(comfirmAnswer);
// if (comfirmAnswer){
// 	alert('click OK')
// } else {alert('click Cancel')}

// comfirmAnswer ? alert('click OK') : alert('click Cancel')

// let promptAnswer = prompt('Question')
// console.log(promptAnswer);
// if (promptAnswer === null) {
// 	console.log('cancel');
// } else if (promptAnswer){
// 	console.log(`answer user: ${promptAnswer}`);
// }
// else {
// 	console.log('User not message');
// }

// -----------DOM-------------------

// const htmlElement = document.documentElement
// console.log(htmlElement);

// const headElement = document.head
// console.log(headElement);

// const bodyElement = document.body
// console.log(bodyElement);
// const firstChild = bodyElement.firstElementChild
// const lastChild = bodyElement.lastElementChild
// console.log(firstChild);
// console.log(lastChild);
// const childNodes = bodyElement.children
// console.log(childNodes);

// for(let i =0; i< childNodes.length; ++i){
	// console.log(childNodes[i]);
// }
// for(let childNode of childNodes){
	// console.log(childNode);
// }
// const previousSibling = bodyElement.previousElementSibling
// console.log(previousSibling);

// const nextSibling = headElement.nextElementSibling
// console.log(nextSibling);

// const liElement = document.querySelector('li')
// if (liElement){
// 	console.log(liElement);
// }
// const liElements = document.querySelectorAll('li')
// console.log(liElements);

// if(liElements.length){
// 	liElements.forEach((item, index) =>{
// 	console.log(item);
// 	})
// }

// const block = document.querySelectorAll('.block')
// if (block.length){
	// console.log("YES!");
	// console.log(block);
// }

// const liElements = document.querySelectorAll('.list__item.active')
// if (liElements.length){
	// liElements.forEach(liElement =>{
		// console.log(liElement);
	// })
// }

// const liItemElement = document.querySelectorAll('[class*="__item"]')
// if (liItemElement.length){
// 	// console.log(liItemElement);
// }
// const idElement = document.querySelector('#some-id');
// const parentElement = idElement.closest('main');
// // console.log(parentElement);

// const listItems = document.querySelectorAll('.list__item')
// listItems.forEach(listItem =>{
// 	listItem.innerHTML = '<span>Hello!</span>'
// })

// listItems.forEach(listItem =>{
// 	listItem.textContent = '<span>Hello!</span>'})

// const newObject = document.createElement('div')
// newObject.innerHTML = '<span>Hi!</span>'
// // const wrapper = document.querySelector('.wrapper')
// // wrapper.append(newObject)

// const wrapper = document.querySelector('.wrapper')
// const cloneWrapper = wrapper.cloneNode(true)
// console.log(cloneWrapper);

// wrapper.remove( )

// --------------Домашка--------------------

//--------------Завдання №1--------------------------

const bodyElement = document.body

//--------------Завдання №2--------------------------

function addUlToBody(countLi = 1){
	const bodyElem = document.body
	if (bodyElem){
		if (isFinite(countLi)){
			const ulElement = document.createElement("ul")
			for (let i = 1; i <= countLi; ++i){
				ulElement.insertAdjacentHTML("beforeend",`<li>${i}</li>`)

			}
			bodyElem.prepend(ulElement)
		}
	}
}

addUlToBody(10)
const ulCheck = document.querySelector("ul")

//--------------Завдання №3--------------------------

if (bodyElement) {
	bodyElement.classList.add('loaded')
}
if (bodyElement.classList.contains('loaded')){
	bodyElement.style.color = 'green'
}

//--------------Завдання №4--------------------------

const items = document.querySelectorAll(".item")

if (items){
	items.forEach((item, index) =>{
		item.classList.add('active')
		item.textContent=`Елемент №${index + 1}`
	})
}

//--------------Завдання №5--------------------------

const buttonClass = document.querySelector('.button')
function scrollToElement(element){
	if (element){
		element.scrollIntoView({
			block: element.dataset.scroll,
			inline: "center",
			behavior: "smooth"
		})
	}
}
scrollToElement(buttonClass)

//--------------Завдання №6--------------------------

const linkElement = document.querySelector('.link')
if (linkElement){	
	const linkValue = linkElement.dataset.linkValue
	if (linkValue < 200) linkElement.style.color = "red"
}
