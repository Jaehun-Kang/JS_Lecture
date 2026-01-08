import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import Attachment from "../../Attachment";

const Lesson18 = {
  name: "3-2 Array/Object 응용",
  idx: 18,
  level: 3,
  content: (
    <div className="lesson-content">
      <h2>Array/Object 응용</h2>
      <h3>강의 카드 만들기</h3>
      <Foldable title="강의 카드 코드">
        <CodeBlock
          filename="3-2.html"
          language="html"
          code={`<div class="card-group container">
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
    { id : 0, professor : "방경란", title : "커뮤니케이션디자인" },
    { id : 1, professor : "유동관", title : "일러스트레이션기초" },
    { id : 2, professor : "서승연", title : "타이포그래피기초" },
    { id : 3, professor : "손우성", title : "비디오그래피" }
  ];
</script>
`}
        />
        <p>lectures 변수 안의 강의 정보가 HTML에 출력된다.</p>
      </Foldable>
      <h3>Array/Object 복합 사용</h3>
      <p>
        Array 안에 Object를 넣거나 Object 안에 Array를 넣어 복합적으로 사용할 수
        있다.
      </p>
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var arr = [{ key : value, key : value }, { key : value, key : value }];
arr[idx].key; // idx번째 객체의 key에 해당하는 값
`}
      />
      <CodeBlock
        filename="JavaScript"
        language="javascript"
        code={`var obj = { key : [value, value], key : [value, value] };
obj.key[idx]; // key에 해당하는 배열의 idx번째 값
`}
      />
    </div>
  ),
};

export default Lesson18;
