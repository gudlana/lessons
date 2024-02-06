document.addEventListener("click", documentActions);

function documentActions(e) {
	const targetElement = e.target;

	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('menu-open');
	}
	// if (targetElement.closest('[data-spoller]')) {
	// 	const currentElement = targetElement.closest('[data-spoller]');
	// 	if (!currentElement.nextElementSibling.classList.contains('--sliding')) {
	// 		currentElement.classList.toggle('active');
	// 	}
	// 	slideToggle(currentElement.nextElementSibling);
	// }
}