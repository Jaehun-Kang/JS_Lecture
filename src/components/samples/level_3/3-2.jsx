import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample19 = {
  name: "3-2",
  idx: 19,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-2</h2>
      <CodeBlock
        filename="3-2.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Array / Object 2</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
      crossorigin="anonymous"
    ></script>
    <!-- jQuery -->
    <script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <!-- 3-2 기본 코드 -->
    <div class="card-group container">
      <div class="card">
        <div class="card-body">
          <h5>수업명</h5>
          <p>교수 : ○○○</p>
          <button class="btn btn-danger">장바구니</button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5>수업명</h5>
          <p>교수 : ○○○</p>
          <button class="btn btn-danger">장바구니</button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5>수업명</h5>
          <p>교수 : ○○○</p>
          <button class="btn btn-danger">장바구니</button>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5>수업명</h5>
          <p>교수 : ○○○</p>
          <button class="btn btn-danger">장바구니</button>
        </div>
      </div>
    </div>

    <script>
      var lectures = [
        { id: 0, professor: "방경란", title: "커뮤니케이션디자인" },
        { id: 1, professor: "유동관", title: "일러스트레이션기초" },
        { id: 2, professor: "서승연", title: "타이포그래피기초" },
        { id: 3, professor: "손우성", title: "비디오그래피" },
      ];

      // Step1 : 4개의 강의명, 교수을 HTML에 출력
      // 숙제 : 스스로 해보기
      document.querySelectorAll(".card-body h5")[0].innerHTML =
        lectures[0].title;
      document.querySelectorAll(".card-body p")[0].innerHTML =
        "교수 : " + lectures[0].professor;
      document.querySelectorAll(".card-body h5")[1].innerHTML =
        lectures[1].title;
      document.querySelectorAll(".card-body p")[1].innerHTML =
        "교수 : " + lectures[1].professor;
      document.querySelectorAll(".card-body h5")[2].innerHTML =
        lectures[2].title;
      document.querySelectorAll(".card-body p")[2].innerHTML =
        "교수 : " + lectures[2].professor;
      document.querySelectorAll(".card-body h5")[3].innerHTML =
        lectures[3].title;
      document.querySelectorAll(".card-body p")[3].innerHTML =
        "교수 : " + lectures[3].professor;

      // Step2 : for 반목문 사용여 코드 줄이기
      // 숙제 : 스스로 해보기
      for (let i = 0; i < lessons.length; i++) {
        $(".card-body > h5").eq(i).html(lessons[i].title);
        $(".card-body > p")
          .eq(i)
          .html("교수 : " + lessons[i].professor);
      }
    </script>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample19;
