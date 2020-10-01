const body = document.querySelector("body"),
	wrapper = document.querySelector(".wrapper"),
	menu = document.querySelector(".nav"),
	btnNav = document.querySelector(".nav-icon");

btnNav.addEventListener("click", toggleMenu);

function toggleMenu() {
	// body.classList.toggle("lock");
	wrapper.classList.toggle("lock");
	menu.classList.toggle("fixed");
}
