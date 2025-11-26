import FoldableSection from "./Foldable";

const LessonList = ({ lessons, onSelect, selectedIdx }) => {
  const level1 = lessons.filter((lesson) => lesson.idx >= 1 && lesson.idx <= 5);
  const level2 = lessons.filter(
    (lesson) => lesson.idx >= 6 && lesson.idx <= 16
  );
  const level3 = lessons.filter(
    (lesson) => lesson.idx >= 17 && lesson.idx <= 30
  );

  return (
    <ul className="lesson-list">
      {level1.length > 0 && (
        <li key="level-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <FoldableSection title="Level 1" defaultOpen={false}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {level1.map((lesson) => (
                <li
                  key={lesson.idx}
                  className={selectedIdx === lesson.idx ? "selected" : ""}
                  onClick={() => onSelect(lesson.idx)}
                  style={{ paddingLeft: "1.5rem" }}
                >
                  {lesson.name}
                </li>
              ))}
            </ul>
          </FoldableSection>
        </li>
      )}
      {level2.length > 0 && (
        <li key="level-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <FoldableSection title="Level 2" defaultOpen={false}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {level2.map((lesson) => (
                <li
                  key={lesson.idx}
                  className={selectedIdx === lesson.idx ? "selected" : ""}
                  onClick={() => onSelect(lesson.idx)}
                  style={{ paddingLeft: "1.5rem" }}
                >
                  {lesson.name}
                </li>
              ))}
            </ul>
          </FoldableSection>
        </li>
      )}
      {level3.length > 0 && (
        <li key="level-3" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <FoldableSection title="Level 3" defaultOpen={false}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {level3.map((lesson) => (
                <li
                  key={lesson.idx}
                  className={selectedIdx === lesson.idx ? "selected" : ""}
                  onClick={() => onSelect(lesson.idx)}
                  style={{ paddingLeft: "1.5rem" }}
                >
                  {lesson.name}
                </li>
              ))}
            </ul>
          </FoldableSection>
        </li>
      )}
    </ul>
  );
};

export default LessonList;
