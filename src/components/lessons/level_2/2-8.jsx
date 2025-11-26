import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson13 = {
  name: "2-8 탭메뉴",
  idx: 13,
  content: (
    <div className="lesson-content">
      <h2>탭메뉴</h2>
      <p>내용</p>
      <CodeBlock filename="MyComponent.jsx" language="jsx" code={`code`} />
      <Foldable title="폴더제목">
        <p>내용</p>
        <CodeBlock filename="MyComponent.jsx" language="jsx" code={`code`} />
      </Foldable>
    </div>
  ),
};

export default Lesson13;
