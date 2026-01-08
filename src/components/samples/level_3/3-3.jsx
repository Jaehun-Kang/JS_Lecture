import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";

const Sample20 = {
  name: "3-3",
  idx: 20,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>3-3</h2>
      <CodeBlock
        filename="3-3.html"
        language="html"
        code={`<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Select</title>
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
    <!-- 3-3 기본 코드 -->
    <form class="container my-5 form-group">
      <p>상품선택</p>
      <select class="form-select mt-2">
        <option>모자</option>
        <option>셔츠</option>
      </select>

      <!-- Step1 : 폼 하나 더 만들기 -->
      <select hidden class="form-select mt-2">
        <option>85</option>
        <option>95</option>
        <option>100</option>
        <option>105</option>
        <option>110</option>
      </select>
    </form>

    <script>
      // Step2 : 기능 구현 1(작동X)
      var value = $(".form-select").eq(0).val();
      if (value == "셔츠") {
        $(".form-select").eq(1).prop("hidden", false);
      }

      // Step3 : 기능 구현 2
      $(".form-select")
        .eq(0)
        .on("input", function () {
          var value = $(".form-select").eq(0).val();
          if (value == "셔츠") {
            $(".form-select").eq(1).prop("hidden", false);
          }
        });

      // Step4 : 변수화
      var second = $(".form-select").eq(1);

      $(".form-select")
        .eq(0)
        .on("input", function () {
          var value = $(".form-select").eq(0).val();
          if (value == "셔츠") {
            second.prop("hidden", false);
          }
          // Step5 : 모자 선택 시 숨기기
          // 숙제 : 스스로 해보기
          else {
            second.prop("hidden", true);
          }
        });
    </script>
  </body>
</html>
`}
      />
    </div>
  ),
};

export default Sample20;
