import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson10 = {
  name: "2-5 Return",
  idx: 10,
  content: (
    <div className="lesson-content">
      <h2>Return</h2>
      <h3>Return</h3>
      <p>return 문법은 함수에서 값을 반환할 때 사용한다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`function fName() {
  return value;
}

console.log(fName()); // value 출력
`}
      />
      <p>또한 함수 종료의 역할도 한다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`function fName() {
  // 실행 됨
  return;
  // 실행 안 됨
}
`}
      />
      <h3>반올림과 숫자 타입 변환</h3>
      <p>소수 연산은 부동 소수점 오차가 발생할 수 있다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`0.1 + 0.2 // 0.30000000000000004
0.1 + 0.2 === 0.3 // false
`}
      />
      <p>
        컴퓨터는 이진법을 사용하기 때문에 특정 소수를 이진법으로 바꿀 때 무한히
        반복되는 패턴이 발생하고,
        <br />
        무한한 소수 저장이 불가능하기 때문에 적절히 끊고 반올림하여 저장하기
        때문에 위와 같은 문제가 발생한다.
      </p>
      <p>이를 해결하려면 아래와 같이 반올림을 사용해야 한다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`(0.1 + 0.2).toFixed(1) // 소수점 1자리 반올림 '0.3'
`}
      />
      <p>toFixed()는 문자열을 반환하기 때문에 숫자 타입으로 변환이 필요하다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`parseFloat((0.1 + 0.2).toFixed(1)) // 0.3
parseInt((0.1 + 0.2).toFixed(1)) // 0
Number((0.1 + 0.2).toFixed(1)) // 0.3
`}
      />
    </div>
  ),
};

export default Lesson10;
