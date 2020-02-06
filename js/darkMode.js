var darkMode = bodymovin.loadAnimation({
	container: document.getElementById("dark-mode"),
	renderer: "svg",
	loop: false,
	autoplay: false,
	path: "pixel_burger.json"
});

var on = false;

$(".toggle-DM").click(function() {
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
