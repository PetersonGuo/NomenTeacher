import Answer from "./Answer";

export default function Prompt(props) {
    console.log(props.question);
  const answersElement = props.question.answers.map(ans => {
    return (
        <Answer
            key={ans.id}
            id={ans.id}
            answer={ans.answer}
            isRight={ans.isRight}
            isClicked={ans.isClicked}
            answered={props.question.answered}
            setClicked={props.setClicked}
        />
    )
  });
  return (
      <div className={"fixed top-[35vh] w-full"}>
        <div className="text-3xl font-bold my-5">{props.question.question}</div>
        <div className={"w-[50%] mx-auto min-h-[20%]"}>
          <div className={"grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10"}>{answersElement}</div>
        </div>
      </div>
  )
}