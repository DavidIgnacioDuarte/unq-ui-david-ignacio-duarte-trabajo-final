import { Button, Modal } from "react-bootstrap";
import { AiTwotoneTrophy } from "react-icons/ai";
import { BsEmojiWink } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EndingScreen = ({difficulty, correctAnswers, totalAnswers, show, onHide}) => {

  const navigate = useNavigate();

    return (
        <Modal
          show={show}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <AiTwotoneTrophy size="30px" color="gold"/> ¡You Rock! <AiTwotoneTrophy size="30px" color="gold"/>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>You have finished the game on "{difficulty}" difficulty with {correctAnswers} correct answers out of {totalAnswers}</h4>
            <p>
              Thank you very much for playing, and I hope you had fun testing your knowledge in this short trivia!
              Don't forget there are 3 more difficulties... <BsEmojiWink size="15px" color="orange"/>
            </p>
          </Modal.Body>
          <Modal.Footer className="d-grid gap-2">
            <Button variant="outline-success" 
              onClick={() => navigate('/')}>Another Try?</Button>
          </Modal.Footer>
        </Modal>
      );

}

export default EndingScreen;