var darkMode = bodymovin.loadAnimation({
	container: document.getElementById("dark-mode"),
	renderer: "svg",
	loop: false,
	autoplay: false,
	path: "dark_mode.json"
});

var on = false;

$(".toggle-DM").click(function() {
	if (on == false) {
		darkMode.play();
		darkMode.addEventListener(enterFrame(46), function() {
			darkMode.pause();
		});

		console.log("Dark mode activated");
		on = true;
	} else if (on == true) {
		darkMode.play();

		console.log("Dark mode deactivated");
		on = false;
	}
});
