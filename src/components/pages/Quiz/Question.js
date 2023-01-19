import React from 'react';
import './Quiz.css';
import Answer from "./Answer";
export default function Question(props) {
    const questionDone = props.numberOfFails - props.numberOfTries === 0;
    const answersElement = props.question.answers.map(ans => {
        return (
            <div>
                <Answer id={ans.id}
                        answer={ans.answer}
                        isRight={ans.isRight}
                        isClicked={ans.isClicked}
                        setClicked={props.setClicked}
                        questionDone={questionDone}
                />
                <br/>
            </div>
        )
    });
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
