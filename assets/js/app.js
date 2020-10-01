const body = document.querySelector("body"),
	menu = document.querySelector(".nav"),
	btnNav = document.querySelector(".nav-icon");

btnNav.addEventListener("click", toggleMenu);

function toggleMenu() {
	body.classList.toggle("lock");
	menu.classList.toggle("fixed");
}
