import{j as e,F as a,C as t}from"./level-1-DAnh3gfc.js";const n={name:"3-1 Array/Object",idx:17,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"Array/Object"}),e.jsx("h3",{children:"학생 카드 만들기"}),e.jsxs(a,{title:"학생 카드 코드",children:[e.jsx(t,{filename:"3-1.html",language:"html",code:`<div class="container mt-3">
  <div class="card p-3">
    <span>이름</span>
    <span>학번</span>
  </div>
</div>
`}),e.jsx("p",{children:"학생 카드의 이름과 학번 부분에 학생 데이터를 불러와 대체한다."})]}),e.jsx("h3",{children:"Array 자료형"}),e.jsx("p",{children:"배열은 순서 개념이 있는 자료형으로, 배열 관련 함수로 순서를 변경하거나 자료 조작이 가능하다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:"var arr = [value, value, value];"}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`arr[idx]; // idx번째 값
arr[idx] = newValue; // idx번째 값을 newValue로 변경

arr.sort(); // 배열 가나다순 정렬
arr.slice(startIdx, endIdx); // startIdx부터 endIdx 전까지 잘라내기
arr.push(value); // 배열 끝에 value 추가
`}),e.jsx("p",{children:"배열은은 이름, 학번, 전공 등 여러 자료들 중 한 가지 자료에 대한 값들을 한 곳에 저장할 때 사용하면 좋다."}),e.jsx("h3",{children:"Object 자료형"}),e.jsx("p",{children:"객체는 키-값 쌍으로 데이터를 저장하는 자료형으로, 키를 지정해야 값을 조회하거나 변경할 수 있다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:"var obj = { key : value, key : value };"}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`obj[key]; // key에 해당하는 value
obj[key] = newValue; // key에 해당하는 값을 newValue로 변경`}),e.jsx("p",{children:"객체는 한 사람의 이름, 학번, 전공 등 여러 가지 자료를 한 곳에 묶어 저장할 때 사용하면 좋다."})]})},N=Object.freeze(Object.defineProperty({__proto__:null,default:n},Symbol.toStringTag,{value:"Module"})),s={name:"3-10 LocalStorage",idx:26,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"LocalStorage"}),e.jsx("h3",{children:"장바구니 수강신청 만들기"}),e.jsxs(a,{title:"장바구니 수강신청 코드",children:[e.jsx(t,{filename:"3-10.html",language:"html",code:`<div class="container">
  <table class="table table-striped">
    <thead>
      <tr>
        <th id="grade">학년</th>
        <th id="title">강의명</th>
        <th id="professor">교수명</th>
        <th></th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<div class="container">
  <a href="./3-10-1.html">
    <button class="btn btn-danger">장바구니 보기</button>
  </a>
</div>

<script>
  var lectures = [];
  
  $.when(
    $.get("https://jaehun-kang.github.io/JS_Lecture/lectures.json"),
    $.get("https://jaehun-kang.github.io/JS_Lecture/more1.json"),
    $.get("https://jaehun-kang.github.io/JS_Lecture/more2.json")
  ).done(function (grade2, grade3, grade4) {
    lectures = [...grade2[0], ...grade3[0], ...grade4[0]];
    displayTable();
  });
  
  function displayTable() {
    var tableContent = '';
    lectures.forEach(function (lecture) {
      tableContent += \`<tr>
        <td>\${lecture.grade}</td>
        <td>\${lecture.title}</td>
        <td>\${lecture.professor}</td>
        <td>
          <button class="cart">장바구니 추가</button>
        </td>
      </tr>\`;
    });
    $("tbody").html(tableContent);
  }
<\/script>`}),e.jsx(t,{filename:"3-10-1.html",language:"html",code:`<h3>장바구니</h3>
<table class="table table-striped">
  <thead>
    <tr>
      <th id="grade">학년</th>
      <th id="title">강의명</th>
      <th id="professor">교수명</th>
    </tr>
  </thead>
  <tbody></tbody>
</table>
`}),e.jsxs("p",{children:["장바구니 추가 버튼을 누르면 LocalStorage에 저장하고, 장바구니 보기 버튼을 누르면 장바구니 페이지를 보여준다.",e.jsx("br",{}),"이미 장바구니에 추가된 강의는 저장되지 않는다."]})]}),e.jsx("h3",{children:"브라우저 저장공간"}),e.jsx("p",{children:"개발자 도구의 Application 텝에 들어가보면 여러 종류의 저장공간이 있다."}),e.jsxs("p",{children:["- Local Storage / Session Storage",e.jsx("br",{}),"{ key : value } 형태로 문자, 숫자 데이터 저장 가능"]}),e.jsxs("p",{children:["- IndexedDB",e.jsx("br",{}),"크고 많은 구조화된 데이터 저장 가능"]}),e.jsxs("p",{children:["- Cookies",e.jsx("br",{}),"유저 인증 정보 저장에 주로 사용"]}),e.jsxs("p",{children:["- Cache Storage",e.jsx("br",{}),"HTML, CSS, JS, IMG 파일 저장 가능"]}),e.jsxs("p",{children:["Local Storage / Session Storage는 문자, 숫자 데이터만 key : value 형태로 저장이 가능하고, 5MB 용량 제한이 있다.",e.jsx("br",{}),"Local Storage는 브라우저를 닫아도 데이터가 유지되지만, Session Storage는 브라우저를 닫으면 데이터가 삭제된다."]}),e.jsx("h3",{children:"Local Storage"}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`localStorage.setItem("key", value) // 저장
localStorage.getItem("key") // 불러오기
localStorage.removeItem("key") // 삭제
localStorage.clear() // 전체 삭제
`}),e.jsx("p",{children:"문자, 숫자만 저장할 수 있다."}),e.jsx("h3",{children:"배열과 객체 저장/불러오기"}),e.jsxs("p",{children:["Array/Object를 그냥 저장하면 강제로 문자열로 변환하여 저장하는데, 자료가 깨질 위험이 있다.",e.jsx("br",{}),".stringify()를 사용하여 JSON으로 변환 후 저장하면 안전하게 저장할 수 있다."]}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var arr = [value, value, value];
var newArr = JSON.stringify(arr); // 배열을 JSON 문자열로 변환

localStorage.setItem("key", newArr); // 변환한 문자열 localStorage에 저장
`}),e.jsxs("p",{children:["저장할 때 문자열로 변환하여 저장했으니 불러오면 문자열 상태이다.",e.jsx("br",{}),".parse()를 사용하여 다시 배열/객체로 변환해주어야 한다."]}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var load = localStorage.getItem("key");
load = JSON.parse(load); // JSON 문자열을 다시 배열/객체로 변환
`}),e.jsx("h3",{children:".siblings()"}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`$("element").siblings(); // 모든 형제 요소 선택
$("element").siblings("tag"); // tag에 해당하는 형제 요소 모두 선택
$("element").siblings(".class"); // class에 해당하는 형제 요소 모두 선택
$("element").siblings("#id"); // id에 해당하는 형제 요소 선택
`}),e.jsxs("p",{children:["JavaScript로는 형제 요소를 찾기 위해 previousElementSibling, nextElementSibling을 사용하는데,",e.jsx("br",{}),"코드가 길어지기 때문에 jQuery의 .siblings() 메서드를 사용하면 편리하다."]}),e.jsx("h3",{children:"LocalStorage 수정"}),e.jsxs("p",{children:["LocalStorage 안에 있는 데이터를 직접 수정하는 문법은 없다.",e.jsx("br",{}),"수정하려면 데이터를 불러온 후 수정하고 다시 저장해야 한다."]}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`if (localStorage.getItem('key') != null ){ // key가 존재하는지 확인
  var pull = JSON.parse(localStorage.key); // key에 해당하는 데이터 불러오기
  pull.push(newValue); // 불러온 데이터 수정
  localStorage.setItem('key', JSON.stringify(pull)); // 수정한 데이터로 덮어쓰기
} else {
  localStorage.setItem('key', JSON.stringify([newValue])) // key가 없으면 새로 저장
}
`})]})},E=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"})),l={name:"3-11 LocalStorage 응용",idx:27,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"LocalStorage 응용"}),e.jsx("h3",{children:"플리마켓 장바구니 만들기"}),e.jsxs(a,{title:"플리마켓 장바구니 코드",children:[e.jsx(t,{filename:"3-11.html",language:"html",code:`<div class="container">
  <div class="row"></div>
</div>

<div class="container">
  <a href="./3-11-1.html">
    <button class="btn btn-danger">장바구니 보기</button>
  </a>
</div>

<script>
  var products = [
    { id: 0, price: 12000, title: "CtrlS 키캡 버튼" },
    { id: 1, price: 4000, title: "p5.js 포토부스" },
  ];

  function makeCards(obj) {
    obj.forEach((a) => {
      var newCard = \`<div class="col-sm-4">
        <img src="product-\${a.id}.jpg" class="w-100" />
        <h5>\${a.title}</h5>
        <p>가격 : \${a.price}</p>
        <button class="cart">장바구니 추가</button>
      </div>\`;
      $(".row").append(newCard);
    });
  }

  makeCards(products);
<\/script>
`}),e.jsx(t,{filename:"3-11-1.html",language:"html",code:`<h3>장바구니</h3>
<ul class="list"></ul>

<script>
  var cartList = JSON.parse(localStorage.getItem("cart"));
  console.log(cartList);
  cartList.forEach((i) => {
    var newCard = \`<li>\${i.name} \${i.count}개</li>\`;
    $(".list").append(newCard);
  });
<\/script>
`}),e.jsx("p",{children:"같은 상품을 여러 개 추가하면 상품 개수가 증가한다."})]})]})},q=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"})),o={name:"3-12 스크롤 애니메이션",idx:28,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"스크롤 애니메이션"}),e.jsx("h3",{children:"스크롤 애니메이션 만들기"}),e.jsxs(a,{title:"스크롤 애니메이션 코드",children:[e.jsx(t,{filename:"3-12.html",language:"html",code:`<div class="card-bg">
  <div class="card-box">
    <img src="../../assets/car1.png"/>
  </div>
  <div class="card-box">
    <img src="../../assets/car2.png"/>
  </div>
  <div class="card-box">
    <img src="../../assets/car3.png"/>
  </div>
</div>
`}),e.jsx(t,{filename:"3-12.css",language:"css",code:`.card-bg {
  height: 2000px;
  margin-top: 400px;
  margin-bottom: 1100px;
}

.card-box img {
  display: block;
  margin: auto;
  max-width: 60%;
  border-radius: 12px;
  overflow: hidden;
}

.card-box {
  position: sticky;
  top: 200px;
  margin-top: 100px;
}
`}),e.jsx("p",{children:"스크롤바를 내리면 이미지가 서서히 작아지며 사라진다."})]}),e.jsx("h3",{children:"스크롤 애니메이션"}),e.jsx("p",{children:"어떤 애니메이션이든 시작 부분과 끝 부분을 만들고 연결해주면 된다."}),e.jsx(t,{filename:"Javascript",language:"javascript",code:`$(window).scroll(function () {
  var scrollH = $(window).scrollTop(); // 현재 스크롤된 높이 값
});
`}),e.jsx("p",{children:"스크롤 애니메이션은 계산을 조금 해야한다."}),e.jsx(t,{filename:"Javascript",language:"javascript",code:`value1 = a * scrollY1 + b; // 애니메이션 시작 위치값
value2 = a * scrollY2 + b; // 애니메이션 끝 위치값
`}),e.jsx("p",{children:"value 부분에는 opacity, scale 등 원하는 CSS 속성값(숫자)을 넣고, 애니메이션을 시작할 스크롤 위치와 끝나는 스크롤 위치를 지정해주면 된다."}),e.jsx(t,{filename:"Javascript",language:"javascript",code:`$(window).scroll(function () {
  var property = a * $(window).scrollTop() + b; // 위에서 구한 a, b 값 사용
  $("element").css("property", property); // property 부분에 원하는 CSS 속성 넣기
});
`})]})},P=Object.freeze(Object.defineProperty({__proto__:null,default:o},Symbol.toStringTag,{value:"Module"})),r={name:"3-13 마우스 이벤트",idx:29,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"마우스 이벤트"}),e.jsx("h3",{children:"캐러셀 스와이프 만들기"}),e.jsxs(a,{title:"캐러셀 스와이프 코드",children:[e.jsx(t,{filename:"3-13.html",language:"html",code:`<div style="overflow: hidden">
  <div class="slide-container">
    <div class="slide-box">
      <img src="../../assets/car1.png"/>
    </div>
    <div class="slide-box">
      <img src="../../assets/car2.png"/>
    </div>
    <div class="slide-box">
      <img src="../../assets/car3.png"/>
    </div>
  </div>
</div>
`}),e.jsx("p",{children:"스와이프하면 다음 슬라이드로 넘어간다."})]}),e.jsx("h3",{children:"마우스 이벤트"}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`$("element").on("mousedown", function () { 
// element 위에서 마우스 버튼을 누를 때 실행할 코드
});
$("element").on("mousemove", function () {
  // element 위에서 마우스를 움직일 때 실행할 코드
});
$("element").on("mouseup", function () {
  // element 위에서 마우스 버튼을 뗄 때 실행할 코드
});
`}),e.jsx("p",{children:"마우스 클릭, 드래그 등 이벤트를 처리할 수 있다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`$("element").on("mousemove", function (e) {
  e.clientX; // 마우스의 x 좌표
  e.clientY; // 마우스의 y 좌표
});
`}),e.jsx("p",{children:"이렇게 마우스의 좌표도 구할 수 있다."}),e.jsx("h3",{children:"터치 이벤트"}),e.jsx("p",{children:"터치 이벤트는 아래와 같이 처리할 수 있다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`$("element").on("touchstart", function () { 
// element 위에서 터치가 시작될 때 실행할 코드
});
$("element").on("touchmove", function () {
  // element 위에서 터치 중일 때 실행할 코드
});
$("element").on("touchend", function () {
  // element 위에서 터치가 끝날 때 실행할 코드
});
`}),e.jsx("h3",{children:"포인터 이벤트"}),e.jsxs("p",{children:["포인터 이벤트는 마우스, 터치, 스타일러스 등 다양한 입력 장치를 통합하여 처리할 수 있다.",e.jsx("br",{}),"이를 통해 마우스, 터치 이벤트를 통합할 수 있다."]}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`$("element").on("pointerdown", function () { 
// element 위에서 포인터 입력이 시작될 때 실행할 코드
});
$("element").on("pointermove", function () {
  // element 위에서 포인터 입력이 움직일 때 실행할 코드
});
$("element").on("pointerup", function () {
  // element 위에서 포인터 입력이 끝날 때 실행할 코드
});
`}),e.jsx("p",{children:"하지만 이 방법은 개발자 도구 Device Toolbar에서 터치 이벤트를 똑같이 구현하지 못하기 때문에 실제 터치 기기에서 테스트하는 것이 좋다."})]})},H=Object.freeze(Object.defineProperty({__proto__:null,default:r},Symbol.toStringTag,{value:"Module"})),i={name:"3-14 Switch 문법",idx:30,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"Switch 문법"}),e.jsx("h3",{children:"심리테스트 만들기"}),e.jsxs(a,{title:"심리테스트 코드",children:[e.jsx(t,{filename:"3-14.html",language:"html",code:`<div id="quiz">
  <h4>무인도에 들고 갈 한 가지는?</h4>
  <button>핸드폰</button>
  <button>칼</button>
  <button>씨앗</button>
  <button>침낭</button>
</div>

<script>
  var phone = "당신은 즐거움을 최우선으로 생각합니다. 심심할 걱정은 없겠네요!";
  var knife = "당신은 효율성을 중시합니다. 적절한 도구 하나면 충분하겠네요!";
  var seed = "당신은 지속성을 최우선으로 생각합니다. 굶을 걱정은 없겠네요!";
  var bedding = "당신은 정서적 안정을 최우선으로 생각합니다. 추울 걱정은 없겠네요!";
<\/script>
`}),e.jsx("p",{children:"답안 중 하나를 선택하면 alert로 결과가 나온다."})]}),e.jsx("h3",{children:"Switch 조건문"}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`switch (variable) {
  case value1 :
    // variable 값이 value1과 같을 때 실행할 코드
    break
  case value2 :
    // variable 값이 value2과 같을 때 실행할 코드
    break
  default :
    // case 값과 일치하는 것이 없을 때 실행할 코드
}`}),e.jsx("p",{children:"아래 If/Else 문과 같은 기능을 한다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`if (variable === value1) {
  // variable 값이 value1과 같을 때 실행할 코드
} else if (variable === value2) {
  // variable 값이 value2과 같을 때 실행할 코드
} else {
  // case 값과 일치하는 것이 없을 때 실행할 코드
}`}),e.jsx("p",{children:"If/Else 문과 비슷하지만, 값에 따른 조건분기를 만들고 싶을 때 여러 경우를 간결하게 처리할 수 있다."})]})},I=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"})),c={name:"3-2 Array/Object 응용",idx:18,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"Array/Object 응용"}),e.jsx("h3",{children:"강의 카드 만들기"}),e.jsxs(a,{title:"강의 카드 코드",children:[e.jsx(t,{filename:"3-2.html",language:"html",code:`<div class="card-group container">
  <div class="card">
    <div class="card-body">
      <h5>수업명</h5>
      <p>교수 : ○○○</p>
      <button class="btn btn-danger">장바구니</button>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5>수업명</h5>
      <p>교수 : ○○○</p>
      <button class="btn btn-danger">장바구니</button>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5>수업명</h5>
      <p>교수 : ○○○</p>
      <button class="btn btn-danger">장바구니</button>
    </div>
  </div>
  <div class="card">
    <div class="card-body">
      <h5>수업명</h5>
      <p>교수 : ○○○</p>
      <button class="btn btn-danger">장바구니</button>
    </div>
  </div>
</div>

<script>
  var lectures = [
    { id : 0, professor : "방경란", title : "커뮤니케이션디자인" },
    { id : 1, professor : "유동관", title : "일러스트레이션기초" },
    { id : 2, professor : "서승연", title : "타이포그래피기초" },
    { id : 3, professor : "손우성", title : "비디오그래피" }
  ];
<\/script>
`}),e.jsx("p",{children:"lectures 변수 안의 강의 정보가 HTML에 출력된다."})]}),e.jsx("h3",{children:"Array/Object 복합 사용"}),e.jsx("p",{children:"Array 안에 Object를 넣거나 Object 안에 Array를 넣어 복합적으로 사용할 수 있다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var arr = [{ key : value, key : value }, { key : value, key : value }];
arr[idx].key; // idx번째 객체의 key에 해당하는 값
`}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var obj = { key : [value, value], key : [value, value] };
obj.key[idx]; // key에 해당하는 배열의 idx번째 값
`})]})},C=Object.freeze(Object.defineProperty({__proto__:null,default:c},Symbol.toStringTag,{value:"Module"})),d={name:"3-3 Select",idx:19,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"Select"}),e.jsx("h3",{children:"상품 선택 폼 만들기"}),e.jsxs(a,{title:"상품 선택 폼 코드",children:[e.jsx(t,{filename:"3-3.html",language:"html",code:`<form class="container my-5 form-group">
    <p>상품선택</p>
    <select class="form-select mt-2">
      <option>모자</option>
      <option>셔츠</option>
    </select>
</form>`}),e.jsx("p",{children:"셔츠를 선택하면 하단에 사이즈를 선택할 수 있는 <select> 박스가 나타난다."})]}),e.jsx("h3",{children:"Select 태그"}),e.jsx("p",{children:"<select> 태그는 드롭다운 형식의 선택 폼을 만들 때 사용한다."}),e.jsx(t,{filename:"HTML",language:"html",code:`<select>
  <option></option>
  <option></option>
</select>
`}),e.jsx("p",{children:"<select> 태그는 <input> 태그와 같이 input, change 이벤트가 발생하고, .value 속성으로 선택된 값을 알 수 있다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`document.querySelector("select").value;
$("select").val(); // <select>에서 선택된 <option>의 값
`}),e.jsx("h3",{children:"스크립트의 실행 시점"}),e.jsxs("p",{children:["JavaScript는 페이지 로드 시점에 1회 실행되고 다시 실행되지 않는다.",e.jsx("br",{}),"이후에 실행 시점을 정해주고 싶은 코드에는 이벤트 리스너를 부착해야 한다."]}),e.jsx("h3",{})]})},A=Object.freeze(Object.defineProperty({__proto__:null,default:d},Symbol.toStringTag,{value:"Module"})),p={name:"3-4 Select 2",idx:20,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"Select 2"}),e.jsx("h3",{children:"HTML 생성"}),e.jsxs("p",{children:["만약 <select> 폼에서 새로운 옵션에 따라 다른 선택 폼이 나타나도록 하려면 어떻게 해야 할까?",e.jsx("br",{}),"자바스크립트를 사용하여 동적으로 HTML 요소를 생성하고 삽입하면 확장성이 좋아진다.",e.jsx("br",{}),"크게 두 가지 방법이 있다."]}),e.jsx("p",{children:"1. 태그 생성 후 내부 내용 설정"}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var newElement = document.createElement("tagName"); // 새로운 HTML 요소 생성
newElement.innerHTML = "text"; // 요소의 내용 설정
parentElement.appendChild(newElement); // 부모 요소에 자식 요소로 삽입
`}),e.jsx("p",{children:"2. 태그와 내용 문자열을 함께 생성"}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var newElement = \`<tagName>text</tagName>\`; // 새로운 HTML 요소 생성
parentElement.insertAdjacentHTML("beforeend", newElement); // 부모 요소 마지막에 자식 요소로 삽입
$("parentElement").append(newElement); // jQuery를 사용하여 부모 요소 마지막에 자식 요소로 삽입
`}),e.jsx("h3",{children:".prop()"}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`$("element").prop("propertyName", value) // element의 propertyName 속성을 value 값으로 변경
`}),e.jsx("p",{children:".prop()을 사용하면 체크박스의 체크 상태, 버튼의 비활성화, 인풋의 값 등 요소의 상태를 확인하거나 변경할 수 있다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`$("input").prop("checked", true); // checkbox를 체크된 상태로 설정
$("button").prop("disabled", true); // button을 비활성화
$("input").prop("value"); // input의 값
`})]})},F=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),h={name:"3-5 Select 3",idx:21,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"Select 3"}),e.jsx("h3",{children:"ForEach 반복문"}),e.jsx("p",{children:"배열 형식의 데이터를 사용하여 HTML 요소를 반복 생성해보자."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var arr = [value, value, value];

for (let i = 0; i < arr.length; i++) {
  $("parentElement").append(\`<tagName>\${arr[i]}</tagName>\`);
}
`}),e.jsx("p",{children:"위처럼 For 반복문을 사용할 수 있지만, ForEach 반복문을 사용하면 더 편리하게 사용할 수 있다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`arr.forEach(function (value, idx, array) { // 콜백함수의 첫번째 인수는 배열 안의 값, 두번째 인수는 인덱스, 세번째 인수는 배열 자체이다.
  // 반복 실행할 코드
}
`}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var arr = [value, value, value];

arr.forEach(function (value) {
  $("parentElement").append(\`<tagName>\${value}</tagName>\`);
});
`}),e.jsx("h3",{children:"For...In 반복문"}),e.jsx("p",{children:"데이터가 객체 형식이라면, For...In 반복문을 사용하면 된다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var obj = {key1: value1, key2: value2, key3: value3};

for (var key in obj) {
  $("parentElement").append(\`<tagName>\${obj[key]}</tagName>\`);
}
`}),e.jsx("h3",{children:"화살표 함수"}),e.jsx("p",{children:"화살표 함수는 함수를 더 간결하게 작성할 수 있는 문법으로, 주로 콜백 함수 대신 사용한다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`function fName() {} // 일반 함수
const fName = () => {} // 화살표 함수
`}),e.jsx("p",{children:"막상 보면 더 길어보일지 모르지만, 화살표 함수는 생략 가능한 부분이 있다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`const fName = () => {}
const fName = param => {} // 매개변수가 하나일 때는 괄호 생략 가능
const fName = (param1, param2) => {} // 매개변수가 두 개 이상일 때는 괄호 생략 불가능
const fName = () => value // 함수 본문이 한 줄이고 return문만 있을 때는 중괄호와 return 생략 가능
`}),e.jsxs("p",{children:["하지만 일반 함수와 화살표 함수에서 this가 다르게 동작한다.",e.jsx("br",{}),"그러니 이벤트 리스너에서 화살표 함수를 사용한다면 this가 의도한 대로 동작하지 않을 수 있다."]})]})},B=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"})),u={name:"3-6 Array / For 실습",idx:22,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"Array / For 실습"}),e.jsxs(a,{title:"퀴즈",children:[e.jsx(t,{filename:"1. 출석부",language:"javascript",code:`const rollBook = ["제헌", "영민", "현민", "채이", "수빈", "지현", "현서", "은별", "지윤", "시현"];
var attendance = []; // 온 사람들 이름 넣기

// 출석부에 있는 이름을 전부 체크해서
// 있을 경우 "이름: 네!" 출력
// 없는 경우 "이름: ..." 출력
// 배열에 특정 값이 있는지 확인은 arr.includes("value") 사용
`}),e.jsx(t,{filename:"2. 구구단",language:"javascript",code:"// 2단부터 9단까지 곱셈 결과 부분만 출력하는 구구단 계산기"}),e.jsx(t,{filename:"3. 평균 점수 변화 계산기",language:"javascript",code:`function average(scores, newScore) {
  // scores에는 이전 점수들의 배열, newScore에는 새로 받은 점수를 넣으면
  // 이전 점수들의 평균과 새 점수를 비교하여
  // 오른 경우 "평균보다 00점 올랐습니다."를 반환
  // 내린 경우 "평균보다 00점 내렸습니다."를 반환
  // 같을 경우 "평균 점수와 같습니다."를 반환
  // 절대값은 Math.abs(number) 사용
}

average([10, 20, 30, 40, 50], 40); // "평균보다 10점 올랐습니다."
average([40, 40, 40], 20); // "평균보다 20점 내렸습니다."
average([40, 40, 40], 40); // "평균 점수와 같습니다."
`})]})]})},z=Object.freeze(Object.defineProperty({__proto__:null,default:u},Symbol.toStringTag,{value:"Module"})),m={name:"3-7 Ajax",idx:23,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"Ajax"}),e.jsx("h3",{children:"강의 목록 만들기"}),e.jsxs(a,{title:"강의 목록 코드",children:[e.jsx(t,{filename:"3-7.html",language:"html",code:`<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h5>Card title</h5>
      <p>교수명 : ○○○</p>
    </div>
  </div>
  <button class="btn btn-danger" id="more">더보기</button>
</div>
`}),e.jsx(t,{filename:"URL",language:"javascript",code:`"https://jaehun-kang.github.io/JS_Lecture/lectures.json"
"https://jaehun-kang.github.io/JS_Lecture/more1.json"
"https://jaehun-kang.github.io/JS_Lecture/more2.json"
`}),e.jsxs("p",{children:["lectures 배열 데이터를 사용하여 각 강의 카드 레이아웃이 생성된다.",e.jsx("br",{}),"더 보기 버튼을 누르면 추가로 생성된다."]})]}),e.jsx("h3",{children:"서버"}),e.jsxs("p",{children:["서버는 유저가 데이터 요청을 하면 데이터를 보내주거나 DB에 저장하는 프로그램이다.",e.jsx("br",{}),"예를 들어, 웹사이트에 접속하면 서버가 HTML, CSS, JS 파일을 유저에게 보내주고,회원가입을 할 때는 입력한 정보를 서버가 받아서 DB에 저장한다.",e.jsx("br",{}),"서버에 데이터를 요청할 때는 어떤 url인지 잘 기재하고 어떤 방식(GET/POST 등)으로 요청할지 결정해야 한다."]}),e.jsx("h3",{children:"GET/POST 요청"}),e.jsx("p",{children:"GET 요청은 서버에 있던 데이터를 읽고 싶을 때, POST 요청은 서버에 데이터를 보낼 때 주로 사용한다."}),e.jsxs("p",{children:["GET 요청을 보내는 가장 간단한 방법은 브라우저 주소창에 URL을 입력하는 것이고,",e.jsx("br",{}),"POST 요청은 <form> 태그를 사용하여 가능하다."]}),e.jsx(t,{filename:"HTML",language:"html",code:'<form action="URL" method="post">'}),e.jsx("p",{children:"하지만 이 방법은 페이지가 새로고침된다는 단점이 있다."}),e.jsx("h3",{children:"Ajax"}),e.jsx("p",{children:"Ajax는 서버에 GET, POST 요청을 할 때 페이지를 새로고침하지 않고 비동기적으로 데이터를 주고받을 수 있게 해주는 브라우저 기능이다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`$.get("URL"); // URL에 GET 요청
$.post("URL", { key : value }); // URL에 POST 요청
`}),e.jsx("p",{children:"하지만 GET 요청 시 불러온 데이터를 저장해야 사용할 수 있다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`$.get("URL").done(data => {}); // 불러온 데이터를 data에 저장
$.get("URL").then(data => {}); // 불러온 데이터를 data에 저장
$.get("URL").fail(data => {}); // 요청 실패 시 처리
$.get("URL").catch(error => {}); // 요청 실패 시 처리
`}),e.jsx("p",{children:"JavaScript로 Ajax 요청하려면 fetch 함수를 사용해야 한다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`fetch("URL") // URL에 GET 요청
  .then(res => res.json()) // 응답 데이터를 JSON으로 파싱
  .then(data => {
    console.log(data); // 데이터를 처리할 코드
  })
  .catch(error => {
    console.log(error);// 요청 실패 시 에러코드 출력
  });
`}),e.jsxs("p",{children:["여기서 데이터를 JSON으로 파싱하는 이유는 서버와 클라이언트가 데이터를 주고받을 때 문자만 사용 가능하기 때문이다.",e.jsx("br",{}),"JSON은 문자로 인식하기 때문에 데이터를 주고받을 때 주로 사용된다."]}),e.jsx("p",{children:"jQuery의 경우 JSON 자료가 도착하면 자동으로 Array나 Object로 변환해주지만, JavaScript의 fetch 함수는 res.json() 메서드를 사용하여 따로 변환해줘야 한다."})]})},Y=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),v={name:"3-8 Array 관련 함수",idx:24,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"Array 관련 함수"}),e.jsx("h3",{children:"정렬 버튼 만들기"}),e.jsxs(a,{title:"정렬 버튼 코드",children:[e.jsx(t,{filename:"3-8.html",language:"html",code:`<div class="container">
  <button class="btn btn-danger" id="more">더보기</button>
  <button class="btn btn-danger" id="sort-name">교수명 오름차순</button>
  <button class="btn btn-danger" id="reverse-letter">강의명 내림차순</button>
  <button class="btn btn-danger" id="filter">1학년</button>
</div>
`}),e.jsx("p",{children:"버튼을 누르면 강의 목록이 정렬되거나 필터링된다."})]}),e.jsx("h3",{children:".sort()"}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var arr = [value, value, value];

arr.sort(function (a, b) {
  return result // result가 음수면 그대로, 양수면 역순으로 정렬
});
`}),e.jsx("p",{children:"sort() 함수는 원본 배열을 영구적으로 변형시키기 때문에 원본을 따로 복사해서 사용하는 것이 좋다."}),e.jsx("h3",{children:".filter()"}),e.jsx("p",{children:"특정 범위의 값을 필터링하고 싶을 때 사용한다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var arr = [value, value, value];

var newArr = arr.filter(function (a) {
  return a <condition>; // 조건을 만족하는 값들로 필터링된 새 배열 반환
});
`}),e.jsx("h3",{children:".map()"}),e.jsx("p",{children:"각 요소에 같은 값을 더하고 빼고 곱하거나 나누는 등 같은 변형을 적용하고 싶을 때 사용한다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var arr = [value, value, value];

var newArr = arr.map(function (a) {
  return a <modification>; // 각 요소에 대해 수정된 값들로 새 배열 반환
});
`})]})},D=Object.freeze(Object.defineProperty({__proto__:null,default:v},Symbol.toStringTag,{value:"Module"})),j={name:"3-9 DOM 과 Load 이벤트",idx:25,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"DOM 과 Load 이벤트"}),e.jsx("h3",{children:"Document Object Model"}),e.jsxs("p",{children:["JavaScript는 HTML 문서 조작에 특화된 언어이다.",e.jsx("br",{}),"하지만 <p> 이런 식으로 HTML 태그를 직접 작성하면 알아듣지 못한다.",e.jsx("br",{}),"JavaScript가 HTML을 조작하기 위해서는 HTML을 JavaScript가 해석할 수 있는 문법으로 변환해야 한다.",e.jsx("br",{}),"그래서 브라우저는 HTML 페이지를 열 때 Object와 비슷한 자료형에 담아둔다."]}),e.jsx(t,{filename:"HTML",language:"html",code:'<div style="color : red">빨간 텍스트</div>'}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var document = {
  div : {
    style : {color : "red"},
    innerHTML : "빨간 텍스트"
  }
}`}),e.jsx("p",{children:"간단히 이런 식으로 변환한다.(실제로는 엄청 복잡하다)"}),e.jsxs(a,{title:"실제로는...",children:[e.jsx(t,{filename:"JavaScript",language:"javascript",code:`var document = {
  tagName: "DIV",
  attributes: {
    style: "color : red"
  },
  style: {
    color: "red",
    display: "block",
    // ... 다른 기본 CSS 속성
  },
  innerText: "빨간 텍스트",
  innerHTML: "빨간 텍스트",
  textContent: "빨간 텍스트",
  childNodes: [
    {
      nodeType: 3,  // TEXT_NODE
      nodeValue: "빨간 텍스트",
      textContent: "빨간 텍스트"
    }
  ],
  children: [],
  parentNode: null,
  nextSibling: null,
  previousSibling: null,
  addEventListener: function(event, callback) {},
  querySelector: function(selector) {},
  querySelectorAll: function(selector) {},
  getElementById: function(id) {},
  classList: {
    add: function(className) {},
    remove: function(className) {},
    toggle: function(className) {}
  },
  // ... 수백 개의 메서드와 프로퍼티
}`}),e.jsx("p",{children:"이런건 다 알 필요는 없으니 넘어가자."})]}),e.jsx("p",{children:"그래서 아래처럼 JavaScript를 작성하면 HTML 조작이 가능한 것이다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:'document.div.innerHTML = "새로운 텍스트";'}),e.jsxs("p",{children:["이렇게 브라우저는 HTML 파일을 위에서 아래로 한 줄 한 줄 읽으며 DOM에 추가하거나 생성된 DOM을 변경한다.",e.jsx("br",{}),"특정 HTML을 변경하기 위해서는 해당 DOM이 생성된 이후에 스크립트가 실행되어야 가능하기 때문에 HTML 파일 맨 아래에 <script> 태그를 작성하거나 defer 속성을 사용하는 것이다."]}),e.jsx("p",{children:"아니면 아래와 같이 써도 가능은 하다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`$(document).ready(function () {
  // HTML을 다 읽어들인 후 실행할 코드
});
document.addEventListener("DOMContentLoaded", function () {
  // HTML을 다 읽어들인 후 실행할 코드
});
`}),e.jsx("h3",{children:"Load 이벤트"}),e.jsx("p",{children:"load 이벤트 리스너를 사용하면 DOM 생성뿐만 아니라 이미지, CSS, JS 파일이 로드가 되었는지도 확인 가능하다."}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`image.addEventListener("load", function () {
  //이미지가 로드되면 실행할 코드 
});
`}),e.jsxs("p",{children:["이렇게 이미지가 로드된 후 무언가 실행되도록 할 수 있는데,",e.jsx("br",{}),"이 코드가 외부 JavaScript 파일 내에 있으면 이미지가 먼저 로드되는 경우가 있어 체크하지 못할 수도 있다."]}),e.jsx(t,{filename:"JavaScript",language:"javascript",code:`$(window).on("load", function () {
  //document 안의 모든 것이 로드가 되었을 경우 실행할 코드 
});

window.addEventListener("load", function () {
  //document 안의 모든 것이 로드가 되었을 경우 실행할 코드
});
`}),e.jsxs("p",{children:["window에다 붙이면 document에 포함된 이미지, CSS, JS 파일 포함 전부 로드가 되었는지 확인 가능하다.",e.jsx("br",{}),"앞서 설명했던 .ready()는 DOM 생성만 확인하는 함수이고, 이건 모든 파일과 이미지의 로드까지 확인한다는 차이가 있다."]}),e.jsx("h3",{children:"React/Vue"}),e.jsxs("p",{children:["위에서 설명했듯 JavaScript만으로는 변수가 바뀐 후 HTML에 반영하고 싶다면 변수 변경을 감지한 후 그걸 기존 HTML에 반영하라는 코드를 따로 작성해줘야 한다.",e.jsx("br",{}),"React나 Vue는 JavaScript 변수가 바뀌면 그걸 HTML에 자동으로 반영해주는 라이브러리라 더욱 편리하기 때문에 많이 사용하는 것이다."]})]})},R=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),g={name:"3-1",idx:18,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-1"}),e.jsx(t,{filename:"3-1.html",language:"html",code:`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Array / Object</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"><\/script>
    <link rel="stylesheet" href="./3-1.css" />
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ><\/script>
    <script defer src="./3-1.js"><\/script>
  </head>
  <body>
    <!-- 3-1 기본 코드 -->
    <div class="container mt-3">
      <div class="card p-3">
        <!-- Step :  -->
        <span class="name">이름</span>
        <span class="pupil">학번</span>
      </div>
    </div>
  </body>
</html>
`}),e.jsx(t,{filename:"3-1.js",language:"javascript",code:`// 3-1
// Step1 : 배열 연습
var student1 = ["홍길동", 202000001, "커뮤니케이션디자인"];
student1[0] = "강제헌";
console.log(student1[0]);

// Step2 : 객체 연습
var student2 = {
  name: "홍길동",
  pupil: 202000001,
  major: "커뮤니케이션디자인",
};
student2.name = "강제헌";
student2.pupil = 202020183;
console.log(student2["name"]);
console.log(student2.pupil);

// Step3 : 배열 + 객체 연습
var student3 = {
  name: "홍길동",
  pupil: 202000001,
  major: ["커뮤니케이션디자인", "AI영상디자인", "AR·VR미디어디자인"],
};
console.log(student2.pupil[1]);

// Step4 : student2에 저장된 이름, 학번을 HTML에 출력
// 숙제 : 스스로 해보기
$(".name").eq(0).html(student2.name);
$(".pupil").eq(0).html(student2.pupil);
`})]})},Q=Object.freeze(Object.defineProperty({__proto__:null,default:g},Symbol.toStringTag,{value:"Module"})),x={name:"3-10",idx:27,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-10"}),e.jsx(t,{filename:"3-10.html",language:"html",code:""})]})},V=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),b={name:"3-11",idx:28,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-11"}),e.jsx(t,{filename:"3-11.html",language:"html",code:""})]})},U=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"})),f={name:"3-12",idx:29,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-12"}),e.jsx(t,{filename:"3-12.html",language:"html",code:""}),e.jsx(t,{filename:"3-12.css",language:"css",code:""})]})},G=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"})),S={name:"3-13",idx:30,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-13"}),e.jsx(t,{filename:"3-13.html",language:"html",code:""}),e.jsx(t,{filename:"3-13.css",language:"css",code:""})]})},K=Object.freeze(Object.defineProperty({__proto__:null,default:S},Symbol.toStringTag,{value:"Module"})),_={name:"3-14",idx:31,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-14"}),e.jsx(t,{filename:"3-14.html",language:"html",code:""})]})},W=Object.freeze(Object.defineProperty({__proto__:null,default:_},Symbol.toStringTag,{value:"Module"})),y={name:"3-2",idx:19,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-2"}),e.jsx(t,{filename:"3-2.html",language:"html",code:`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Array / Object 2</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
      crossorigin="anonymous"
    ><\/script>
    <!-- jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ><\/script>
  </head>
  <body>
    <!-- 3-2 기본 코드 -->
    <div class="card-group container">
      <div class="card">
        <div class="card-body">
          <h5>수업명</h5>
          <p>교수 : ○○○</p>
          <button class="btn btn-danger">장바구니</button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5>수업명</h5>
          <p>교수 : ○○○</p>
          <button class="btn btn-danger">장바구니</button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5>수업명</h5>
          <p>교수 : ○○○</p>
          <button class="btn btn-danger">장바구니</button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5>수업명</h5>
          <p>교수 : ○○○</p>
          <button class="btn btn-danger">장바구니</button>
        </div>
      </div>
    </div>

    <script>
      var lectures = [
        { id: 0, professor: "방경란", title: "커뮤니케이션디자인" },
        { id: 1, professor: "유동관", title: "일러스트레이션기초" },
        { id: 2, professor: "서승연", title: "타이포그래피기초" },
        { id: 3, professor: "손우성", title: "비디오그래피" },
      ];

      // Step1 : 4개의 강의명, 교수을 HTML에 출력
      // 숙제 : 스스로 해보기
      document.querySelectorAll(".card-body h5")[0].innerHTML =
        lectures[0].title;
      document.querySelectorAll(".card-body p")[0].innerHTML =
        "교수 : " + lectures[0].professor;
      document.querySelectorAll(".card-body h5")[1].innerHTML =
        lectures[1].title;
      document.querySelectorAll(".card-body p")[1].innerHTML =
        "교수 : " + lectures[1].professor;
      document.querySelectorAll(".card-body h5")[2].innerHTML =
        lectures[2].title;
      document.querySelectorAll(".card-body p")[2].innerHTML =
        "교수 : " + lectures[2].professor;
      document.querySelectorAll(".card-body h5")[3].innerHTML =
        lectures[3].title;
      document.querySelectorAll(".card-body p")[3].innerHTML =
        "교수 : " + lectures[3].professor;

      // Step2 : for 반목문 사용여 코드 줄이기
      // 숙제 : 스스로 해보기
      for (let i = 0; i < lessons.length; i++) {
        $(".card-body > h5").eq(i).html(lessons[i].title);
        $(".card-body > p")
          .eq(i)
          .html("교수 : " + lessons[i].professor);
      }
    <\/script>
  </body>
</html>
`})]})},Z=Object.freeze(Object.defineProperty({__proto__:null,default:y},Symbol.toStringTag,{value:"Module"})),T={name:"3-3",idx:20,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-3"}),e.jsx(t,{filename:"3-3.html",language:"html",code:`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Select</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
      crossorigin="anonymous"
    ><\/script>
    <!-- jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ><\/script>
  </head>
  <body>
    <!-- 3-3 기본 코드 -->
    <form class="container my-5 form-group">
      <p>상품선택</p>
      <select class="form-select mt-2">
        <option>모자</option>
        <option>셔츠</option>
      </select>

      <!-- Step1 : 폼 하나 더 만들기 -->
      <select hidden class="form-select mt-2">
        <option>85</option>
        <option>95</option>
        <option>100</option>
        <option>105</option>
        <option>110</option>
      </select>
    </form>

    <script>
      // Step2 : 기능 구현 1(작동X)
      var value = $(".form-select").eq(0).val();
      if (value == "셔츠") {
        $(".form-select").eq(1).prop("hidden", false);
      }

      // Step3 : 기능 구현 2
      $(".form-select")
        .eq(0)
        .on("input", function () {
          var value = $(".form-select").eq(0).val();
          if (value == "셔츠") {
            $(".form-select").eq(1).prop("hidden", false);
          }
        });

      // Step4 : 변수화
      var second = $(".form-select").eq(1);

      $(".form-select")
        .eq(0)
        .on("input", function () {
          var value = $(".form-select").eq(0).val();
          if (value == "셔츠") {
            second.prop("hidden", false);
          }
          // Step5 : 모자 선택 시 숨기기
          // 숙제 : 스스로 해보기
          else {
            second.prop("hidden", true);
          }
        });
    <\/script>
  </body>
</html>
`})]})},X=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),L={name:"3-4",idx:21,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-4"}),e.jsx(t,{filename:"3-4.html",language:"html",code:`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Select 2</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
      crossorigin="anonymous"
    ><\/script>
    <!-- jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ><\/script>
  </head>
  <body>
    <!-- 3-4 기본 코드 -->
    <form class="container my-5 form-group">
      <p>상품선택</p>
      <select class="form-select mt-2">
        <option>모자</option>
        <option>셔츠</option>
        <option>바지</option>
      </select>
      <select hidden class="form-select mt-2"></select>
    </form>

    <div id="test">
      <h4>HTML 생성 예제</h4>
    </div>

    <script>
      // Step2 : 태그 생성 후 내부 내용 설정
      var a = document.createElement("p");
      a.innerHTML = "새로운 텍스트";
      document.querySelector("#test").appendChild(a);

      // Step3 : 태그와 내용 문자열을 함께 생성
      var template = "<p class = classname>새 텍스트</p>";
      document.querySelector("#test").insertAdjacentHTML("beforeend", template);
      $("#test").append(template);
    <\/script>
    <!-- Step4 : prop() 실습 -->
    <input type="checkbox" />
    <button>disabled</button>
    <input type="text" />

    <script>
      $("input").prop("checked", true);
      $("button").prop("disabled", true);
      $("input").prop("placeholder", "뭔가를 입력해주세요");

      // Step5 : 확장성 있는 폼 생성
      var second = $(".form-select").eq(1);
      var shirts = \`<option>90</option>
        <option>95</option>
        <option>100</option>
        <option>105</option>
        <option>110</option>\`;
      var pants = \`<option>28</option>
      <option>30</option>\`;

      $(".form-select")
        .eq(0)
        .on("change", function (e) {
          // input 혹은 change 시 작동
          if (this.value == "셔츠") {
            second.prop("hidden", false);
            second.html(shirts);
          } else if (this.value == "바지") {
            second.prop("hidden", false);
            second.html(pants);
          } else {
            second.prop("hidden", true);
          }
        });
    <\/script>
  </body>
</html>
`})]})},ee=Object.freeze(Object.defineProperty({__proto__:null,default:L},Symbol.toStringTag,{value:"Module"})),O={name:"3-5",idx:22,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-5"}),e.jsx(t,{filename:"3-5.html",language:"html",code:`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Select 3</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
      crossorigin="anonymous"
    ><\/script>
    <!-- jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ><\/script>
  </head>
  <body>
    <!-- 3-5 기본 코드 -->
    <form class="container my-5 form-group">
      <p>상품선택</p>
      <select class="form-select mt-2">
        <option>모자</option>
        <option>셔츠</option>
        <option>바지</option>
      </select>
      <select hidden class="form-select mt-2"></select>
    </form>

    <script>
      // Step1 : forEach 소개
      var numbers = [1, 2, 3, 4, 5];

      for (let i = 0; i < numbers.length; i++) {
        $("body").append(\`<h4>\${numbers[i]}</h4>\`);
      }

      numbers.forEach(function (a, i) {
        $("body").append(\`<h4>value:\${a}, index:\${i}</h4>\`);
      });

      // Step2 : For...in 소개
      var profile = {
        name: "강제헌",
        birth: "2001-07-16",
        school: "상명대학교",
      };

      for (var key in profile) {
        $("body").append(\`<h4>\${key}: \${profile[key]}</h4>\`);
      }

      var second = $(".form-select").eq(1);
      // Step3 : 셔츠, 바지 데이터 배열로 변환
      var shirts = [90, 95, 100, 105, 110];
      var pants = [28, 30, 32, 34];

      $(".form-select")
        .eq(0)
        .on("change", function (e) {
          if (this.value == "셔츠") {
            second.prop("hidden", false);
            second.html("");
            // Step4 : forEach 사용
            // 숙제 : 스스로 해보기
            shirts.forEach(function (a) {
              second.append(\`<option>\${a}</option>\`);
            });
          } else if (this.value == "바지") {
            second.prop("hidden", false);
            second.html("");
            // Step4 : forEach 사용
            // 숙제 : 스스로 해보기
            pants.forEach(function (a) {
              second.append(\`<option>\${a}</option>\`);
            });
          } else {
            second.prop("hidden", true);
          }
        });

      // Step5 : forEach 화살표 함수 사용
      $(".form-select")
        .eq(0)
        .on("change", function (e) {
          if (this.value == "셔츠") {
            second.prop("hidden", false);
            second.html("");
            shirts.forEach((a) => {
              second.append(\`<option>\${a}</option>\`);
            });
          } else if (this.value == "바지") {
            second.prop("hidden", false);
            second.html("");
            pants.forEach((a) => {
              second.append(\`<option>\${a}</option>\`);
            });
          } else {
            second.prop("hidden", true);
          }
        });
    <\/script>
  </body>
</html>
`})]})},te=Object.freeze(Object.defineProperty({__proto__:null,default:O},Symbol.toStringTag,{value:"Module"})),J={name:"3-6",idx:23,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-6"}),e.jsx(t,{filename:"3-6.html",language:"html",code:`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Array / For 실습</title>
  </head>
  <body>
    <p style="text-align: right">콘솔 창 실습 -></p>

    <script>
      // Q1: 출석부
      const rollBook = [
        "제헌",
        "영민",
        "현민",
        "채이",
        "지현",
        "현서",
        "수빈",
        "은별",
        "지윤",
        "시현",
      ];
      var attendance = ["제헌"];

      rollBook.forEach((name) => {
        if (attendance.includes(name)) {
          console.log(name + ": 네!");
        } else {
          console.log(name + ": ...");
        }
      });

      // Q2: 구구단
      for (var dan = 2; dan <= 9; dan++) {
        for (var x = 1; x <= 9; x++) {
          console.log(dan * x);
        }
      }

      // Q3: 평균 점수 변화 계산기
      function average(scores, newScore) {
        var sum = 0;
        scores.forEach((eachScore) => {
          sum += eachScore;
        });
        var average = sum / scores.length;
        var change = newScore - average;
        if (change > 0) {
          console.log(\`평균보다 \${change}점 올랐습니다.\`);
        } else if (change < 0) {
          console.log(\`평균보다 \${Math.abs(change)}점 내렸습니다.\`);
        } else {
          console.log("평균 점수와 같습니다.");
        }
      }

      average([10, 20, 30, 40, 50], 40);
      average([40, 40, 40], 20);
      average([40, 40, 40], 40);
    <\/script>
  </body>
</html>
`})]})},ae=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"})),w={name:"3-7",idx:24,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-7"}),e.jsx(t,{filename:"3-7.html",language:"html",code:""})]})},ne=Object.freeze(Object.defineProperty({__proto__:null,default:w},Symbol.toStringTag,{value:"Module"})),k={name:"3-8",idx:25,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-8"}),e.jsx(t,{filename:"3-8.html",language:"html",code:""})]})},se=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"})),$={name:"3-9",idx:26,level:3,content:e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"3-9"}),e.jsx(t,{filename:"3-9.html",language:"html",code:""})]})},le=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));export{Q as A,R as _,D as a,Y as b,z as c,B as d,F as e,A as f,C as g,I as h,H as i,P as j,q as k,E as l,N as m,le as n,se as o,ne as p,ae as q,te as r,ee as s,X as t,Z as u,W as v,K as w,G as x,U as y,V as z};
