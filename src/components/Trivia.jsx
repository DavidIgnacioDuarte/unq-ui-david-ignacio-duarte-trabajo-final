import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { API } from "../services/Api";
import Counter from "./Counter";
import { AiFillFire, AiOutlineArrowRight } from "react-icons/ai";
import EndingScreen from "./EndingScreen";

const Trivia = () => {

  const [questions, setQuestions] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const { id, question, ...options } = currentQuestion;
  const [queryParams] = useSearchParams();
  const difficulty = queryParams.get("difficulty") || "easy";
  const [finished, finish] = useState(false);

  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [totalCorrectAnswers, setCorrectAnswers] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const [wasAnswered, answer] = useState(false);

  // Initial render
  useEffect(() => {
    API.getQuestions(difficulty)
      .then((response) => {
        setSelectedAnswer(null);
        setQuestions(response.data);
        setCurrentQuestion(response.data[0]);
      });
  }, [queryParams]);

  const sendAnswer = (questionId, answerId) => {

    API.sendAnswer(questionId, answerId)
      .then((response) => {
        setSelectedAnswer(answerId)
        if (response.data.answer) {
          setCorrectAnswers(totalCorrectAnswers + 1);
          setCorrectAnswer(answerId);
        }
        answer(true);
      });
  }

  const passToNextQuestion = () => {
    const nextQuestionIndex = questions.indexOf(currentQuestion) + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(questions[nextQuestionIndex]);
      setSelectedAnswer(null);
      setCorrectAnswer(null);
      answer(false);
    } else finish(true);
  };

  const getAnswerButtonStyle = (answerId) => {
    return (answerId === correctAnswer) ? "success" : "danger";
  }

  if (finished) {
    console.log("Hola terminó el juego :P")
  }

  return (
    <div className="d-flex flex-column gap-4 align-items-center">
        <h2>
          {question}
        </h2>
        <div style={{position: "absolute", right: "30px", bottom:"30px"}}>
          <Counter correctAnswers={totalCorrectAnswers} totalAnswers={questions.length}/>
        </div>
        <div style={{position: "absolute", left: "30px", bottom:"30px"}}>
          <h3>
            <AiFillFire size="35px" color="gold"/>
               Difficulty: {difficulty.toUpperCase()} 
            <AiFillFire size="35px" color="gold"/>
          </h3>
        </div>
        <div className="d-grid gap-3 mb-3">
          { Object.entries(options).map(([answerId, val]) => {
            let actualButtonStyle = (selectedAnswer === answerId) ? getAnswerButtonStyle(answerId) : "outline-info";
           return(
              <Button key={answerId} variant={actualButtonStyle} size="lg"
                onClick={() => sendAnswer(id, answerId)} disabled={wasAnswered}>
                  {val}
              </Button>
          )})}
        </div>
        {selectedAnswer && (
        <Button key="nextQuestion" variant="outline-secondary" size="lg"
          onClick={() => {
            passToNextQuestion()
          }}>
            Go to next question! <AiOutlineArrowRight size="25px"/>
        </Button>
        )}

        <EndingScreen difficulty={difficulty.toUpperCase()} correctAnswers={totalCorrectAnswers} totalAnswers={questions.length}
                      show={finished} onHide={() => finish(false)}/>

    </div>
    
  );
};

export default Trivia;
