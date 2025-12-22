import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson7 = {
  name: "2-2 setTimeout/Interval",
  idx: 7,
  content: (
    <div className="lesson-content">
      <h2>setTimeout/Interval</h2>
      <h3>안내창 만들기</h3>
      <Foldable title="안내창 코드">
        <CodeBlock
          filename="2-2.html"
          language="html"
          code={`<div class="alert alert-danger">5초 이내 구매시 사은품 증정</div>`}
        />
        <p>5초 후 안내창이 사라진다.</p>
      </Foldable>
      <h3>setTimeout</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`setTimeout(function () {
  // num 밀리초 후 실행할 코드
}, num);
`}
      />
      <h3>setInterval</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`setInterval(function () {
  // num 밀리초마다 실행할 코드
}, num);
`}
      />
      <h3>JavaScript 문법 vs 브라우저 기능</h3>
      <p>아래는 자바스크립트 프로그래밍 문법이다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var name;
let name;
const name;
if () {}
function () {}
`}
      />
      <p>아래는 웹 브라우저에서 제공하는 브라우저 기능 사용법이다.</p>
      <CodeBlock
        filename="browser APIs"
        language="javascript"
        code={`document.querySelector()
alert()
setTimeout()
addEventListener()
`}
      />
      <p>그래서 우리는 웹 브라우저 기능을 가지고 코드를 작성하고, 코드를 줄이고 싶으면 자바스크립트 문법을 사용하여 코드를 짜는 것이다.</p>
    </div>
  ),
};

export default Lesson7;
