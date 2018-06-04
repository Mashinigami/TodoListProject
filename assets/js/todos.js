$("ul").on("click", "li", function (e){
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(1000,function () {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function (e) {
    if(e.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $('ul').append("<li><span>X</span> " + todoText + "</li>");
    }
});