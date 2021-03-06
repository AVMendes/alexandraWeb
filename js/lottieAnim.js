/*---------------BURGER MENU----------------*/
var burger = bodymovin.loadAnimation({
	container: document.getElementById("menu-burger"),
	renderer: "svg",
	loop: false,
	autoplay: false,
	path: "pixel_burger.json"
});

burger.setSpeed(2);

// $(".mobile-header .menu").click(function() {
// 	if ($(this).hasClass("closed")) {
// 		burger.setDirection(1);
// 		burger.play();

// 		$(this).removeClass("closed");
// 		$(this).addClass("open");
// 		$(".mobile-menu").css("right", "0px");
// 	} 
	
// 	// else {
// 	// 	burger.setDirection(-1);
// 	// 	burger.play();

// 	// 	$(this).removeClass("open");
// 	// 	$(this).addClass("closed");
// 	// 	$(".mobile-menu").css("right", "-200px");
// 	// }
// });

$(document).mouseup(function(e) {
    var menuIcon = $(".mobile-header .menu");
	var container = $(".mobile-menu");
	
	console.log(e);
	console.log(menuIcon.has(e.target).length);
	console.log(container.has(e.target).length);

	// if the target of the click isn't the container nor a descendant of the container
	// || 
	// (menuIcon.is(e.target) && 
	// menuIcon.has(e.target).length > 0 && menuIcon.hasClass("open")
    if ((!container.is(e.target) && container.has(e.target).length === 0 && menuIcon.hasClass("open"))) {
		console.log("Worked!");
        burger.setDirection(-1);
		burger.play();

		menuIcon.removeClass("open");
		menuIcon.addClass("closed");
		container.css("right", "-200px");
    } else if (menuIcon.has(e.target).length > 0 && menuIcon.hasClass("closed")){
		burger.setDirection(1);
		burger.play();

		menuIcon.removeClass("closed");
		menuIcon.addClass("open");
		container.css("right", "0px");
	}
});
/*------------------------------------------*/

/*----------------DARK MODE-----------------*/
// var darkMode = bodymovin.loadAnimation({
// 	container: document.getElementById("dark-mode"),
// 	renderer: "svg",
// 	loop: false,
// 	autoplay: false,
// 	path: "dark_mode.json"
// });

// var darkModeWeb = bodymovin.loadAnimation({
// 	container: document.getElementById("dark-mode-web"),
// 	renderer: "svg",
// 	loop: false,
// 	autoplay: false,
// 	path: "dark_mode.json"
// });

// var on = false;

// $(".toggle-DM").click(function() {
// 	if (on == false) {
// 		darkMode.playSegments([0, 46], true);
// 		darkModeWeb.playSegments([0, 46], true);

// 		on = true;
// 		console.log("Dark mode activated");
// 	} else if (on == true) {
// 		darkMode.playSegments([46, 96], true);
// 		darkModeWeb.playSegments([46, 96], true);

// 		on = false;
// 		console.log("Dark mode deactivated");
// 	}
// });
/*------------------------------------------*/
