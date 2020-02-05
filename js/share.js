$(".share").click(function() {
    var $currentURL = $(location).attr("href");

    $currentURL.select();
    document.execCommand("copy");

    $(".alert").css("opacity", "1");
    setTimeout(function() {
        $(".alert").css("opacity", "0");
    }, 1500);
});
