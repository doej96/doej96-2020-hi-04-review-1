/* 이벤트 등록 */
var $listWrap = $(".list-wrap");
var tag = '<h2>추가내용</h2>'

/* 이벤트 등록 */
$('#btAppend').click(onAppend);
$('#btPrepend').click(onPrepend);
$('#btEmpty').click(onEmpty);
$('#btRemove').click(onRemove);
$('#btHtml').click(onHtml);
$('#btText').click(onText);
$('#btReset').click(onReset);

/* 이벤트 콜백 */
function onAppend(){
    console.log( $listWrap.append(tag) ); //div.list-wrap을 return
    console.log( $(tag).appendTo($listWrap) ); //h2를 return
}
function onPrepend(){
    $listWrap.append(tag);
    $(tag).appendTo($listWrap);
}
function onEmpty(){
    $listWrap.empty(); //$listWrap 안에 있는 내용이 지워짐
}
function onRemove(){
    $listWrap.remove(); //$listWrap이 지워짐
}
function onHtml(){
    $listWrap.html('<h1>Hello</h1>');
}
function onText(){
    $listWrap.text('<h1>Hello</h1>'); //text자체를 집어넣음
}
function onReset(){
    $('.container').html('<div class="list-wrap text-center">====== 기준 ======</div>');
    $listWrap = $(".list-wrap");
}