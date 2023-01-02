import React from 'react';
import './Quiz.css';
import Button from 'react-bootstrap/Button';

export default function Answer(props) {
    return (
        <Button variant={props.answered && props.isRight ? "success" : props.answered ? "danger" : "primary"} onClick={() => props.setAnswered(true)}>
            {props.answer}
        </Button>
    )

}
