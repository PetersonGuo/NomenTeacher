import React from 'react';
import './Quiz.css';
import Answer from "./Answer";
export default function Question(props) {
    const answersElement = props.question.answers.map(a => {
        return (
            <div>
                <Answer answer={a.answer} isRight={a.isRight} answered={props.answered} setAnswered={props.setAnswered}/>
                <br/>
            </div>

        )
    });
    console.log(props.question)
    return (
        <div>
            {props.question.question === "" ? "" : <section>
                {props.question.question}
                <br/>
                {answersElement}
            </section>}
        </div>
    )
}
