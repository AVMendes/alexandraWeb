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
		darkMode.playSegments([0, 46], forceFlag);

		console.log("Dark mode activated");
		on = true;
	} else if (on == true) {
		darkMode.playSegments([46, 96], forceFlag);

		console.log("Dark mode deactivated");
		on = false;
	}
});
