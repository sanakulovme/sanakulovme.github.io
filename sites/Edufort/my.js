

function openNav() {
	var nav = document.getElementById('nav');
	var open_nav = document.getElementById('openNav');

	nav.style.left = "0";
	open_nav.style.left = "-350px";
}

function closeNav() {
	var open_nav = document.getElementById('openNav');
	var nav = document.getElementById('nav');

	nav.style.left = "-350px";
	open_nav.style.left = "0";
}