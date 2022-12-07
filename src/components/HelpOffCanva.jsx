import { Offcanvas } from "react-bootstrap";

const HelpOffCanva = ({show, onHide}) => {

    return(
        <Offcanvas show={show} onHide={onHide} placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title><h3>My Trivia Crack Game</h3></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                A quick and entertaining game to see how much you know about general knowledge. 
                Just select the difficulty and play!
            </Offcanvas.Body>
      </Offcanvas>
    )

}

export default HelpOffCanva;