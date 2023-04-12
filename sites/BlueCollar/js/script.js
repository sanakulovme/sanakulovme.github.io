var nav_box = document.getElementById('nav_box');
var nav_icon = document.getElementById('open_nav');
function openNav() {
	nav_box.style.left = "0px";
	nav_icon.style.opacity = "0.5";
}

function closeNav() {
	nav_box.style.left = "-310px";
	nav_icon.style.opacity = "5";
}