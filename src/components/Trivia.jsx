import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useNavigate, useSearchParams } from "react-router-dom";
import { API } from "../services/Api";

const Trivia = () => {

  const [questions, setQuestions] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [answerObject, setAnswerObject] = useState(null);
  const { id, question, ...options } = currentQuestion;
  const navigate = useNavigate();
  const [queryParams] = useSearchParams();
  const difficulty = queryParams.get("difficulty");
  const [finished, finish] = useState(false);

  const [totalCorrectAnswers, setCorrectAnswers] = useState(0);

  const initialize = () => {
    API.getQuestions(difficulty)
      .then((response) => {
        setAnswerObject(null);
        setQuestions(response.data);
        setCurrentQuestion(response.data[0]);
      });
  };

  useEffect(initialize, [queryParams]);

  const nextQuestion = () => {
    const nextQuestionIndex = questions.indexOf(currentQuestion) + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(questions[nextQuestionIndex]);
      setAnswerObject(null);
    } else finish(true);
  };

  if (finished) {
    console.log("Hola terminó el juego :P")
  }

  return (
    <div className="space-y-5 ">
      <header className="flex justify-between px-2 align-middle">
        
        

        <h3>
          {difficulty.toUpperCase()}
        </h3>
      </header>
      <p className="text-2xl py-2">{question}</p>
      
    </div>
  );
};

export default Trivia;
