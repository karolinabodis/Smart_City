// Toggle menu in mobile view
const navbarCollapse = document.querySelector(".navbar-collapse");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");
const navItems = document.querySelectorAll(".nav-item");
const dropdownItems = document.querySelectorAll(".dropdown-item");
const toggler = document.querySelector(".navbar-toggler");

toggler.addEventListener("click", function () {
	if (!navbarCollapse.classList.contains("show")) {
		navbarCollapse.style.backgroundColor = "#0093d8";
		dropdownMenu.classList.add("show");
		// hide the caret
		dropdownToggle.classList.add("hide-dropdown-toggle");
		dropdownMenu.style.position = "relative";
		// IE 11 compatibility
		for (let i = 0; i < navItems.length; i++) {
			navItems[i].classList.add("border-top");
		}
		// navItems.forEach(function (item) {
		// 	item.classList.add("border-top");
		// });
		// IE 11 compatibility
		for (let i = 0; i < dropdownItems.length; i++) {
			dropdownItems[i].style.backgroundColor = "#007bb5";
			dropdownItems[i].classList.add("indent");
		}
		// dropdownItems.forEach(function (item) {
		// 	item.style.backgroundColor = "#007bb5";
		// 	item.classList.add("indent");
		// });
	} else {
		navbarCollapse.style.backgroundColor = "";
		dropdownMenu.classList.remove("show");
		dropdownToggle.classList.remove("hide-dropdown-toggle");
		dropdownMenu.style.position = "static";
		// IE 11 compatibility
		for (let i = 0; i < navItems.length; i++) {
			navItems[i].classList.remove("border-top");
		}
		// navItems.forEach(function (item) {
		// 	item.classList.remove("border-top");
		// });
		// IE 11 compatibility
		for (let i = 0; i < dropdownItems.length; i++) {
			dropdownItems[i].style.backgroundColor = "#0093d8";
			dropdownItems[i].classList.remove("indent");
		}
		// dropdownItems.forEach(function (item) {
		// 	item.style.backgroundColor = "#0093d8";
		// 	item.classList.remove("indent");
		// });
	}
});

// Counting remaining characthers
const message = document.getElementById("message");
const charsLeft = document.getElementById("chars-left");
const maxChars = message.attributes.maxlength.value;

message.addEventListener("keyup", countChars);

function countChars(e) {
	const charsTyped = e.target.value;
	let charsRemaining = maxChars - charsTyped.length;
	charsLeft.textContent = charsRemaining;
}
