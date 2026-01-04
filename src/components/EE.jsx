import { useState, useEffect } from "react";

export default function EasterEgg() {
  const [logoClicks, setLogoClicks] = useState(0);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isBurning, setIsBurning] = useState(false);
  const [isDeactivated, setIsDeactivated] = useState(false);
  const [messages, setMessages] = useState([]);
  const [particles, setParticles] = useState([]);
  const [deactivatedClicks, setDeactivatedClicks] = useState(0);
  const [nextMessageThreshold, setNextMessageThreshold] = useState(
    Math.floor(Math.random() * 3) + 3
  );
  const [lastMessage, setLastMessage] = useState(null);

  const messageTexts = [
    "어렵겠지만 다들 화이팅!!",
    "모르는거 많이 질문해주세요~",
    "잘 들어줘서 감사합니다...",
    "가즈아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ",
  ];

  const getRandomMessage = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * messageTexts.length);
    } while (
      messageTexts[randomIndex] === lastMessage &&
      messageTexts.length > 1
    );
    return messageTexts[randomIndex];
  };

  const handleLogoClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 100);

    if (isDeactivated) {
      const newDeactivatedClicks = deactivatedClicks + 1;
      setDeactivatedClicks(newDeactivatedClicks);

      if (newDeactivatedClicks >= nextMessageThreshold) {
        const msgId = Date.now();
        const msgText = getRandomMessage();
        setLastMessage(msgText);
        setMessages((prev) => [...prev, { id: msgId, text: msgText }]);
        setTimeout(() => {
          setMessages((prev) => prev.filter((msg) => msg.id !== msgId));
        }, 2000);
        setDeactivatedClicks(0);
        setNextMessageThreshold(Math.floor(Math.random() * 3) + 3);
      }
      return;
    }

    const newClicks = logoClicks + 1;
    setLogoClicks(newClicks);

    if (newClicks >= 50) {
      setIsDeactivated(true);
      const msgId = Date.now();
      const msgText = getRandomMessage();
      setMessages((prev) => [...prev, { id: msgId, text: msgText }]);
      setTimeout(() => {
        setMessages((prev) => prev.filter((msg) => msg.id !== msgId));
      }, 2000);
      return;
    }

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

    if (isGlowing && newClicks >= 25) {
      setIsBurning(true);
      return;
    }

    if (newClicks >= 15) {
      setIsGlowing(true);
    }
  };

  const createParticles = () => {
    if (!isBurning || isDeactivated) return;

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

  useEffect(() => {
    if (!isBurning || isDeactivated) {
      return;
    }

    const interval = setInterval(createParticles, 800);
    return () => clearInterval(interval);
  }, [isBurning, isDeactivated]);

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
          animation: isShaking
            ? "shake 0.1s"
            : isDeactivated
            ? "none"
            : isBurning
            ? "fireRainbow 0.6s infinite"
            : isGlowing
            ? "rainbowFilter 0.6s infinite"
            : "none",
          transformOrigin: "center",
          userSelect: "none",
          filter: isDeactivated ? "grayscale(1) brightness(0.58)" : "none",
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
      {messages.map((msg) => (
        <div key={msg.id} className="message-tooltip">
          {msg.text}
        </div>
      ))}
    </div>
  );
}
