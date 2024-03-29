import {useState} from 'react';
import Prompt from "../components/Prompt";
import SettingsSidebar from "../components/SettingsSidebar";
import HistorySidebar from "../components/HistorySidebar";
import questions from '../questions.json';
import {ChevronLeftIcon, ChevronRightIcon, Cog8ToothIcon} from "@heroicons/react/24/outline";
import {motion, useCycle} from "framer-motion";

export default function Quiz() {
  const [correct, setCorrect] = useState(0);
  const [history, setHistory] = useState([]);
  const [index, setIndex] = useState(-1);
  const [question, setQuestion] = useState(getQuestion);
  const [isVisible, onCycle] = useCycle(false, true);
  const [animate, cycle] = useCycle({rotate: 180}, {rotate: -180});

  function setClicked(id) {
    setQuestion(prevQuestion => {
      if (prevQuestion.answers.find(e => e.id === id).isRight) setCorrect(correct + 1);
      let newAnswers = prevQuestion.answers.map(ans => {
        return ans.id === id ? {...ans, isClicked: true} : ans;
      })
      setHistory(prevHistory => {
        return [
          ...prevHistory,
          prevQuestion
        ];
      })
      return {
        ...prevQuestion,
        answers: newAnswers,
        answered: true
      };
    });

  }

  function used(q) {
    for (let i in history) if (i.id === q.id) return true;
    return false;
  }

  function getQuestion() {
    setIndex(index + 1);
    if (index === history.length - 1) {
      const qs = questions.questions;
      let q = qs[qs.length * Math.random() << 0];
      while (used(q)) {
        q = qs[qs.length * Math.random() << 0];
      }
      q.answered = false;
      let currentIndex = q.answers.length, randomIndex;
      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [q.answers[currentIndex], q.answers[randomIndex]] = [q.answers[randomIndex], q.answers[currentIndex]];
      }
      return q;
    } else {
      return history[index];
    }
  }

  function previous() {
    setIndex(index-1);
    if (history[history.length-1] !== question && index === history.length) history.push(question);
    history[index-1].answered = true;
    setQuestion(history[index - 1]);
  }

  return (
      <>
        <motion.div className={"w-10 mr-[15vw] ml-auto mt-5 cursor-pointer"}
                    animate={animate} transition={{bounce: 0, duration: 0.4}} onClick={() => {
          cycle();
          onCycle();
        }}>
          <Cog8ToothIcon className={`w-10 h-10`}/>
        </motion.div>
        <p>Question: {index + 1} / {history.length + 1}</p>
        <p>Correct: {correct} / {history.length + 1}</p>
        <div className={"fixed left-0 top-0"}>
          {/*<HistorySidebar history={history}/>*/}
        </div>
        <Prompt question={question} setClicked={setClicked}/>
        <div className={"fixed left-[50%] bottom-[15%]"}>
          <div className={"grid grid-cols-2 relative left-[-50%] gap-x-32"}>
            {index === 0 ? <div/> : <ChevronLeftIcon
                className={`mx-auto border-2 py-1 px-2 rounded-lg w-60 h-10 cursor-pointer hover:bg-blue-500 border-blue-500`}
                onClick={() => previous()}/>}
            {question.answered ? <ChevronRightIcon
                className={"mx-auto hover:bg-blue-500 py-1 px-2 border-blue-500 rounded-lg border-2 w-60 h-10 cursor-pointer"}
                onClick={() => setQuestion(getQuestion())
                }/> : <div/>}
          </div>
        </div>
        <SettingsSidebar isVisible={isVisible}/>
      </>
  );
}
