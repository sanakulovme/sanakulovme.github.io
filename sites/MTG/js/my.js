function openNav() {
	var navbox = document.getElementById('nav');
	var open = document.getElementById('openn');
	var body = document.getElementById('body');

	navbox.style.left = "0";
	open.style.opacity = "0";
	open.style.transition = "all .5s";
	// body.style.overflow = 'hidden';

}


function closeNav() {
	var navbox = document.getElementById('nav');
	var open = document.getElementById('openn');
	var body = document.getElementById('body');

	navbox.style.left = "-550px";
	open.style.opacity = "5";
	open.style.transition = "all .5s";
	// body.style.overflow = 'auto';


}