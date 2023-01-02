import React from 'react';
import './Quiz.css';
import Button from 'react-bootstrap/Button';
import './Answer.css'

export default function Answer(props) {
    return (
        <Button className="answer-button" variant={props.answered && props.isRight ? "success" : props.answered ? "danger" : "primary"} onClick={() => props.setAnswered(true)}>
            {props.answer}
        </Button>
    )

}
