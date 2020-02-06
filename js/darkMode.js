var darkMode = bodymovin.loadAnimation({
	container: document.getElementById("menu-burger"),
	renderer: "svg",
	loop: false,
	autoplay: false,
	path: "dark_mode.json"
});

var on = false;

$(".dark-mode").click(function() {
	if (on == false) {
		darkMode.setDirection(1);
		darkMode.play();

		console.log("Dark mode activated");
		on = true;
	} else if (on == true) {
		darkMode.setDirection(-1);
		darkMode.play();

		console.log("Dark mode deactivated");
		on = false;
	}
});
