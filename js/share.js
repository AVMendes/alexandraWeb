$(".share").click(function() {
    $currentURL = $(location).attr("href");

    $currentURL.select();
    document.execCommand("copy");
});
