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
