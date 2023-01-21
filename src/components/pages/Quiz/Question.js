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
            </div>
        )
    });
    return (
        <div className={"py-40"}>
              <div className="text-3xl font-bold mb-10">{props.question.question}</div>
                {answersElement}
        </div>
    )
}
