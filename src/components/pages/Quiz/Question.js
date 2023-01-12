import React from 'react';
import './Quiz.css';
import Answer from "./Answer";
export default function Question(props) {
    const questionDone = props.numberOfFails - props.numberOfTries == 0 ? true : false;
    const answersElement = props.question.answers.map(ans => {
        return (
            <div>
                <Answer answer={ans.answer} isRight={ans.isRight} isClicked={ans.isClicked} setQuestion={props.setQuestion} questionDone={questionDone}/>
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
