# HTML, CSS, ES5, jQuery 에서 복습 및 배울것
	1. css FlexModel
	2. css Bootstrap
	3. Swiper Plugin
	4. Javascript 심도
	5. jQuery 리뷰

# jQuery 리뷰
## jQuery 는 함수(메서드)로 만들어져 있다.
```js
var $ = jQuery
jQuery(".wrap").hide();
$(".wrap").hide();

// 다음중 올바른 표현을 고르시오.
$(".a").hasClass("b").hide();
$(".a").append('<div>A</div>').hide(); //정답
$(".a").width().hide();
$(".a").attr("id").hide();

// 다음의 문장을 Javascript로 변환하세요.
$("#sample")
document.getElementById("sample")
```

### 0. Selector(선택자) : return jQuery
	-find() children() eq() siblings() parent() parents() next() prev()
```js
// 태그나 객체를 $() 로 실행하면 jQuery 객체가 리턴된다.
$(".a")
$("div")
$(".a > div")
$(document.getElementById('sample'))
$('<div>A</div>')
$('div','.wrap') //.wrap 안의 div
$('div, .wrap') //div와 .wrap

// $()[0] => 자바스크립트가 된다
$("#sample")[0] // 자바스크립트
```

### 1. Animation : return jQuery
```js
hide(300, function(){  })
show()
fadeIn()
fadeOut()
slideUp()
slideDown()
toggle()
fadeToggle()
slideToggle()
animate()
```

### 2. DOM(Document Object Model) : return jQuery
	-append() appendTo() prepend() prependTo() remove() empty()
	```js
	$('.a').append('<div>A</div>') // return $('.a')
	$('<div>A</div>').appendTo('.a') // return $('<div>A</div>')
	```

### 3. Attribute, dataSet
	-Getter: attr('속성')  -가져오는 속성
	-Setter: attr('속성', '값')  -세팅해주는 값
	-Getter: data('Key');
	-Setter: data('Key','value'); -키, 값
```html
<div class="a" id="A"></div>
```
```js
$(".a").attr("id"); //"A"를 return
$(".a").attr("id" , "B"); //A를 B로 바꾸고 jQuery를 return, Setter는 jQuery를 리턴
```
### 4. CSS
	-Getter : css('속성')
	-Setter : css('속성','값')
	-Setter : css({'속성':'값',...})
	-addClass('클래스명'), removeClass('클래스명'), toggleClass('클래스명') -> return : jQuery
	-hasClass('클래스명') -> return : true/false

### 5. Dimension
	-width() height()
	-innerWidth() innerHeight()
	-outerWidth() outerHeight()
	-outerWidth(true) outerHeight(true)
	-offset() => {top: 200, left:100} (객체를 리턴)
	-offset().top / offset().left
	-position().top / position().left
	-scrollTop()

### 6. Event
	-click(), hover(), mouseover(), mouseleave(), mouseenter(), keyup(), keydown(), resize(), scroll() ...

### 7. getter/setter
	- html(), text(), css(), attr()

# Javascript Review
## 프로그래밍은 변수와 함수의 집합이다.

### 변수
1. Primitive(원시) Type
	- String, Number, Boolean, undefined (0, Null, undefined, 비어있는 배열(undefined)은 false)
2. Reference(참조) Type
	- Array, Object, Null
```js

```

### 2020-12-09 숙제
#### 구구단을 만드세요.
2단 2 x 1 =2 2 x 2 =4 ...
3단
.
.

2단    3단    4단 ... 9단
2x1=2
.
.
.