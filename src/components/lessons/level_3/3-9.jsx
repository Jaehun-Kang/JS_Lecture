import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson24 = {
  name: "3-9 DOM 과 Load 이벤트",
  idx: 24,
  content: (
    <div className="lesson-content">
      <h2>DOM 과 Load 이벤트</h2>
      <h3>Document Object Model</h3>
      <p>
        JavaScript는 HTML 문서 조작에 특화된 언어이다.
        <br />
        하지만 &lt;p&gt; 이런 식으로 HTML 태그를 직접 작성하면 알아듣지 못한다.
        <br />
        JavaScript가 HTML을 조작하기 위해서는 HTML을 JavaScript가 해석할 수 있는
        문법으로 변환해야 한다.
        <br />
        그래서 브라우저는 HTML 페이지를 열 때 Object와 비슷한 자료형에 담아둔다.
      </p>
      <CodeBlock
        filename="HTML"
        language="html"
        code={`<div style="color : red">빨간 텍스트</div>`}
      />
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var document = {
  div : {
    style : {color : "red"},
    innerHTML : "빨간 텍스트"
  }
}`}
      />
      <p>간단히 이런 식으로 변환한다.(실제로는 엄청 복잡하다)</p>
      <Foldable title="실제로는...">
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`var document = {
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
}`}
        />
        <p>이런건 다 알 필요는 없으니 넘어가자.</p>
      </Foldable>
      <p>그래서 아래처럼 JavaScript를 작성하면 HTML 조작이 가능한 것이다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.div.innerHTML = "새로운 텍스트";`}
      />
      <p>
        이렇게 브라우저는 HTML 파일을 위에서 아래로 한 줄 한 줄 읽으며 DOM에
        추가하거나 생성된 DOM을 변경한다.
        <br />
        특정 HTML을 변경하기 위해서는 해당 DOM이 생성된 이후에 스크립트가
        실행되어야 가능하기 때문에 HTML 파일 맨 아래에 &lt;script&gt; 태그를
        작성하거나 defer 속성을 사용하는 것이다.
      </p>
      <p>아니면 아래와 같이 써도 가능은 하다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$(document).ready(function () {
  // HTML을 다 읽어들인 후 실행할 코드
});
document.addEventListener("DOMContentLoaded", function () {
  // HTML을 다 읽어들인 후 실행할 코드
});
`}
      />
      <h3>Load 이벤트</h3>
      <p>
        load 이벤트 리스너를 사용하면 DOM 생성뿐만 아니라 이미지, CSS, JS 파일이
        로드가 되었는지도 확인 가능하다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`image.addEventListener("load", function () {
  //이미지가 로드되면 실행할 코드 
});
`}
      />
      <p>
        이렇게 이미지가 로드된 후 무언가 실행되도록 할 수 있는데,
        <br />이 코드가 외부 JavaScript 파일 내에 있으면 이미지가 먼저 로드되는
        경우가 있어 체크하지 못할 수도 있다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$(window).on("load", function () {
  //document 안의 모든 것이 로드가 되었을 경우 실행할 코드 
});

window.addEventListener("load", function () {
  //document 안의 모든 것이 로드가 되었을 경우 실행할 코드
});
`}
      />
      <p>
        window에다 붙이면 document에 포함된 이미지, CSS, JS 파일 포함 전부
        로드가 되었는지 확인 가능하다.
        <br />
        앞서 설명했던 .ready()는 DOM 생성만 확인하는 함수이고, 이건 모든 파일과
        이미지의 로드까지 확인한다는 차이가 있다.
      </p>
      <h3>React/Vue</h3>
      <p>
        위에서 설명했듯 JavaScript만으로는 변수가 바뀐 후 HTML에 반영하고 싶다면
        변수 변경을 감지한 후 그걸 기존 HTML에 반영하라는 코드를 따로 작성해줘야
        한다.
        <br />
        React나 Vue는 JavaScript 변수가 바뀌면 그걸 HTML에 자동으로 반영해주는
        라이브러리라 더욱 편리하기 때문에 많이 사용하는 것이다.
      </p>
    </div>
  ),
};

export default Lesson24;
