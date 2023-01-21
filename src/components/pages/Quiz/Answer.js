import React from 'react';
import './Quiz.css';
import './Answer.css'

export default function Answer(props) {
    return (
        <button className={`mx-auto my-4 
        ${(props.questionDone || props.isClicked) && props.isRight ? "text-green-700" : props.isClicked && !props.isRight && !props.questionDone ? "text-red-700" : "text-blue-700"}`}
                color={(props.questionDone || props.isClicked) && props.isRight ? "green" : props.isClicked && !props.isRight && !props.questionDone ? "red" : "blue"}
                onClick={!props.questionDone ? () => {props.setClicked(props.id)} : () => {}}
        >
            {props.answer}
        </button>
    )

}
