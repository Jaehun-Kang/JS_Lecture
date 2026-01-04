import { useState, useEffect } from "react";

export default function EasterEgg() {
  const [logoClicks, setLogoClicks] = useState(0);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isBurning, setIsBurning] = useState(false);
  const [isDeactivated, setIsDeactivated] = useState(false);
  const [particles, setParticles] = useState([]);

  const handleLogoClick = () => {
    if (isDeactivated) return;

    const newClicks = logoClicks + 1;
    // console.log(`클릭: ${newClicks}`);
    setLogoClicks(newClicks);

    // 100번 클릭하면 회색빛으로 변경
    if (newClicks >= 60) {
      setIsDeactivated(true);
      setIsGlowing(false);
      setIsBurning(false);
      return;
    }

    // 흔들기 효과
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 100);

    // 클릭 시 많은 파티클 생성
    if (isBurning) {
      const now = Date.now();
      const burstParticles = Array.from({ length: 5 }).map((_, i) => ({
        id: `burst-${now}-${i}`,
        delay: Math.random() * 0.1 - 0.1,
        left: Math.random() * 40 - 24,
        top: Math.random() * 40 - 20,
        duration: 2.5 + Math.random() * 1,
      }));

      setParticles((prev) => [...prev, ...burstParticles]);
    }

    // 불 붙은 상태로
    if (isGlowing && newClicks >= 25) {
      setIsBurning(true);
      return;
    }

    // 무지개 발광 효과 시작
    if (newClicks >= 15) {
      setIsGlowing(true);
    }
  };

  // 파티클 생성 (onAnimationEnd 이벤트로 정리됨)
  const createParticles = () => {
    if (!isBurning) return;

    const now = Date.now();
    const newParticles = Array.from({ length: 2 }).map((_, i) => ({
      id: `${now}-${i}`,
      delay: Math.random() * 0.2 - 0.2,
      left: Math.random() * 36 - 18,
      top: Math.random() * 36 - 18,
      duration: 2.5 + Math.random() * 1,
    }));

    setParticles((prev) => [...prev, ...newParticles]);
  };

  // isBurning 상태일 때 계속 파티클 생성
  useEffect(() => {
    if (!isBurning) {
      setParticles([]);
      return;
    }

    const interval = setInterval(createParticles, 800);
    return () => clearInterval(interval);
  }, [isBurning]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}javascript.svg`}
        alt="JavaScript"
        onClick={handleLogoClick}
        draggable={false}
        style={{
          height: "2.25rem",
          marginRight: ".75rem",
          cursor: isDeactivated ? "default" : "pointer",
          transition: isShaking ? "none" : "filter 0.3s ease-out",
          animation: isDeactivated
            ? "none"
            : isShaking
            ? "shake 0.1s"
            : isBurning
            ? "fireRainbow 0.6s infinite"
            : isGlowing
            ? "rainbowFilter 0.6s infinite"
            : "none",
          transformOrigin: "center",
          userSelect: "none",
          filter: isDeactivated ? "grayscale(1)" : "none",
        }}
      />
      {isBurning && (
        <div
          style={{
            position: "absolute",
            top: "1.125rem",
            left: "1.125rem",
            transform: "translate(-50%, -50%)",
            width: "36px",
            height: "36px",
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {particles.map((particle) => {
            return (
              <div
                key={particle.id}
                className="fire-particle"
                style={{
                  "--delay": `${particle.delay}s`,
                  "--left": `${particle.left}px`,
                  "--top": `${particle.top}px`,
                  "--duration": `${particle.duration}s`,
                }}
                onAnimationEnd={() => {
                  setParticles((prev) =>
                    prev.filter((p) => p.id !== particle.id)
                  );
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
