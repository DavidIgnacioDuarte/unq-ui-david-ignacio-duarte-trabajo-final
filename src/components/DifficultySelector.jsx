import { API } from "../services/Api";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const DifficultySelector = () => {

  const [difficulties, setDifficulties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.getDifficulties()
      .then((response) => {
        setDifficulties(response.data);
      });
  }, []);

  return (
    <div className="d-flex flex-column gap-4 align-items-center">
        <h1>
            Choose a difficulty to start!
        </h1>
        <div className="d-grid gap-3 mb-3">
      { difficulties?.map((difficulty) => (
          <Button key={difficulty} variant="outline-dark" size="lg"
            onClick={() =>
                navigate(
                  `/trivia?difficulty=${difficulty}`
                )}>
              {difficulty.toUpperCase()}
          </Button>
       ))}
        </div>
    </div>
  )

}

export default DifficultySelector;