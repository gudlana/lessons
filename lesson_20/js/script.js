const icon = document.querySelector('.icon-menu');
if (icon){
	icon.addEventListener('click', function () {
		document.documentElement.classList.toggle('menu-open');
	});
}