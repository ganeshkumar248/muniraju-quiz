import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      questionText: "మునిరాజుకి పిల్లను ఇచ్చే మామ ఎవరు?",
      answerOptions: [
        { answerText: "భాస్కర్ మామ(post office)", isCorrect: false },
        { answerText: "శేషాద్రి మామ", isCorrect: false },
        { answerText: "శంఖు మామ", isCorrect: true },
        { answerText: "పై ఏవి కావు", isCorrect: false },
      ],
    },
    {
      questionText: "మునిరాజు బ్యాగ్ లో దొరికిన వస్తువు ఏంటి?",
      answerOptions: [
        { answerText: "బూస్ట్ ప్యాకెట్", isCorrect: false },
        { answerText: "బుడ్డల ప్యాకెట్", isCorrect: true },
        { answerText: "భగవత్గీత బుక్", isCorrect: false },
        { answerText: "పై ఏవి కావు", isCorrect: false },
      ],
    },
    {
      questionText: "మునిరాజు కొత్త మారు పేరు ఏంటి?",
      answerOptions: [
        { answerText: "ఆంజినేయుడి గద", isCorrect: true },
        { answerText: "కోతి", isCorrect: false },
        { answerText: "తొండ", isCorrect: false },
        { answerText: "కోడి", isCorrect: false },
      ],
    },
    {
      questionText: "మునిరాజు ఫోన్ లో వున్న కలెక్షన్ ఎంత GB?",
      answerOptions: [
        { answerText: "10", isCorrect: false },
        { answerText: "256", isCorrect: false },
        { answerText: "50", isCorrect: false },
        { answerText: "150", isCorrect: true },
      ],
    },
    {
      questionText: "మునిరాజు గద ఉపయోగించే ప్రాంతం పేరు?",
      answerOptions: [
        { answerText: "గూడలి", isCorrect: false },
        { answerText: "మెట్టు", isCorrect: true },
        { answerText: "గుణపాడు", isCorrect: false },
        { answerText: "మల్లం", isCorrect: false },
      ],
    },
    {
      questionText: "మునిరాజు యొక్క	PUBG partner ఎవరు?",
      answerOptions: [
        { answerText: "కాలినకొయ్య", isCorrect: false },
        { answerText: "సుబ్బు వారియర్", isCorrect: false },
        { answerText: "తేజ వారియర్", isCorrect: true },
        { answerText: "పై ఏవి కావు", isCorrect: false },
      ],
    },
    {
      questionText: "మునిరాజు favorite item in పానీపూరి షాప్?",
      answerOptions: [
        { answerText: "పానీపూరి", isCorrect: false },
        { answerText: "మసాల పూరి", isCorrect: false },
        { answerText: "ఉల్లిపాయలు", isCorrect: true },
        { answerText: "ధనియాల పొడి", isCorrect: false },
      ],
    },
    {
      questionText: "మునిరాజు మెట్టులో ఎన్ని మెట్లు ఎక్కాడు?",
      answerOptions: [
        { answerText: "25", isCorrect: false },
        { answerText: "10", isCorrect: false },
        { answerText: "18", isCorrect: false },
        { answerText: "5", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [comment, setComment] = useState("");

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      if (0 <= score < 4) {
        setComment(
          "మీరు గెలుచుకున్నారు one packet of ManForce Extra Dotted Condoms"
        );
      }
      if (4 <= score < 6) {
        setComment(
          "మీరు గెలుచుకున్నారు one packet of Durex Air Ultra Thin Condoms"
        );
      }
      if (6 <= score <= 8) {
        setComment(
          "మీరు గెలుచుకున్నారు one packet of Kamasutra Superthin Condoms"
        );
      }
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <br></br>
          {comment}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <div>
                {" "}
                Question {currentQuestion + 1} / {questions.length}
              </div>
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
