import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson23 = {
  name: "3-8 Array 관련 함수",
  idx: 23,
  content: (
    <div className="lesson-content">
      <h2>Array 관련 함수</h2>
      <h3>정렬 버튼 만들기</h3>
      <Foldable title="정렬 버튼 코드">
        <CodeBlock
          filename="3-8.html"
          language="html"
          code={`<div class="container">
  <button class="btn btn-danger" id="more">더보기</button>
  <button class="btn btn-danger" id="sort-name">교수명 오름차순</button>
  <button class="btn btn-danger" id="reverse-letter">강의명 내림차순</button>
  <button class="btn btn-danger" id="filter">1학년</button>
</div>
`}
        />
        <p>버튼을 누르면 강의 목록이 정렬되거나 필터링된다.</p>
      </Foldable>
      <h3>.sort()</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var arr = [value, value, value];

arr.sort(function (a, b) {
  return result // result가 음수면 그대로, 양수면 역순으로 정렬
});
`}
      />
      <p>
        sort() 함수는 원본 배열을 영구적으로 변형시키기 때문에 원본을 따로
        복사해서 사용하는 것이 좋다.
      </p>
      <h3>.filter()</h3>
      <p>특정 범위의 값을 필터링하고 싶을 때 사용한다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var arr = [value, value, value];

var newArr = arr.filter(function (a) {
  return a <condition>; // 조건을 만족하는 값들로 필터링된 새 배열 반환
});
`}
      />
      <h3>.map()</h3>
      <p>
        각 요소에 같은 값을 더하고 빼고 곱하거나 나누는 등 같은 변형을 적용하고
        싶을 때 사용한다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var arr = [value, value, value];

var newArr = arr.map(function (a) {
  return a <modification>; // 각 요소에 대해 수정된 값들로 새 배열 반환
});
`}
      />
    </div>
  ),
};

export default Lesson23;
