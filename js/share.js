$(".share").click(function() {
    $currentURL = $(location).attr("href");

    $currentURL.select();
    document.execCommand("copy");

    $(".alert").css("opacity", "1");
    setTimeout(() => {
        $(".alert").css("opacity", "0");
    }, 1500);
});
