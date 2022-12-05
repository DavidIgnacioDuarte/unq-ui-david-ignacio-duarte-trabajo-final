import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/views/Home";
import Trivia from "./components/views/Trivia";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
                <Home/>
            }/>
          <Route
            path="/trivia"
            element={
                <Trivia/>
            }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
