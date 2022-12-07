import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { MdHelp } from "react-icons/md";
import HelpOffCanva from "./HelpOffCanva";

const NavBar = () => {

  const [help, showHelp] = useState(false)

  const handleClose = () => showHelp(false);
  const handleShow = () => showHelp(true);

  return (
    <>
    <header
      style={{
        borderBottom: "2px solid lightgray",
        background: `url(${"nav.png"})`
      }}
      className="d-flex align-items-center justify-content-between px-1 py-1">
      <a href="/">
        <img width="50px" src="iconHome.png" title="Back to home?"/>
      </a>
        <h2>My Trivia Crack</h2>
          <Button
            variant="outline-light" size="sm" title="More information!"
            onClick={
              handleShow
            }>
            <MdHelp size={25}/>
          </Button>
    </header>
    
    <HelpOffCanva show={help} onHide={handleClose} />
    
    </>

  );
};

export default NavBar;
