import { Offcanvas } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";

const HelpOffCanva = ({show, onHide}) => {

    return(
        <Offcanvas show={show} onHide={onHide} placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title><h3>My Trivia Crack Game</h3></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                A quick and entertaining game to see how much you know about general knowledge. 
                Just select the difficulty and play!
                <div style={{position: "absolute", bottom:"15px"}} className="d-flex flex-column align-items-right">
                    <h4>Made with a lot of dedication by</h4>
                    <a href="https://github.com/DavidIgnacioDuarte" target="_blank">David Ignacio Duarte <AiFillGithub size="20px"/></a>
                    
                </div>
            </Offcanvas.Body>
      </Offcanvas>
    )

}

export default HelpOffCanva;