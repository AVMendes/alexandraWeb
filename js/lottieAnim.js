/*---------------BURGER MENU----------------*/
var burger = bodymovin.loadAnimation({
	container: document.getElementById("menu-burger"),
	renderer: "svg",
	loop: false,
	autoplay: false,
	path: "pixel_burger.json"
});

burger.setSpeed(2);

$(".mobile-header .menu").click(function() {
	if ($(this).hasClass("closed")) {
		burger.setDirection(1);
		burger.play();

		$(this).removeClass("closed");
		$(this).addClass("open");
		$(".mobile-menu").css("right", "0px");
	} else {
		burger.setDirection(-1);
		burger.play();

		$(this).removeClass("open");
		$(this).addClass("closed");
		$(".mobile-menu").css("right", "-200px");
	}
});
/*------------------------------------------*/

/*----------------DARK MODE-----------------*/
var darkMode = bodymovin.loadAnimation({
	container: document.getElementById("dark-mode"),
	renderer: "svg",
	loop: false,
	autoplay: false,
	path: "dark_mode.json"
});

var darkModeWeb = bodymovin.loadAnimation({
	container: document.getElementById("dark-mode-web"),
	renderer: "svg",
	loop: false,
	autoplay: false,
	path: "dark_mode.json"
});

var on = false;

$(".toggle-DM").click(function() {
	if (on == false) {
		darkMode.playSegments([0, 46], true);
		darkModeWeb.playSegments([0, 46], true);

		console.log("Dark mode activated");
		on = true;
	} else if (on == true) {
		darkMode.playSegments([46, 96], true);
		darkModeWeb.playSegments([46, 96], true);

		console.log("Dark mode deactivated");
		on = false;
	}
});
/*------------------------------------------*/
