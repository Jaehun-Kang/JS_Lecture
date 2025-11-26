import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson0 = {
  name: "3-6 Array / For 실습",
  idx: 22,
  content: (
    <div className="lesson-content">
      <h2>Array / For 실습</h2>
      <p>내용</p>
      <CodeBlock filename="MyComponent.jsx" language="jsx" code={`code`} />
      <Foldable title="폴더제목">
        <p>내용</p>
        <CodeBlock filename="MyComponent.jsx" language="jsx" code={`code`} />
      </Foldable>
    </div>
  ),
};

export default Lesson0;
