import React from 'react';
import './Quiz.css';
import Question from "./Question";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from './Modal';

export default function Quiz() {
    const [qChoices, setQChoices] = React.useState({
        IonicBonds: false,
        CovalentBonds: false
    });
    const [open, setOpen] = React.useState(false);
    console.log(open);
    const [showSettings, setShowSettings] = React.useState(false);
    const [question, setQuestion] = React.useState({
        question: "Why did the chicken cross the road?",
        numberOfFails: 1,
        numberOfTries: 0,
        answers: [{
            id: 0,
            answer: "he didn't",
            isClicked: false,
            isRight: false
        },{
            id: 1,
            answer: "he didn't want to",
            isClicked: false,
            isRight: false
        },{
            id: 2,
            answer: "he wanted to",
            isClicked: false,
            isRight: false
        },{
            id: 3,
            answer: "he did",
            isClicked: false,
            isRight: true
        }]
    });

    function getNewQuestion(){
        return {
            question: "Why road?",
            numberOfFails: 1,
            numberOfTries: 0,
            answers: [{
                id: 0,
                answer: "he dt",
                isClicked: false,
                isRight: false
            },{
                id: 1,
                answer: "he didnt to",
                isClicked: false,
                isRight: false
            },{
                id: 2,
                answer: "he to",
                isClicked: false,
                isRight: false
            },{
                id: 3,
                answer: "hid",
                isClicked: false,
                isRight: true
            }]
        };
    }

    function setClicked(id){
        setQuestion(prevQuestion => {
            let newAnswers = prevQuestion.answers.map(ans => {
                return ans.id === id ? { ...ans, isClicked: true} : ans;
            })
            return {
                prevQuestion,
                answers: newAnswers
            }
        });
    }

    function handleQuestionChange(event){
        setQChoices(prevChoices => {
            return {
                ...prevChoices,
                [event.target.name]: event.target.checked
            }
        });
    }


    return (
        <div>
            <Offcanvas show={showSettings} onHide={() => setShowSettings(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> Settings </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Ionic Bonds" name="IonicBonds" onChange={handleQuestionChange}/>
                            <Form.Check type="checkbox" label="Covalent Bonds" name="CovalentBonds" onChange={handleQuestionChange}/>
                        </Form.Group>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>
            <div className="quiz-container w-full h-full">
                <Question question={question} setClicked={setClicked}/>
                <div className="">
                    <button className="" onClick={() => setOpen(true)}>Settings</button>
                    <button className="" onClick={() => setQuestion(getNewQuestion())}>Next Question</button>
                </div>
            </div>
            <Modal id="modal" className="hidden" setOpen={setOpen} isOpen={open}/>
        </div>
    );
}
