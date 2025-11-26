import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson0 = {
  name: "3-4 Select 2",
  idx: 20,
  content: (
    <div className="lesson-content">
      <h2>Select 2</h2>
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
