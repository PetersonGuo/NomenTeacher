import './Quiz.css';
import Answer from "./Answer";

export default function Prompt(props) {
  const answersElement = props.question.answers.map(ans => {
    return (
        <div key={ans.id}>
          <Answer
              id={ans.id}
              answer={ans.answer}
              isRight={ans.isRight}
              isClicked={ans.isClicked}
              setClicked={props.setClicked}
              answered={props.answered}
              setAnswered={props.setAnswered}
          />
        </div>
    )
  });
  return (
      <div className={"fixed top-[35vh] w-full"}>
        <div className="text-3xl font-bold my-5">{props.question.question}</div>
        <div className={"w-[50%] mx-auto min-h-[20%]"}>
          <div className={"grid grid-cols-2 gap-x-10"}>{answersElement}</div>
        </div>
      </div>
  )
}
