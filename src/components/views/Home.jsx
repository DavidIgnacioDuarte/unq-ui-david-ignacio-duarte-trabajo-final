import { useNavigate } from "react-router-dom";
import NavBar from "./../NavBar";
import DifficultySelector from "./../DifficultySelector";

const Home = () => {

  return (
    <>
      <NavBar/>
      <DifficultySelector/>
    </>
  );
};

export default Home;
