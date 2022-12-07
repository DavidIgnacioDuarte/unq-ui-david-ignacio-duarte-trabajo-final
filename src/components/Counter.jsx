import { AiOutlineCheckCircle } from "react-icons/ai";

const Counter = ({correctAnswers, totalAnswers}) => {

    return(
        <div className="d-flex flex-row align-items-center">
            <AiOutlineCheckCircle size="45px" color="green"/>
            <h3> {correctAnswers} / {totalAnswers} </h3>
        </div>
    )

}

export default Counter;