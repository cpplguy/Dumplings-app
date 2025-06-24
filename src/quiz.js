import React, { useState, useEffect, useRef } from "react";
import Section from "./section.js";
import img5 from "./Blog_Quiz_Cover-01.png";
export default function Quiz() {
  const [option, selectOption] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsFinished, setQuestionsFinished] = useState(false);
  useEffect(() => {
    selectOption("");
  }, [currentQuestion]);
  const selectQuestion = (e) => {
    selectOption(e.target.value);

    console.log(option);
  };
  const goPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  const goNext = () => {
    if (option === "John Bankson" || option === "Ramon Guo") {
      alert("Really bro");
      return;
    }
    if (currentQuestion <= questions.length - 1) {
      if (option === questions[currentQuestion].answer) {
        if (currentQuestion === questions.length - 1) {
          setQuestionsFinished(true);
          alert(
            "Congratulations! You have completed the dumplings quiz!"
          );
        } else {
          alert("Correct answer!");
          setCurrentQuestion((prev) => prev + 1);
        }
      } else {
        alert("Incorrect answer. Please try again.");
      }
    }
  };
  const questions = [
    {
      question: "What is the main purpose of the egg in the dumpling recipe?",
      options: [
        "To put in the dumpling mixture",
        "To make the dumpling paper",
        "To add after serving",
        "To help boil the dumplings",
      ],
      answer: "To put in the dumpling mixture",
    },
    {
      question: "What sauce should you serve with dumplings?",
      options: ["Soy sauce", "Ketchup", "Vinegar", "Mustard"],
      answer: "Vinegar",
    },
    {
      question: "What is the first step in making dumplings?",
      options: [
        "Chop up onions",
        "Get a large bowl and add ground beef into it",
        "Prepare a small bowl of water",
        "Boil water",
      ],
      answer: "Get a large bowl and add ground beef into it",
    },
    {
      question: "What is the name for Korean dumplings?",
      options: ["Mandu", "Pierogi", "Gyoza", "Dumpling"],
      answer: "Mandu",
    },
    {
      question: "What is the name for Polish dumplings?",
      options: ["Mandu", "Pierogi", "Gyoza", "Dumpling"],
      answer: "Pierogi",
    },
    {
      question: "Who invented dumplings?",
      options: [
        "Zhang Zhongjing",
        "Zhang Zhongying",
        "Ramon Guo",
        "John Bankson",
      ],
      answer: "Zhang Zhongjing",
    },
  ];
  return (
    <div
      id="quiz-container"
      data-aos="flip-left"
      style={{ zIndex: 100, pointerEvents: "auto" }}
    >
      <Section
        id="quiz"
        clas="quiz"
        heading="Dumpling Quiz"
        image={img5}
        imgId="img-quiz"
      >
        <br />
        <h2>{questions[currentQuestion].question}</h2>
        <form>
          {questions[currentQuestion].options.map((ques, idx) => {
            return (
              <label key={idx}>
                <input
                  type="radio"
                  name="quiz"
                  onChange={selectQuestion}
                  value={ques}
                  checked={option === ques}
                />
                {ques}
              </label>
            );
          })}
        </form>
      </Section>
      <div id = "button">
      <button
        id="prev"
        onClick={(e) => {
          goPrev();
          e.target.blur();
        }}
        disabled={currentQuestion === 0 || questionsFinished}>
        {"Prev"}
      </button>
      <h1>Question {currentQuestion + 1}</h1>
      <button
        id="next"
        onClick={(e) => {
          goNext();
          e.target.blur();
        }}
        disabled={!option}
        style={{ cursor: "pointer" }}
      >
        Next
      </button>
      </div>
    </div>
  );
}

