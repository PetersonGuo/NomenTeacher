import React from 'react';
import './Quiz.css';
import Question from "./Question";
import Modal from './Modal';

export default function Quiz() {
  const [qChoices, setQChoices] = React.useState({
    IonicBonds: false,
    CovalentBonds: false
  });
  const [open, setOpen] = React.useState(false);
  const [question, setQuestion] = React.useState({
    question: "Why did the chicken cross the road?",
    numberOfFails: 1,
    numberOfTries: 0,
    answers: [{
      id: 0,
      answer: "he didn't",
      isClicked: false,
      isRight: false
    }, {
      id: 1,
      answer: "he didn't want to",
      isClicked: false,
      isRight: false
    }, {
      id: 2,
      answer: "he wanted to",
      isClicked: false,
      isRight: false
    }, {
      id: 3,
      answer: "he did",
      isClicked: false,
      isRight: true
    }]
  });

  function getNewQuestion() {
    return {
      question: "Why road?",
      numberOfFails: 1,
      numberOfTries: 0,
      answers: [{
        id: 0,
        answer: "he dt",
        isClicked: false,
        isRight: false
      }, {
        id: 1,
        answer: "he didnt to",
        isClicked: false,
        isRight: false
      }, {
        id: 2,
        answer: "he to",
        isClicked: false,
        isRight: false
      }, {
        id: 3,
        answer: "hid",
        isClicked: false,
        isRight: true
      }]
    };
  }

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

  return (
      <div className={"w-full h-full"}>
        <div className="align-content-center">
          <Question question={question} setClicked={setClicked}/>
          <div className={"absolute left-[50%] bottom-[25%]"}>
            <div className={"grid grid-cols-2 relative left-[-50%] gap-x-[40px]"}>
              <button className={"button"} style={{marginLeft: "initial", marginRight: "initial"}}
                      onClick={() => setOpen(true)}>Settings
              </button>
              <button className={"button"} style={{marginLeft: "initial", marginRight: "initial"}}
                      onClick={() => setQuestion(getNewQuestion())}>Next Question
              </button>
            </div>
          </div>
        </div>
        <Modal className="" setOpen={setOpen} open={open}/>
      </div>
  );
}
