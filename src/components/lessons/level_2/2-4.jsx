import "../../../styles/lesson.css";
import CodeBlock from "../../CodeBlock";
import Foldable from "../../Foldable";
import car1 from "../../../assets/car1.png";
import car2 from "../../../assets/car2.png";
import car3 from "../../../assets/car3.png";

const downloadAllImages = async () => {
  const images = [
    { name: "car1.png", url: car1 },
    { name: "car2.png", url: car2 },
    { name: "car3.png", url: car3 },
  ];

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    try {
      const response = await fetch(image.url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = image.name;
      link.click();

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error(`Failed to download ${image.name}:`, error);
    }

    if (i < images.length - 1) {
      await new Promise((resolve) => setTimeout(resolve, 400));
    }
  }
};

const Lesson9 = {
  name: "2-4 캐러셀",
  idx: 9,
  content: (
    <div className="lesson-content">
      <h2>캐러셀</h2>
      <h3>캐러셀 만들기</h3>
      <Foldable title="캐러셀 코드">
        <CodeBlock
          filename="2-5.html"
          language="html"
          code={`<div style="overflow: hidden">
  <div class="slide-container">
    <div class="slide-box">
      <img src="../../assets/car1.png">
    </div>
    <div class="slide-box">
      <img src="../../assets/car2.png">
    </div>
    <div class="slide-box">
      <img src="../../assets/car3.png">
    </div>
  </div>
  <button class="slide-left">&lt;</button>
  <button class="slide-1">1</button>
  <button class="slide-2">2</button>
  <button class="slide-3">3</button>
  <button class="slide-right">&gt;</button>
</div>
`}
        />
        <CodeBlock
          filename="2-5.css"
          language="css"
          code={`.slide-container {
  width: 300vw;
  transition: all 1s;
}
.slide-box {
  width: 100vw;
  float: left;
}
.slide-box img {
  width: 100%;
}
`}
        />
        <p>
          왼쪽, 1, 2, 3, 오른쪽 버튼을 누르면 애니메이션 효과와 함께 슬라이드가
          이동한다.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <h4 style={{ margin: 0 }}>첨부파일 (assets 폴더에 넣기)</h4>
            <button
              onClick={downloadAllImages}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#4675c0",
                color: "white",
                border: "none",
                borderRadius: "0.25rem",
                cursor: "pointer",
              }}
            >
              모두 다운로드
            </button>
          </div>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            <div style={{ textAlign: "center" }}>
              <img
                src={car1}
                alt="버스"
                style={{ width: "150px", marginBottom: "0.5rem" }}
              />
              <a
                href={car1}
                download="car1.png"
                style={{
                  display: "block",
                  marginTop: "0.5rem",
                  color: "#4675c0",
                }}
              >
                car1.png 다운로드
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={car2}
                alt="오토바이"
                style={{ width: "150px", marginBottom: "0.5rem" }}
              />
              <a
                href={car2}
                download="car2.png"
                style={{
                  display: "block",
                  marginTop: "0.5rem",
                  color: "#4675c0",
                }}
              >
                car2.png 다운로드
              </a>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={car3}
                alt="자동차"
                style={{ width: "150px", marginBottom: "0.5rem" }}
              />
              <a
                href={car3}
                download="car3.png"
                style={{
                  display: "block",
                  marginTop: "0.5rem",
                  color: "#4675c0",
                }}
              >
                car3.png 다운로드
              </a>
            </div>
          </div>
        </div>
      </Foldable>
      <h3>애니메이션 UI 만들기 순서</h3>
      <p>
        1. 애니메이션 시작 전 화면 HTML/CSS 구성
        <br />
        2. 애니메이션 종료 후 화면 HTML/CSS 구성
        <br />
        3. 애니메이션 시작 시점 JavaScript 구현
        <br />
        4. transition CSS 추가
      </p>
    </div>
  ),
};

export default Lesson9;
