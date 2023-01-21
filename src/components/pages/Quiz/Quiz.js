import React from 'react';
import './Quiz.css';
import Prompt from "./Prompt";
import Modal from './Modal';
import questions from './questions.json';

export default function Quiz() {
  let queue = new Array(10);
  const [open, setOpen] = React.useState(false);
  const [question, setQuestion] = React.useState(getQuestion);

  function setClicked(id) {
    setQuestion(prevQuestion => {
      let newAnswers = prevQuestion.answers.map(ans => {
        return ans.id === id ? {...ans, isClicked: true} : ans;
      })
      return {
        prevQuestion,
        answers: newAnswers
      }
    });
  }

  function getQuestion() {
    const qs = questions.questions;
    let q = qs[qs.length * Math.random() << 0];
    if (queue.length !== 0) {
      while (queue.includes(q)) {
        q = qs[qs.length * Math.random() << 0];
      }
      if (queue.length === 10) {
        queue.shift();
      }
    }
    queue.push(q);
    let currentIndex = q.answers.length, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [q.answers[currentIndex], q.answers[randomIndex]] = [q.answers[randomIndex], q.answers[currentIndex]];
    }
    return q;
  }

  return (
      <div className={"w-full h-full"}>
        <div className="align-content-center">
          <Prompt question={question} setClicked={setClicked}/>
          <div className={"absolute left-[50%] bottom-[20%]"}>
            <div className={"grid grid-cols-2 relative left-[-50%] gap-x-[40px]"}>
              <button className={"button"} style={{marginLeft: "initial", marginRight: "initial"}}
                      onClick={() => setOpen(true)}>Settings
              </button>
              <button className={"button"} style={{marginLeft: "initial", marginRight: "initial"}}
                      onClick={() => setQuestion(getQuestion())}>Next Question
              </button>
            </div>
          </div>
        </div>
        <Modal className="" setOpen={setOpen} open={open}/>
      </div>
  );
}
