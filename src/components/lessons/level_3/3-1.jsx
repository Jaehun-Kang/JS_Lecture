import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson17 = {
  name: "3-1 Array/Object",
  idx: 17,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>Array/Object</h2>
      <h3>학생 카드 만들기</h3>
      <Foldable title="학생 카드 코드">
        <CodeBlock
          filename="3-1.html"
          language="html"
          code={`<div class="container mt-3">
  <div class="card p-3">
    <span>이름</span>
    <span>학번</span>
  </div>
</div>
`}
        />
        <p>학생 카드의 이름과 학번 부분에 학생 데이터를 불러와 대체한다.</p>
      </Foldable>
      <h3>Array 자료형</h3>
      <p>
        배열은 순서 개념이 있는 자료형으로, 배열 관련 함수로 순서를 변경하거나
        자료 조작이 가능하다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var arr = [value, value, value];`}
      />
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`arr[idx]; // idx번째 값
arr[idx] = newValue; // idx번째 값을 newValue로 변경

arr.sort(); // 배열 가나다순 정렬
arr.slice(startIdx, endIdx); // startIdx부터 endIdx 전까지 잘라내기
arr.push(value); // 배열 끝에 value 추가
`}
      />
      <p>
        배열은은 이름, 학번, 전공 등 여러 자료들 중 한 가지 자료에 대한 값들을
        한 곳에 저장할 때 사용하면 좋다.
      </p>
      <h3>Object 자료형</h3>
      <p>
        객체는 키-값 쌍으로 데이터를 저장하는 자료형으로, 키를 지정해야 값을
        조회하거나 변경할 수 있다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var obj = { key : value, key : value };`}
      />
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`obj[key]; // key에 해당하는 value
obj[key] = newValue; // key에 해당하는 값을 newValue로 변경`}
      />
      <p>
        객체는 한 사람의 이름, 학번, 전공 등 여러 가지 자료를 한 곳에 묶어
        저장할 때 사용하면 좋다.
      </p>
    </div>
  ),
};

export default Lesson17;
