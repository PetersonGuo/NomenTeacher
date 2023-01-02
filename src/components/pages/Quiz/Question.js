import React from 'react';
import './Quiz.css';
import Answer from "./Answer";
export default function Question(props) {
    const answersElement = props.question.answers.map(a => {
        return (
            <Answer answer={a.answer} isRight={a.isRight} answered={props.answered} setAnswered={props.setAnswered}/>
        )
    });
    console.log(props.question)
    return (
        <div>
            {props.question.question === "" ? "" : <section>
                {props.question.question}
                {answersElement}
            </section>}
        </div>
    )
}
