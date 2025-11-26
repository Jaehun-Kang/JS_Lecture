import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson1 = {
  name: "1-1 자바스크립트 기초",
  idx: 1,
  content: (
    <div className="lesson-content">
      <h2>자바스크립트 기초</h2>
      <h3>HTML 요소 선택하기</h3>
      <p>
        JavaScript에서 HTML 요소를 조작하려면 먼저 해당 요소를 선택해야 한다.
      </p>
      <br />
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.getElementById("id")`}
      />
      <p>ID로 요소 선택</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.getElementsByTagName("tag")`}
      />
      <p>태그명으로 요소 선택</p>

      <h3>HTML 요소 조작하기</h3>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`document.getElementById("id").innerHTML
document.getElementsByClassName("class")[0].style
document.getElementsByTagName("tag")[0].style`}
      />
    </div>
  ),
};

export default Lesson1;
