import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample18 = {
  name: "3-1",
  idx: 18,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-1</h2>
      <CodeBlock
        filename="3-1.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Array / Object</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="./3-1.css" />
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
    <script defer src="./3-1.js"></script>
  </head>
  <body>
    <!-- 3-1 기본 코드 -->
    <div class="container mt-3">
      <div class="card p-3">
        <!-- Step :  -->
        <span class="name">이름</span>
        <span class="pupil">학번</span>
      </div>
    </div>
  </body>
</html>
`}
      />
      <CodeBlock
        filename="3-1.js"
        language="javascript"
        code={`// 3-1
// Step1 : 배열 연습
var student1 = ["홍길동", 202000001, "커뮤니케이션디자인"];
student1[0] = "강제헌";
console.log(student1[0]);

// Step2 : 객체 연습
var student2 = {
  name: "홍길동",
  pupil: 202000001,
  major: "커뮤니케이션디자인",
};
student2.name = "강제헌";
student2.pupil = 202020183;
console.log(student2["name"]);
console.log(student2.pupil);

// Step3 : 배열 + 객체 연습
var student3 = {
  name: "홍길동",
  pupil: 202000001,
  major: ["커뮤니케이션디자인", "AI영상디자인", "AR·VR미디어디자인"],
};
console.log(student2.pupil[1]);

// Step4 : student2에 저장된 이름, 학번을 HTML에 출력
// 숙제 : 스스로 해보기
$(".name").eq(0).html(student2.name);
$(".pupil").eq(0).html(student2.pupil);
`}
      />
    </div>
  ),
};

export default Sample18;
