import{j as e,C as s,F as a,A as n}from"./level-1-Dhgru3HE.js";const d={name:"2-1 연산 응용",idx:7,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"연산 응용"}),e.jsx("h3",{children:"축약형 연산자"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`num = num + 1; // 덧셈
num += 1;
num++;

num = num - 1; // 뺄셈
num -= 1;
num--;

num = num * 2; // 곱셈
num *= 2;

num = num * num; // 제곱
num = num ** 2;
num **= 2;

num = num / 2; // 나눗셈
num /= 2;

num = num % 2; // 나머지
num %= 2;
`}),e.jsx("p",{children:"축약형 연산자를 사용하면 연산과 할당을 동시에 할 수 있다."}),e.jsxs(a,{title:"퀴즈",children:[e.jsx(s,{filename:"1. 나이와 출생년도",language:"javascript",code:`// 나이와 출생년도를 저장하는 변수를 각각 생성하라.
// 나이는 재할당 가능, 출생년도는 불가능하게 생성해야 한다.
`}),e.jsx(s,{filename:"2. 변수 출력은?",language:"javascript",code:`var lastName = '박';
var id = 0;

function showName(){
  var lastName = '김';
  var id = 1;
  console.log(lastName);
}

showName(); // 무엇이 출력될까?
console.log(id); // 무엇이 출력될까?
`}),e.jsx(s,{filename:"3. 이자율 계산기",language:"javascript",code:`var deposit = 60000;
var futureValue = 0;

// 첫 예금액이 50000원 미만이면 이자율이 연 15%, 이상이면 연 20%이다.
// 2년 후의 예금액을 출력하는 계산기를 만들어보자.

console.log(futureValue);
`}),e.jsx(s,{filename:"4. 커피 리필 계산기",language:"javascript",code:`var first = 360;
// 가장 최근에 받은 커피 양의 2/3씩 총 2번 리필 가능하다.
// 마실 수 있는 최대 커피 양을 출력하는 계산기를 만들어보자.
`}),e.jsx(s,{filename:"5. 커피 무한리필 계산기",language:"javascript",code:`var first = 360;
// 가장 최근에 받은 커피 양의 2/3씩 무한 리필 가능하다.
// 마실 수 있는 최대 커피 양을 출력하는 계산기를 만들어보자.
// 무한등비수열의 합 공식: S = a / (1 - r)
// a: 첫 번째 항, r: 공비
`}),e.jsx(s,{filename:"6. 온라인 퀴즈 UI",language:"html",code:`<p>1~5 중 내가 생각한 숫자 하나는? 기회는 3번 줄게</p>
<input type="text" id="answer">
<button id="send-answer">이건가?</button>

<script>
  // 정답이면 alert("정답!"), 3번 찍어서 오답이면 alert("땡!")
<\/script>
`})]})]})},o={name:"2-2 setTimeout/Interval",idx:8,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"setTimeout/Interval"}),e.jsx("h3",{children:"안내창 만들기"}),e.jsxs(a,{title:"안내창 코드",children:[e.jsx(s,{filename:"2-2.html",language:"html",code:'<div class="alert alert-danger">5초 이내 구매시 사은품 증정</div>'}),e.jsx("p",{children:"5초 후 안내창이 사라진다."})]}),e.jsx("h3",{children:"setTimeout"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`setTimeout(function () {
  // num 밀리초 후 실행할 코드
}, num);
`}),e.jsx("p",{children:"타이머를 삭제하고 싶으면 아래처럼 변수를 사용해야 한다."}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`var timer = setTimeout(function () {
  // num 밀리초 후 실행할 코드
}, num);

clearTimeout(timer); // 타이머 삭제
`}),e.jsx("h3",{children:"setInterval"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`setInterval(function () {
  // num 밀리초마다 실행할 코드
}, num);
`}),e.jsx("p",{children:"타이머를 삭제하고 싶으면 아래처럼 변수를 사용해야 한다."}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`var timer = setInterval(function () {
  // num 밀리초마다 실행할 코드
}, num);

clearInterval(timer); // 타이머 삭제
`}),e.jsx("h3",{children:"JavaScript 문법 vs 브라우저 기능"}),e.jsx("p",{children:"아래는 자바스크립트 프로그래밍 문법이다."}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`var name;
let name;
const name;
if () {}
function () {}
`}),e.jsx("p",{children:"아래는 웹 브라우저에서 제공하는 브라우저 기능 사용법이다."}),e.jsx(s,{filename:"browser APIs",language:"javascript",code:`document.querySelector()
alert()
setTimeout()
addEventListener()
`}),e.jsx("p",{children:"그래서 기본적으로 웹 브라우저 기능을 가지고 코드를 작성하고, 편의를 위해 자바스크립트 문법을 사용하는 것이라 보면 된다."}),e.jsx("h3",{children:"콜백함수 Tip"}),e.jsx("p",{children:"addEventListener(), setTimeout()과 같이 콜백함수를 인자로 받는 함수들에 콜백함수 대신 외부 함수를 넣을 수도 있다."}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`setTimeout(function () {
  // num 밀리초 후 실행할 코드
}, num);
`}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`setTimeout(onTimeout, num);

function onTimeout() { 
  // num 밀리초 후 실행할 코드
}
`}),e.jsx("p",{children:"예를 들어, setTimeout()가 많이 필요한 경우 콜백함수 대신 외부 함수를 사용하는 것이 코드 가독성에 도움이 된다."})]})},x={name:"2-3 Regex",idx:9,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"Regex"}),e.jsx("h3",{children:".includes()"}),e.jsx("p",{children:"문자열에 특정 텍스트가 포함되어 있는지 확인할 때 사용한다."}),e.jsx(s,{filename:"Javascript",language:"javascript",code:'"text".includes("text to find")'}),e.jsx("p",{children:"찾을 텍스트가 앞의 문자열에 포함되어 있는지 확인하고 true/false를 반환한다."}),e.jsxs("p",{children:["포함 여부만 확인할 수 있어 사용이 제한적이다. ",e.jsx("br",{}),"예를 들면 한글이 포함되어 있는지나, 이메일 형식에 맞는 문자열인지 확인이 어렵다."]}),e.jsx("h3",{children:"정규 표현식이란?"}),e.jsx("p",{children:"정규 표현식은 문자열에서 특정 패턴을 찾을 때 조건으로 사용하는 문법이다."}),e.jsx(s,{filename:"Javascript",language:"javascript",code:"/regex/"}),e.jsx("p",{children:"이를 사용하면 여러 글자의 조합을 검사할 수 있기 때문에 문자열에서 특정 패턴을 검사할 수 있다."}),e.jsx("h3",{children:".test()"}),e.jsx("p",{children:"정규 표현식 조건에 맞는 패턴이 포함되어 있는지 확인할 때 사용한다."}),e.jsx(s,{filename:"Javascript",language:"javascript",code:'/regex/.test("text")'}),e.jsx("p",{children:"문자열에 정규 표현식 조건에 맞는 패턴이 포함되어 있는지 확인하고 true/false를 반환한다."}),e.jsx("h3",{children:"정규 표현식 문법"}),e.jsx("p",{children:"아래는 자주 사용하는 정규 표현식 문법이다."}),e.jsxs("table",{className:"var-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"분류"}),e.jsx("th",{children:"정규식"}),e.jsx("th",{children:"설명"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:"한 글자"}),e.jsx("td",{children:"/a/"}),e.jsx("td",{children:"'a'라는 글자가 포함되어 있는지"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"5",children:"범위 지정"}),e.jsx("td",{children:"/[a-z]/"}),e.jsx("td",{children:"아무 영어 소문자 하나"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/[A-Z]/"}),e.jsx("td",{children:"아무 영어 대문자 하나"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/[a-zA-Z]/"}),e.jsx("td",{children:"아무 영어 하나"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/[ㄱ-ㅎㅏ-ㅣ가-힣]/"}),e.jsx("td",{children:"아무 한글 하나"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/[0-9]/"}),e.jsx("td",{children:"아무 숫자 하나"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"모든 문자"}),e.jsx("td",{children:"\\S"}),e.jsx("td",{children:"아무 문자 하나"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"2",children:"시작과 끝"}),e.jsx("td",{children:"/^a/"}),e.jsx("td",{children:"문자열이 'a'로 시작하는지"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"/a$/"}),e.jsx("td",{children:"문자열이 'a'로 끝나는지"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"또는"}),e.jsx("td",{children:"/a|b/"}),e.jsx("td",{children:"문자열에 'a' 또는 'b' 포함"})]}),e.jsxs("tr",{children:[e.jsx("td",{rowSpan:"2",children:"반복"}),e.jsx("td",{children:"/a+/"}),e.jsx("td",{children:"문자열에 'a'가 하나 이상 연속"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"\\S+a"}),e.jsx("td",{children:"하나 이상 연속 문자 뒤에 'a'"})]})]})]}),e.jsx("h3",{children:"이메일 정규식"}),e.jsx("table",{className:"var-table",children:e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{children:"이메일"}),e.jsx("td",{children:"\\S+@\\S+\\.\\S+"}),e.jsx("td",{children:"이메일 형식에 맞는지 검사"})]})})}),e.jsx("p",{children:"마침표는 정규식에서 특별한 의미를 가지기 때문에, 문자 그대로의 마침표를 찾으려면 앞에 백슬래시를 붙여야 한다."})]})},t="/MRS_JS_Lecture/assets/car1-WgsqEouX.png",l="/MRS_JS_Lecture/assets/car2-RoD84i3f.png",i="/MRS_JS_Lecture/assets/car3-DZ7HAjzL.png",h={name:"2-4 캐러셀",idx:10,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"캐러셀"}),e.jsx("h3",{children:"캐러셀 만들기"}),e.jsxs(a,{title:"캐러셀 코드",children:[e.jsx(s,{filename:"2-5.html",language:"html",code:`<div style="overflow: hidden">
  <div class="slide-container">
    <div class="slide-box">
      <img src="../../assets/car1.png">
    </div>
    <div class="slide-box">
      <img src="../../assets/car2.png">
    </div>
    <div class="slide-box">
      <img src="../../assets/car3.png">
    </div>
  </div>
  <button class="slide-left">&lt;</button>
  <button class="slide-1">1</button>
  <button class="slide-2">2</button>
  <button class="slide-3">3</button>
  <button class="slide-right">&gt;</button>
</div>
`}),e.jsx(s,{filename:"2-5.css",language:"css",code:`.slide-container {
  width: 300vw;
  transition: all 1s;
}
.slide-box {
  width: 100vw;
  float: left;
}
.slide-box img {
  width: 100%;
}
`}),e.jsx("p",{children:"왼쪽, 1, 2, 3, 오른쪽 버튼을 누르면 애니메이션 효과와 함께 슬라이드가 이동한다."}),e.jsx(n,{title:"첨부파일 (assets 폴더에 넣기)",items:[{alt:"car1.png",src:t},{alt:"car2.png",src:l},{alt:"car3.png",src:i}]})]}),e.jsx("h3",{children:"UI 애니메이션 만들기 순서"}),e.jsxs("p",{children:["1. 시작 스타일 만들기 (CSS)",e.jsx("br",{}),"2. 종료 스타일 만들기 (CSS)",e.jsx("br",{}),"3. 애니메이션 시작 시점 구현 (JavaScript)",e.jsx("br",{}),"4. transition 속성 추가 (CSS)"]}),e.jsx("h3",{children:"문자열 속 변수"}),e.jsx("p",{children:"문자열 속에 특정 변수를 넣고 싶을 때 사용할 수 있는 두 가지 방법이 있다."}),e.jsx("p",{children:"1. + 연산자 사용"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`var name = value;
console.log("값은 " + name + "입니다."); // 값은 value입니다.
`}),e.jsx("p",{children:"2. 백틱 사용"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:"var name = value;\nconsole.log(`값은 ${name}입니다.`); // 값은 value입니다.\n"})]})},j={name:"2-5 Return",idx:11,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"Return"}),e.jsx("h3",{children:"Return"}),e.jsx("p",{children:"return 문법은 함수에서 값을 반환할 때 사용한다."}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`function fName() {
  return value;
}

console.log(fName()); // value 출력
`}),e.jsx("p",{children:"또한 함수 종료의 역할도 한다."}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`function fName() {
  // 실행 됨
  return;
  // 실행 안 됨
}
`}),e.jsx("h3",{children:"반올림과 숫자 타입 변환"}),e.jsx("p",{children:"소수 연산은 부동 소수점 오차가 발생할 수 있다."}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`0.1 + 0.2 // 0.30000000000000004
0.1 + 0.2 === 0.3 // false
`}),e.jsxs("p",{children:["컴퓨터는 이진법을 사용하기 때문에 특정 소수를 이진법으로 바꿀 때 무한히 반복되는 패턴이 발생하고,",e.jsx("br",{}),"무한한 소수 저장이 불가능하기 때문에 적절히 끊고 반올림하여 저장하기 때문에 위와 같은 문제가 발생한다."]}),e.jsx("p",{children:"이를 해결하려면 아래와 같이 반올림을 사용해야 한다."}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`(0.1 + 0.2).toFixed(1) // 소수점 1자리 반올림 "0.3"
`}),e.jsx("p",{children:"toFixed()는 문자열을 반환하기 때문에 숫자 타입으로 변환이 필요하다."}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`parseFloat((0.1 + 0.2).toFixed(1)) // 0.3
parseInt((0.1 + 0.2).toFixed(1)) // 0
Number((0.1 + 0.2).toFixed(1)) // 0.3
`}),e.jsxs(a,{title:"퀴즈",children:[e.jsx(s,{filename:"1. 밀리초 변환기",language:"javascript",code:`function toMs(min, sec) {
  // min과 sec를 밀리초 단위로 변환하여 반환
}

console.log(toMs(1, 30)); // 90000
console.log(toMs(2, 10)); // 130000
`}),e.jsx(s,{filename:"2. 할인 가격 계산기",language:"javascript",code:`function salePrice(price, isFirstBuy) {
  // 가격에서 10% 세일한 가격을 반환
  // 단, 첫 구매자라면 1.5달러 추가 할인
  // 소수점 둘째 자리에서 반올림
}

console.log(salePrice(70, false)); // 63
console.log(salePrice(10, true)); // 7.5
console.log(salePrice(10.3, true)); // 7.77
`})]})]})},c="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201000%201000'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%23000;}%3c/style%3e%3c/defs%3e%3ctitle%3eLogo%201%3c/title%3e%3cg%20id='logo1'%3e%3cpath%20class='cls-1'%20d='M500,927c0-477-5-495-113-495,108,0,113,0,113-360%20M500,927c0-477,5-495,113-495-108,0-113,0-113-360'/%3e%3cpath%20class='cls-1'%20d='M178.72,549,19,434A2.5,2.5,0,0,1,19,430L178.72,315c-39.34,35.29-61.42,75-61.42,117S139.38,513.71,178.72,549Z'/%3e%3cpath%20class='cls-1'%20d='M820.28,549,980,434a2.5,2.5,0,0,0,0-4.06L820.28,315c39.34,35.29,61.42,75,61.42,117S859.62,513.71,820.28,549Z'/%3e%3c/g%3e%3c/svg%3e",p={name:"2-6 스크롤 이벤트",idx:12,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"스크롤 이벤트"}),e.jsx("h3",{children:"navbar 만들기"}),e.jsxs(a,{title:"navbar 코드",children:[e.jsx(s,{filename:"2-7.css",language:"css",code:`.navbar {
  position : fixed;
  width : 100%;
  z-index : 5
}
.navbar-brand {
  font-size : 30px;
  transition : all 1s;
}
`}),e.jsx("p",{children:"100px 이상 스크롤 시 로고 사이즈가 줄어든다."}),e.jsx(n,{title:"첨부파일 (assets 폴더에 넣기)",items:[{alt:"logo.svg",src:c}]})]}),e.jsx("h3",{children:"스크롤 이벤트 리스너"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`window.addEventListener("scroll", function () {
  // 스크롤 시 실행할 코드
});
`}),e.jsx("p",{children:"window는 전체 브라우저 창을 의미한다. document는 HTML 문서 전체를 의미하지만 스크롤 이벤트는 관습적으로 window에 주로 사용한다."}),e.jsx("h3",{children:"스크롤 위치 확인"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`window.scrollX // 수평 스크롤 위치
window.scrollY // 수직 스크롤 위치
`}),e.jsx("p",{children:"페이지를 얼마나 스크롤했는지 확인할 때 사용한다."}),e.jsx("h3",{children:"스크롤 위치 지정"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`window.scrollTo(x, y) // (x, y) 좌표로 스크롤 이동
window.scrollBy(x, y) // 현재 위치에서 (x, y) 만큼 스크롤 이동
`}),e.jsx("p",{children:"스크롤 위치를 지정하거나 현재 위치에서 상대적으로 이동할 때 사용한다."}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`$(window).scrollTop(); // 수직 스크롤 위치
$(window).scrollTop(y); // y 위치로 수직 스크롤 이동
`}),e.jsx("p",{children:"jQuery를 사용하면 scrollTop() 메서드만 사용하여 수직 스크롤 위치 확인과 이동을 할 수 있다."}),e.jsx("h3",{children:"실제 높이"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`document.querySelector(".class").scrollTop; // 요소의 실제 스크롤 위치
document.querySelector(".class").scrollHeight; // 요소의 실제 높이
document.querySelector(".class").clientHeight; // 요소의 화면에 보이는 높이
`}),e.jsx("h3",{children:"스크롤 이벤트 주의할 점"}),e.jsxs("p",{children:["1. 스크롤 내린 양은 정수 단위로 나오지 않고, OS마다 부장확할 수 있기 때문에 여유를 두는 것이 좋다.",e.jsx("br",{}),"2. 스크롤 이벤트 리스너 안의 코드는 1초에 60번 이상 실행되므로 스크롤바 1개마다 1개만 부착하여 성능 저하를 방지하는 것이 좋다."]})]})},m={name:"2-7 탭메뉴",idx:13,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"탭메뉴"}),e.jsx("h3",{children:"탭메뉴 만들기"}),e.jsxs(a,{title:"탭메뉴 코드",children:[e.jsx(s,{filename:"2-8.html",language:"html",code:`<div class="container mt-5">
  <ul class="list">
    <li class="tab-button">Products</li>
    <li class="tab-button orange">Information</li>
    <li class="tab-button">Shipping</li>
  </ul>
  <div class="tab-content">
    <p>상품설명입니다. Product</p>
  </div>
  <div class="tab-content show">
    <p>스펙설명입니다. Information</p>
  </div>
  <div class="tab-content">
    <p>배송정보입니다. Shipping</p>
  </div>
</div> `}),e.jsx(s,{filename:"2-8.css",language:"css",code:`ul.list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #ccc;
}

ul.list::after {
  content: "";
  display: block;
  clear: both;
}

.tab-button {
  display: block;
  padding: 10px 20px 10px 20px;
  float: left;
  margin-right: -1px;
  margin-bottom: -1px;
  color: grey;
  text-decoration: none;
  cursor: pointer;
}

.orange {
  border-top: 2px solid orange;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid white;
  border-left: 1px solid #ccc;
  color: black;
  margin-top: -2px;
}

.tab-content {
  display: none;
  padding: 10px;
}

.show {
  display: block;
}
`}),e.jsx("p",{children:"<li>태그를 누르면 해당하는 <div>가 나타난다."})]}),e.jsx("h3",{children:"JavaScript 파일 모듈화"}),e.jsx("p",{children:"JavaScript 코드가 너무 길고 복잡할 경우 CSS처럼 .js 파일을 만들어 뺄 수 있다."}),e.jsx(s,{filename:"HTML",language:"html",code:'<script src="filePath" defer><\/script>'}),e.jsxs("p",{children:["<head> 태그 안쪽에 위 코드를 넣어 불러올 수 있다.",e.jsx("br",{}),"defer는 HTML 문서를 모두 불러온 후 스크립트를 실행하도록 한다."]}),e.jsx("h3",{children:"셀렉터"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`document.querySelectorAll(".class")[num]
$(".class").eq(num) // .class 중 num번째 선택
`}),e.jsx("p",{children:"이걸 사용하면 같은 클래스 중 원하는 요소를 선택할 수 있다."}),e.jsxs("p",{children:["하지만 셀렉터 문법을 사용하면 HTML 파일을 읽고 찾아야 하기 때문에 HTML 파일이 길고 복잡할 수록 오래 걸린다.",e.jsx("br",{}),"그렇기 때문에 셀렉터 문법을 많이 사용할 경우에는 요소를 변수에 저장하여 사용하는 것이 좋다."]}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`var element = $(".class");
element.eq(num) // .class 중 num번째 선택
`}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`$(".class").length; // .class 개수
`}),e.jsx("p",{children:"이것도 유용하니 알아두자."}),e.jsx("h3",{children:"For 반복문"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`for (let i = 0; i < num; i++) {
  // num번 반복 실행할 코드
}
`}),e.jsx("p",{children:"var 대신 let을 사용하는 이유는 변수의 유효 범위에 있다."})]})},u={name:"2-8 이벤트 버블링",idx:14,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"이벤트 버블링"}),e.jsx("h3",{children:"모달창 만들기"}),e.jsxs(a,{title:"모달창 코드",children:[e.jsx(s,{filename:"2-9.html",language:"html",code:`<div class="black-bg">
  <div class="white-bg">
    <h4>로그인하세요</h4>
    <form action="../level_1/success.html">
      <div class="my-3">
        <input type="text" class="form-control" id="email" />
      </div>
      <div class="my-3">
        <input type="password" class="form-control" id="password" />
      </div>
      <button type="submit" class="btn btn-primary">전송</button>
      <button type="button" class="btn btn-danger" id="close">닫기</button>
    </form>
  </div>
</div>
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand">Navbar</span>
  </div>
</nav>

<button id="login-btn">로그인</button>
`}),e.jsx("p",{children:"모달창 바탕 부분을 누르면 모달창이 사라진다."})]}),e.jsx("h3",{children:"이벤트 버블링"}),e.jsx("p",{children:"특정 요소에서 발생한 이벤트가 그의 모든 상위 요소로 전파되는 현상이다."}),e.jsx(s,{filename:"HTML",language:"html",code:`<div>
  <div>
    <button></button>
  </div>
</div>
`}),e.jsx("p",{children:"버튼을 클릭하면 버튼의 상위 요소인 <div>에서도 클릭한 효과가 적용된다."}),e.jsx("h3",{children:"이벤트용 셀렉터와 함수"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`element.addEventListener("event", function (e) {
  e.target; // 이벤트가 발생한 실제 요소 : element가 아닐 수 있음
  e.currentTarget; // 이벤트 리스너가 등록된 요소 : element
  this; // 이벤트 리스너가 등록된 요소 : element
  e.preventDefault(); // 기본 이벤트 동작 막기
  e.stopPropagation(); // 상위 요소로 이벤트 버블링 막기
});
`}),e.jsx("h3",{children:"셀렉터 사용 시 주의점"}),e.jsx("p",{children:"1. 같은 요소라도 jQuery 셀렉터와 querySelector로 찾은 결과는 다르다."}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`console.log($("body")); // ce.fn.init {0: body, length: 1, prevObject: ce.fn.init {…}, context: document, selector: "body"}
console.log(document.querySelector("body")); // <body>...</body>

$("element") == document.querySelector("element"); // 항상 false
`}),e.jsx("p",{children:"2. jQuery 셀렉터끼리 등호 비교는 불가능하다. 대신 is() 메서드를 사용한다."}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`$("element").addEventListener("event", function (e) {
  $(e.target) == $("element"); // 비교 불가능
  $(e.target).is($("element")); // 비교 가능
});
`}),e.jsx("p",{children:"참고로 e.target는 자바스크립트 객체이고, $(e.target)은 jQuery 객체로 변환한 것이다."})]})},g={name:"2-9 탭메뉴 응용",idx:15,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"탭메뉴 응용"}),e.jsx("h3",{children:"탭메뉴 다시 만들기"}),e.jsxs(a,{title:"탭메뉴 코드",children:[e.jsx(s,{filename:"2-10.html",language:"html",code:`<div class="container">
  <ul class="list">
    <li class="tab-button orange">Products</li>
    <li class="tab-button">Information</li>
    <li class="tab-button">Shipping</li>
  </ul>
  <div class="tab-content show">
    <p>상품설명입니다. Product</p>
  </div>
  <div class="tab-content">
    <p>스펙설명입니다. Information</p>
  </div>
  <div class="tab-content">
    <p>배송정보입니다. Shipping</p>
  </div>
</div>
`}),e.jsx(s,{filename:"2-10.css",language:"css",code:`.container {
  margin-top: 20px;
}

ul.list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #ccc;
}

ul.list::after {
  content: "";
  display: block;
  clear: both;
}

.tab-button {
  display: block;
  padding: 10px 20px 10px 20px;
  float: left;
  margin-right: -1px;
  margin-bottom: -1px;
  color: grey;
  text-decoration: none;
  cursor: pointer;
}

.orange {
  border-top: 2px solid orange;
  border-right: 1px solid #ccc;
  border-bottom: 1px solid white;
  border-left: 1px solid #ccc;
  color: black;
  margin-top: -2px;
}

.tab-content {
  display: none;
  padding: 10px;
}

.show {
  display: block;
}
`}),e.jsx("p",{children:"2-8.html에서 만든 탭메뉴의 스크립트를 함수를 사용하여 같은 기능을 하도록 한다."})]}),e.jsx("h3",{children:"함수 파라미터"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`fName(value1, value2);

function fName(param1, param2) {
  param1;
  param2;
}
`}),e.jsx("p",{children:"함수의 괄호 안에 파라미터(인수)를 넣어 변수처럼 사용할 수 있다."}),e.jsx("h3",{children:"dataset 문법"}),e.jsx("p",{children:"HTML 요소에 사용자 정의 데이터를 저장할 수 있는 속성이다."}),e.jsx(s,{filename:"HTML",language:"html",code:'<div data-dataName="value"></div>'}),e.jsx("p",{children:"이렇게 dataName에 value를 저장하고,"}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:"document.querySelector().dataset.dataName"}),e.jsx("p",{children:".dataset.dataName으로 이를 불러올 수 있다."}),e.jsx(s,{filename:"JavaScript",language:"javascript",code:`$("element").data('dataName', 'value'); // 데이터 저장
$("element").data('dataName') // 데이터 불러오기`}),e.jsx("p",{children:"dataset 문법은 IE 11 이상 버전에서 지원되는데, jQuery의 data() 메서드는 더 오래된 브라우저도 지원한다."})]})},v={name:"2-10 라이브러리",idx:16,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"라이브러리"}),e.jsx("h3",{children:e.jsx("a",{target:"_blank",href:"https://swiperjs.com/demos",children:"Swiper"})}),e.jsx("p",{children:"캐러셀 라이브러리"}),e.jsx("h3",{children:e.jsx("a",{target:"_blank",href:"https://www.chartjs.org/docs/latest/samples/",children:"Chart.js"})}),e.jsx("p",{children:"차트 라이브러리"}),e.jsx("h3",{children:e.jsx("a",{target:"_blank",href:"https://michalsnik.github.io/aos/",children:"Animate on Scroll"})}),e.jsx("p",{children:"스크롤 애니메이션 라이브러리"}),e.jsx("h3",{children:e.jsx("a",{target:"_blank",href:"https://www.emailjs.com/docs/introduction/how-does-emailjs-work/",children:"EmailJS"})}),e.jsx("p",{children:"이메일 전송 라이브러리"}),e.jsx("h3",{children:e.jsx("a",{target:"_blank",href:"https://lodash.com/docs/4.17.15",children:"Lodash"})}),e.jsx("p",{children:"유틸리티 라이브러리(array, object, 문자, 숫자 자료를 다루기 편해지는 기본함수들을 제공)"}),e.jsxs("h3",{children:[e.jsx("a",{target:"_blank",href:"https://react.dev/",children:"React"}),"/",e.jsx("a",{target:"_blank",href:"https://play.vuejs.org/",children:"Vue"})]}),e.jsx("p",{children:"프론트엔드 프레임워크"}),e.jsx("h3",{children:e.jsx("a",{target:"_blank",href:"https://alvarotrigo.com/fullPage/",children:"Fullpage.js"})}),e.jsx("p",{children:"풀페이지 스크롤 라이브러리"})]})};export{d as L,o as a,x as b,h as c,j as d,p as e,m as f,u as g,g as h,v as i};
