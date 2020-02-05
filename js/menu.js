var anim = bodymovin.loadAnimation({
    container: $(".mobile-header .menu"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "pixel_burger.json"
});

$(".mobile-header .menu").addEventListener("click", function() {
    if ($(this).hasClass("closed")) {
        anim.setDirection(1);
        anim.play();
        $(this).removeClass("closed");
        $(this).addClass("open");
    } else {
        anim.setDirection(-1);
        anim.play();
        $(this).removeClass("open");
        $(this).addClass("closed");
    }
});
