import React from 'react';
import './Quiz.css';
import Button from 'react-bootstrap/Button';
import './Answer.css'

export default function Answer(props) {
    return (
        <Button className="answer-button"
                variant={(props.questionDone || props.isClicked) && props.isRight ? "success" : props.isClicked && !props.isRight && !props.questionDone ? "warning" : "primary"}
                onClick={!props.questionDone ? () => {props.setClicked(props.id)} : () => {}}
        >
            {props.answer}
        </Button>
    )

}
