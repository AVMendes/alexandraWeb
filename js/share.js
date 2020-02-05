var currentURL = $(location).attr("href");

$(".share").click(function() {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(currentURL);
    $temp.select();
    document.execCommand("copy");
    $temp.remove();

    $(".alert").css("opacity", "1");
    setTimeout(function() {
        $(".alert").css("opacity", "0");
    }, 1000);
});
