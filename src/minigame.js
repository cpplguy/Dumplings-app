//Minigame
import React, { useState, useEffect, useRef, Fragment } from "react";
export function Minigame() {
  const [dumplingCircles, setDumplingCircles] = useState([]);
  const boundaries = useRef(null);
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score")) || 0
  );
  const [gameStarted, setGameStarted] = useState(false);
  useEffect(() => {
    if (gameStarted === false) return;
    const container = boundaries.current.getBoundingClientRect();
    const gameWidth = container.width;
    const gameHeight = container.height;
    const circleSize = (window.innerWidth / 100) * 2;
    const interval = setInterval(() => {
      const x = Math.random() * (gameWidth - circleSize);
      const y = Math.random() * (gameHeight - circleSize);
      const randColor1 = ` ${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      }`;
      const randColor2 = Math.random() > 0.5 ? "salmon" : "orange";
      setDumplingCircles((prev) => [
        ...prev,
        {
          x: x,
          y: y,
          borderColor: `0.25vw solid rgb(${randColor1})`,
          backgroundColor: randColor2,
        },
      ]);
    }, Math.random() * 200 + 200);
    return () => clearInterval(interval);
  }, [gameStarted]);
  useEffect(() => {
    if (score === 1000) {
      alert("Congratulations on getting 1000 dumplings!!!");
    }
    if (score === 10000) {
      alert("bro how did u get 10k");
    }
    if (score === 100000) {
      alert("You are cheating");
    }
  }, [score]);
  const clickHandler = (idx) => {
    setScore((prev) => {
      const newScore = prev + 1;
      localStorage.setItem("score", newScore);
      return newScore;
    });
    setDumplingCircles((prev) => prev.filter((_, i) => i !== idx));
  };
  const clickHandler2 = () => {
    setGameStarted(true);
  };
  const clickHandler3 = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to reset everything?")) {
      localStorage.clear();
      setDumplingCircles([]);
      setScore(0);
    }
  };
  return (
    <Fragment>
      <div
        id="minigame"
        ref={boundaries}
        onClick={clickHandler2}
        data-aos="slide-up"
      >
        <h1 id="game-heading" style={{ display: gameStarted ? "none" : "" }}>
          Click to start the game!
        </h1>
        {gameStarted &&
          dumplingCircles.map((circles, idx) => (
            <div
              key={idx}
              value={idx}
              onMouseEnter={() => {
                clickHandler(idx);
                new window.Audio(Math.random() > 0.5 ? "/happy-pop-2-185287.mp3": "/pop-331049.mp3").play();
              }}
              className="dumpling-circle"
              style={{
                left: `${circles.x}px`,
                top: `${circles.y}px`,
                border: circles.borderColor,
                backgroundColor: circles.backgroundColor,
              }}
            >
              🥟
            </div>
          ))}
      </div>
      <section id="minigame-misc">
        <h2 id="score">
          Total Dumplings Consumed: <b> {score}</b>
        </h2>
        <button id="reset" onClick={() => clickHandler3()}>
          Reset Score
        </button>
      </section>
    </Fragment>
  );
}
