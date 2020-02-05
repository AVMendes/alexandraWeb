$(".share").click(function() {
    var $currentURL = $(location).attr("href");

    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($currentURL.text()).select();
    document.execCommand("copy");
    $temp.remove();

    $(".alert").css("opacity", "1");
    setTimeout(function() {
        $(".alert").css("opacity", "0");
    }, 1500);
});
