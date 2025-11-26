import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson4 = {
  name: "1-4 if/else function 응용",
  idx: 4,
  content: (
    <div className="lesson-content">
      <h2>if/else function 응용</h2>
      <div>
        <h3>&lt;form&gt; 만들기</h3>
        <Foldable title="폼 코드">
          <CodeBlock
            filename="1-3.html"
            language="html"
            code={`<form action="success.html">
  <div class="my-3">
    <input type="text" class="form-control">
  </div>
  <div class="my-3">
    <input type="password" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">전송</button>
  <button type="button" class="btn btn-danger" id="close">닫기</button>
</form> 
`}
          />
          <p>전송 버튼을 누르면 폼 전송이 되며 success.html로 이동한다.</p>
        </Foldable>
        <h3>if else 조건문</h3>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`if (조건) {
  // 조건이 참일 때 실행할 코드
}

if (조건) {
  // 조건이 참일 때 실행할 코드
} else {
  // 조건이 거짓일 때 실행할 코드
}`}
        />
        <h3>비교 연산자</h3>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`==, === // 값이 같음, 타입도 같음
!=, !== // 같지 않음, 타입도 다름
>, <, >=, <= // 크기 비교`}
        />
        <h3>폼 검증 함수 만들기</h3>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`$('form').on('submit', function(){
  // 폼 검증 코드 작성
});`}
        />
        <p>submit 이벤트에 대해 코드를 작성하면 된다.</p>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`document.getElementById('id').value
$('#id').val() // 요소의 값`}
        />
        <p>이렇게 하면 해당 요소의 값을 가져올 수 있다.</p>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`$('element').on('event', function(e){
  e.preventDefault() // 이벤트 동작 방지
}`}
        />
        <p>
          이건 이벤트의 기본 동작을 막는 역할을 하는데, 이벤트 리스너에 사용하면
          이벤트를 막아준다.
          <br />
          특히 폼 제출, 링크 이동, 드래그 앤 드롭 등의 기능을 조작할 때
          유용하다.
        </p>
        <h3>else if</h3>
        <CodeBlock
          filename="JavaScript"
          language="javascript"
          code={`if (조건) {
  // 조건이 참일 때 실행할 코드
} else if (조건2) {
  // 조건2가 참일 때 실행할 코드
}`}
        />
        <p>if 조건문 뒤에 원하는 만큼 추가할 수 있다.</p>
        <h3>input, change 이벤트</h3>
        <h3>Truthy와 Falsy</h3>
        <p>JavaScript에서 true/false로 평가되는 값들입니다.</p>
        <CodeBlock
          filename="script.js"
          language="javascript"
          code={`// truthy: 1, "문자", [], {}
// falsy: 0, "", null, undefined, NaN

if (input) {
  // input이 truthy면 실행
}`}
        />{" "}
      </div>
    </div>
  ),
};

export default Lesson4;
