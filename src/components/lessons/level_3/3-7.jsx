import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";

const Lesson22 = {
  name: "3-7 Ajax",
  idx: 22,
  content: (
    <div className="lesson-content">
      <h2>Ajax</h2>
      <h3>강의 목록 만들기</h3>
      <Foldable title="강의 목록 코드">
        <CodeBlock
          filename="3-7.html"
          language="html"
          code={`<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <h5>Card title</h5>
      <p>교수명 : ○○○</p>
    </div>
  </div>
  <button class="btn btn-danger" id="more">더보기</button>
</div>
`}
        />
        <CodeBlock
          filename="URL"
          language="javascript"
          code={`"https://jaehun-kang.github.io/JS_Lecture/lectures.json"
"https://jaehun-kang.github.io/JS_Lecture/more1.json"
"https://jaehun-kang.github.io/JS_Lecture/more2.json"
`}
        />
        <p>
          lectures 배열 데이터를 사용하여 각 강의 카드 레이아웃이 생성된다.
          <br />더 보기 버튼을 누르면 추가로 생성된다.
        </p>
      </Foldable>
      <h3>서버</h3>
      <p>
        서버는 유저가 데이터 요청을 하면 데이터를 보내주거나 DB에 저장하는
        프로그램이다.
        <br />
        예를 들어, 웹사이트에 접속하면 서버가 HTML, CSS, JS 파일을 유저에게
        보내주고,회원가입을 할 때는 입력한 정보를 서버가 받아서 DB에 저장한다.
        <br />
        서버에 데이터를 요청할 때는 어떤 url인지 잘 기재하고 어떤 방식(GET/POST
        등)으로 요청할지 결정해야 한다.
      </p>
      <h3>GET/POST 요청</h3>
      <p>
        GET 요청은 서버에 있던 데이터를 읽고 싶을 때, POST 요청은 서버에
        데이터를 보낼 때 주로 사용한다.
      </p>
      <p>
        GET 요청을 보내는 가장 간단한 방법은 브라우저 주소창에 URL을 입력하는
        것이고,
        <br />
        POST 요청은 &lt;form&gt; 태그를 사용하여 가능하다.
      </p>
      <CodeBlock
        filename="HTML"
        language="html"
        code={`<form action="URL" method="post">`}
      />
      <p>하지만 이 방법은 페이지가 새로고침된다는 단점이 있다.</p>
      <h3>Ajax</h3>
      <p>
        Ajax는 서버에 GET, POST 요청을 할 때 페이지를 새로고침하지 않고
        비동기적으로 데이터를 주고받을 수 있게 해주는 브라우저 기능이다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$.get("URL"); // URL에 GET 요청
$.post("URL", { key : value }); // URL에 POST 요청
`}
      />
      <p>하지만 GET 요청 시 불러온 데이터를 저장해야 사용할 수 있다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`$.get("URL").done(data => {}); // 불러온 데이터를 data에 저장
$.get("URL").then(data => {}); // 불러온 데이터를 data에 저장
$.get("URL").fail(data => {}); // 요청 실패 시 처리
$.get("URL").catch(error => {}); // 요청 실패 시 처리
`}
      />
      <p>JavaScript로 Ajax 요청하려면 fetch 함수를 사용해야 한다.</p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`fetch("URL") // URL에 GET 요청
  .then(res => res.json()) // 응답 데이터를 JSON으로 파싱
  .then(data => {
    console.log(data); // 데이터를 처리할 코드
  })
  .catch(error => {
    console.log(error);// 요청 실패 시 에러코드 출력
  });
`}
      />
      <p>
        여기서 데이터를 JSON으로 파싱하는 이유는 서버와 클라이언트가 데이터를
        주고받을 때 문자만 사용 가능하기 때문이다.
        <br />
        JSON은 문자로 인식하기 때문에 데이터를 주고받을 때 주로 사용된다.
      </p>
      <p>
        jQuery의 경우 JSON 자료가 도착하면 자동으로 Array나 Object로
        변환해주지만, JavaScript의 fetch 함수는 res.json() 메서드를 사용하여
        따로 변환해줘야 한다.
      </p>
    </div>
  ),
};

export default Lesson22;
