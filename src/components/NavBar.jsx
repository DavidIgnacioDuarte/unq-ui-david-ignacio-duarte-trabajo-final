import React from "react";
import { Button } from "react-bootstrap";
import { MdHelp } from "react-icons/md";

const NavBar = () => {

  return (
    <header
      style={{
        borderBottom: "2px solid lightgray",
        background: `url(${"nav.png"})`
      }}
      className="d-flex align-items-center justify-content-between px-1 py-1">
      <a href="/home">
        <img width="50px" src="iconHome.png" title="Back to home?"/>
      </a>
        <h2>My Trivia Crack</h2>
          <Button
            variant="outline-light" size="sm">
            <MdHelp size={25}/>
          </Button>
    </header>
  );
};

export default NavBar;
