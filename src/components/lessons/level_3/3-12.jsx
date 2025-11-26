import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson0 = {
  name: "3-12 스크롤 애니메이션",
  idx: 28,
  content: (
    <div className="lesson-content">
      <h2>스크롤 애니메이션</h2>
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
