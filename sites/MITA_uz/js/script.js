function open_nav(argument) {
	let nav = document.getElementById('nav');
	let nav_controll = document.getElementById('nav_controll');
	let helper_body = document.getElementById('helper_body');

	if (nav.className == "nav_on") {
		nav.className = "nav_off"
		helper_body.className = "open_body"
		nav_controll.className = "open_nav"
	}else{
		nav_controll.className = "close_nav"
		helper_body.className = "close_body"
		nav.className = "nav_on"
	}
}