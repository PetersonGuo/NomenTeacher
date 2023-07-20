import {useState} from 'react';
import Prompt from "../components/Prompt";
import SettingsSidebar from "../components/SettingsSidebar";
import {db} from "../firebase-config";
import {collection, getDocs} from "firebase/firestore";
import {ChevronLeftIcon, ChevronRightIcon, Cog8ToothIcon} from "@heroicons/react/24/outline";
import {motion, useCycle} from "framer-motion";

export default function Quiz() {
  async function getQuestions() {
    const querySnapshot = await getDocs(collection(db, "questions"));
    return querySnapshot.docs.map(doc => doc.data());
  }

  const [questions, setQuestions] = useState(getQuestions());
  const [correct, setCorrect] = useState(0);
  const [history, setHistory] = useState([copy(questions[0/*Math.floor(Math.random()*questions.length)*/])]);
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(getQuestion());
  const [isVisible, onCycle] = useCycle(false, true);
  const [animate, cycle] = useCycle({rotate: 180}, {rotate: -180});

  function setClicked(id) {
    setQuestion(prevQuestion => {
      if (prevQuestion.answers.find(e => e.id === id).isRight) setCorrect(correct + 1);
      let newAnswers = prevQuestion.answers.map(ans => {
        return ans.id === id ? {...ans, isClicked: true} : ans;
      })
      createNewQuestion();
      return {
        ...prevQuestion,
        answers: newAnswers,
        answered: true
      };
    });

  }

  function getQuestion() {
    return history[index];
  }

  function copy(aObject) {
    let bObject = Array.isArray(aObject) ? [] : {};

    let value;
    for (const key in aObject) {
      value = aObject[key];

      bObject[key] = (typeof value === "object") ? copy(value) : value;
    }

    return bObject;
  }

  function createNewQuestion(){
    const qs = questions;
    console.log(qs);
    let qOriginal = qs[Math.floor(Math.random()*qs.length)];
    let qCopy = copy(qOriginal);
    setHistory(prevHistory => {
      return [
        ...prevHistory,
        qCopy
      ];
    })
  }
  function previousQ() {
    setIndex(index-1);
    history[index-1].answered = true;
    setQuestion(history[index-1]);
  }

  function nextQ() {
    setIndex(index + 1);
    // if (history[history.length - 1].answered === true) {
    //   createNewQuestion();
    // } else {
    setQuestion(history[index + 1]);
    // }
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
        <p>Question: {index + 1} / {history.length}</p>
        <p>Correct: {correct} / {history.length - 1}</p>
        <div className={"fixed left-0 top-0"}>
        </div>
        <Prompt question={question} setClicked={setClicked}/>
        <div className={"fixed left-[50%] bottom-[15%]"}>
          <div className={"grid grid-cols-2 relative left-[-50%] gap-x-32"}>
            {index === 0 ? <div/> : <ChevronLeftIcon
                className={`mx-auto border-2 py-1 px-2 rounded-lg w-60 h-10 cursor-pointer hover:bg-blue-500 border-blue-500`}
                onClick={() => previousQ()}/>}
            {question.answered ? <ChevronRightIcon
                className={"mx-auto hover:bg-blue-500 py-1 px-2 border-blue-500 rounded-lg border-2 w-60 h-10 cursor-pointer"}
                onClick={() => nextQ()
                }/> : <div/>}
          </div>
        </div>
        <SettingsSidebar isVisible={isVisible}/>
      </>
  );
}