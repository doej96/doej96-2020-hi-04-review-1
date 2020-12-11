/* ******이벤트 등록****** */
$(".thumb img").click(onClick).eq(0).trigger("click") //시작하자마자 첫번째 이미지를 클릭한 상태

/* ******이벤트 콜백****** */
function onClick() {
    var src = $(this).attr('src');
    var title = $(this).data('title'); //data-title
    $(".img-main")
    .attr({'src': src, 'alt': title}) //.attr({'src': $(this).attr('src'), 'alt': $(this).data('title')})로 쓸 수 없음(this가 다르기 때문에)
    .data('title', title)
    .css("opacity",0)
    .stop()
    .animate({"opacity":1},300)
}