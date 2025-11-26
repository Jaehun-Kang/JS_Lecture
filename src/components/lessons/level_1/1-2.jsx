import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson2 = {
  name: "1-2 동적 UI",
  idx: 2,
  content: (
    <div className="lesson-content">
      <h2>동적 UI</h2>
      <h3>이벤트 리스너와 콜백함수</h3>
      <p>
        사용자와의 상호작용(클릭, 입력 등)에 반응하기 위해 이벤트 리스너와
        콜백함수를 사용한다.
      </p>
      <h3>.addEventListener( )</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`요소.addEventListener("event", function () {
  // 이벤트 발생 시 실행할 코드
})`}
      />
      <p>특정 요소에 이벤트 리스너 등록</p>
      <h3>콜백함수</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`function () {}`}
      />
      <p>
        이름이 없는 함수로, 코드를 순차적으로 실행할 때 사용. 별도로 호출하지
        않아도 이벤트가 발생하면 자동으로 실행된다.
      </p>
      <h3>Bootstrap 설치</h3>
      <p>Bootstrap 라이브러리를 사용하여 빠르게 스타일과 기능을 구현해보자.</p>
      <Foldable title="Bootstrap 라이브러리">
        <CodeBlock
          filename="CDN"
          language="html"
          code={`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
`}
        />
      </Foldable>
      <h3>querySelector</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.querySelector('#id') // 아이디 요소 선택
document.querySelector('.class') // 클래스 중 첫번째 요소 선택
document.querySelectorAll('.class') // 클래스 모든 요소 선택`}
      />
      <p>
        getElementById() 나 getElementsByClassName() 대신 사용할 수 있는
        셀렉터도 있다.
        <br />
        아이디나 클래스를 지정해주지 않아도 선택할 수 있어 편리하다.
      </p>
      <p>대신 아이디는 #, 클래스는 .을 붙여줘야 한다.</p>
      <h3>서브메뉴 만들기</h3>
      <Foldable title="상단 메뉴 코드">
        <CodeBlock
          filename="1-3.html"
          language="html"
          code={`<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand">Navbar</span>
    <button class="navbar-toggler" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav> `}
        />
      </Foldable>
      <Foldable title="서브 메뉴 코드">
        <CodeBlock
          filename="1-3.html"
          language="html"
          code={`<ul class="list-group">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul> `}
        />
      </Foldable>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.querySelector(".class").addEventListener("click", function () {
  document.querySelectorAll(".class")[0].classList.toggle("class");
});`}
      />
      <p>
        클릭 이벤트 리스너에 클래스 토글을 넣어 서브메뉴를 보이거나 숨길 수
        있다.
        <br />
        클래스명이 있으면 제거하고, 없으면 추가한다.
      </p>
    </div>
  ),
};

export default Lesson2;
