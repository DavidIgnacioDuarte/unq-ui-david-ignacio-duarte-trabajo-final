import { API } from "../services/Api";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from "react-bootstrap";

const DifficultySelector = () => {

  const [difficulties, setDifficulties] = useState([]);

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
        <ButtonGroup vertical>
      { difficulties?.map((difficulty) => (
          <Button key={difficulty} variant="outline-light" size="lg">
              {difficulty.toUpperCase()}
          </Button>
       ))}
        </ButtonGroup>
    </div>
  )

}

export default DifficultySelector;