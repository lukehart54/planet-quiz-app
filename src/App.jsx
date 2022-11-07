import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <div className="App">
      {!isQuizStarted && (
        <div>
          <h1>Planet Quiz 🪐</h1>
          <button onClick={() => {setIsQuizStarted(true)}}>Start Quiz!</button>
        </div>
      )}
      {isQuizStarted && (
        <div>
          <Quiz />
        </div>
    )}
    </div>
  );
}

export default App;

let quizData = [
  {
    question: "What planet is this?",
    options: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Mercury", "Venus"],
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg",
    answer: "Earth",
  },
  {
    question: "What planet is this?",
    options: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Mercury", "Venus"],
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_%2830055660701%29.png/1200px-Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_%2830055660701%29.png",
    answer: "Mars",
  },
  {
    question: "What planet is this?",
    options: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Mercury", "Venus"],
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg",
    answer: "Jupiter",
  },
  {
    question: "What planet is this?",
    options: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Mercury", "Venus"],
    img: "https://i.ytimg.com/vi/XvTSB5B0d0w/maxresdefault.jpg",
    answer: "Saturn",
  },
  {
    question: "What planet is this?",
    options: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Mercury", "Venus"],
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg",
    answer: "Uranus",
  },
  {
    question: "What planet is this?",
    options: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Mercury", "Venus"],
    img: "https://upload.wikimedia.org/wikipedia/commons/5/56/Neptune_Full.jpg",
    answer: "Neptune",
  },
  {
    question: "What planet is this?",
    options: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Mercury", "Venus"],
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScq1PfCeDsfR65X8AazTLGDvw3lbh6gdTF9CWHNOXeipLLWb4OF_clOYfxSNcpvnkxITI&usqp=CAU",
    answer: "Pluto",
  },
  {
    question: "What planet is this?",
    options: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Mercury", "Venus"],
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/1200px-Mercury_in_color_-_Prockter07-edit1.jpg",
    answer: "Mercury",
  },
  {
    question: "What planet is this?",
    options: ["Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune", "Pluto", "Mercury", "Venus"],
    img: "https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg",
    answer: "Venus",
  },
];

// scramble quizData order
quizData = quizData.sort(() => Math.random() - 0.5);
  

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  const scrambledOptions = (options) => {
    const scrambled = [...options];
    for (let i = scrambled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]];
    }
    return scrambled;
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizData.length}
          <button onClick={restartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <div className="question-text">
              {quizData[currentQuestion].question}
            </div>
            <img src={quizData[currentQuestion].img} alt="planet" width={300}/>
          </div>
          <div className="answer-section">
            {scrambledOptions(quizData[currentQuestion].options).map(
              (option) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(
                      option === quizData[currentQuestion].answer
                    )
                  }
                >
                  {option}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

