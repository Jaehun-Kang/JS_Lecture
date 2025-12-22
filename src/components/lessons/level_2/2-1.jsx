import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson6 = {
  name: "2-1 연산 응용",
  idx: 6,
  content: (
    <div className="lesson-content">
      <h2>연산 응용</h2>
      <h3>축약형 연산자</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`num = num + 1; // 덧셈
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
`}
      />
      <p>축약형 연산자를 사용하면 연산과 할당을 동시에 할 수 있다.</p>
    </div>
  ),
};

export default Lesson6;
