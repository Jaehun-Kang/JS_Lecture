import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson5 = {
  name: "1-5 변수",
  idx: 5,
  content: (
    <div className="lesson-content">
      <h2>변수</h2>
      <h3>다크 모드 버튼 만들기</h3>
      <Foldable title="다크모드 버튼 코드">
        <CodeBlock
          filename="1-5.html"
          language="html"
          code={`<span class="badge bg-dark">Dark 🔄</span>`}
        />
        <p>버튼 누른 횟수에 따라 모드가 바뀐다.</p>
      </Foldable>
      <h3>변수</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var name = value; // name이라는 변수를 만들고 value를 저장`}
      />
      <p>
        변수는 숫자, 문자, 요소 등 거의 모든 것을 저장할 수 있는 공간이다.
        <br />
        변수를 사용하는 이유에는 크게 두 가지가 있다.
      </p>
      <p>
        1. 길고 복잡한 자료를 간단하게 표현하기 위해 <br />
        2. 같은 값을 재사용할 때 편리하게 하기 위해
      </p>
      <h3>변수 선언</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var name; // name이라는 변수 생성`}
      />
      <h3>변수 할당</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`name = value; // name 변수에 value 할당`}
      />
      <h3>변수 범위</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var name1 = value; // 전역 변수

function fName() {
  var name2 = value; // 지역 변수
  console.log(name1); //가능
  console.log(name2); //가능
}

console.log(name1); //가능
console.log(name2); //불가능
`}
      />
      <p>
        var로 선언한 변수는 함수 내에서만 유효한 지역 변수와 함수 밖에서도
        유효한 전역 변수로 나뉜다.
      </p>
      <h3>let, const</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`let name = value; // 재선언 불가능
const name = value; // 재선언, 재할당 불가능
`}
      />
      <p>
        let은 같은 이름의 변수를 만드는 것을 방지하기 위해 사용하고, const는
        값을 실수로 수정하지 않기 위해 사용한다.
      </p>
      <p>let과 const는 더 작은 범위를 가지는데, 모든 중괄호가 범위이다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`if (true) {
  let name = value;
}

console.log(name); // 불가능
`}
      />
      <h3>변수 문법 종류와 차이점</h3>
      <table className="var-table">
        <thead>
          <tr>
            <th>종류</th>
            <th>범위</th>
            <th>재선언</th>
            <th>재할당</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>var</td>
            <td>Function-scoped</td>
            <td>O</td>
            <td>O</td>
          </tr>
          <tr>
            <td>let</td>
            <td>&#123;Block-scoped&#125;</td>
            <td>X</td>
            <td>O</td>
          </tr>
          <tr>
            <td>const</td>
            <td>&#123;Block-scoped&#125;</td>
            <td>X</td>
            <td>X</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export default Lesson5;
