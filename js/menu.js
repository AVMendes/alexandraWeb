var anim = bodymovin.loadAnimation({
    container: document.getElementById("menu-burger"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "pixel_burger.json"
});

anim.setSpeed(2);

$(".mobile-header .menu").click(function() {
    if ($(this).hasClass("closed")) {
        anim.setDirection(1);
        anim.play();

        $(this).removeClass("closed");
        $(this).addClass("open");
        $(".mobile-menu").style.right = "0px";
    } else {
        anim.setDirection(-1);
        anim.play();

        $(this).removeClass("open");
        $(this).addClass("closed");
        $(".mobile-menu").style.right = "-120px";
    }
});
