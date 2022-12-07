import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trivia from "./components/Trivia";
import DifficultySelector from './components/DifficultySelector';
import NavBar from './components/NavBar';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<DifficultySelector/>}/>
          <Route exact path="/trivia" element={<Trivia/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
