"use strict"

// const icon = document.querySelector('.icon-menu');
// if (icon){
// 	icon.addEventListener('click', function () {
// 		document.documentElement.classList.toggle('menu-open');
// 	});
// }

document.addEventListener("click", documentActions);

function documentActions(e){
	const targetElement = e.target
	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('menu-open')
	}
}