import './Quiz.css';
import './Answer.css'

export default function Answer(props) {
    return (
        <button className={`my-4 border-2 rounded-lg mx-auto my-3 py-1 px-2 
        ${(props.questionDone || props.isClicked) && props.isRight ? "text-white bg-green-700 border-green-700" +
            " hover:bg-green-700" : props.isClicked && !props.isRight && !props.questionDone ? "text-white" +
            " bg-red-700" +
            " border-red-700 hover:bg-red-700" : "border-blue-500 hover:bg-blue-500 hover:text-white"} ${props.isClicked ? "cursor-default" : ""}`}
                onClick={!props.questionDone ? () => {props.setClicked(props.id)} : () => {}}
        >
            {props.answer}
        </button>
    )

}
