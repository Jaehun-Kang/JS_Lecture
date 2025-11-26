import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson19 = {
  name: "3-3 Select",
  idx: 19,
  content: (
    <div className="lesson-content">
      <h2>Select</h2>
      <p>내용</p>
      <CodeBlock filename="MyComponent.jsx" language="jsx" code={`code`} />
      <Foldable title="폴더제목">
        <p>내용</p>
        <CodeBlock filename="MyComponent.jsx" language="jsx" code={`code`} />
      </Foldable>
    </div>
  ),
};

export default Lesson19;
