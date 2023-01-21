import React from 'react';
import './Quiz.css';
import Prompt from "./Prompt";
import Modal from './Modal';
import questions from './questions.json';

export default function Quiz() {
  let queue = new Array(10);
  const [open, setOpen] = React.useState(false);
  const [answered, setAnswered] = React.useState(false);
  const [question, setQuestion] = React.useState(getQuestion);

  function setClicked(id) {
    for (let i in question.answers) {
      console.log(i.id);
      console.log(id);
      if (i.id === id) {
        i.id.isClicked = true;
      }
    }
    console.log(id);
    console.log(question);
  }

  function getQuestion() {
    const qs = questions.questions;
    let q = qs[qs.length * Math.random() << 0];
    while (queue.includes(q)) {
      q = qs[qs.length * Math.random() << 0];
    }
    queue.shift();
    queue.push(q);
    let currentIndex = q.answers.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [q.answers[currentIndex], q.answers[randomIndex]] = [q.answers[randomIndex], q.answers[currentIndex]];
    }
    setAnswered(false);
    return q;
  }

  return (
      <div>
        <Prompt question={question} setClicked={setClicked} answered={answered} setAnswered={setAnswered} />
        <div className={"fixed left-[50%] bottom-[20%]"}>
          <div className={"grid grid-cols-2 relative left-[-50%] gap-x-[40px]"}>
            <button className={"button"} style={{marginLeft: "initial", marginRight: "initial"}}
                    onClick={() => setOpen(true)}>Settings
            </button>
            <button className={"button"} style={{marginLeft: "initial", marginRight: "initial"}}
                    onClick={() => setQuestion(getQuestion())}>Next Question
            </button>
          </div>
        </div>
        <Modal className="" setOpen={setOpen} open={open}/>
      </div>
  );
}
