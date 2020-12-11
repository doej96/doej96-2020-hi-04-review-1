$(".thumb img").click(onClick).eq(0).trigger("click");

function onClick(){
    var src = $(this).attr('src');
    var title = $(this).data('title');
    $(".img-main")
    .attr({'src':src, 'alt':title})
    .data({'title':title})
    .css('opacity',0)
    .stop()
    .animate({'opacity':1},300);
}