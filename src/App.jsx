import { useState } from "react";
import lessons from "./components/lessons";
import LessonList from "./components/LessonList";
import "./styles/lesson.css";

function App() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const selectedLesson = lessons.find((l) => l.idx === selectedIdx);

  return (
    <div className="app">
      <header className="fixed-header">
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <img
            src={`${import.meta.env.BASE_URL}javascript.svg`}
            alt="JavaScript"
            style={{
              height: "2.25rem",
              marginRight: ".75rem",
            }}
          />
          마법연구회 JavaScript 강의
        </h1>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <LessonList
            lessons={lessons}
            onSelect={setSelectedIdx}
            selectedIdx={selectedIdx}
          />
        </aside>
        <main className="content-area">
          {selectedLesson ? (
            selectedLesson.content
          ) : (
            <h2 style={{ color: "#555" }}>단원을 선택해주세요</h2>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
