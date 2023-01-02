import React from 'react';
import './Quiz.css';
import Question from "./Question";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Quiz() {
    const [qChoices, setQChoices] = React.useState({
        IonicBonds: false,
        CovalentBonds: false
    });

    const [showSettings, setShowSettings] = React.useState(false);
    const [answered, setAnswered] = React.useState(false);
    const [question, setQuestion] = React.useState({
        question: "Why did the chicken cross the road?",
        answers: [{
            id: 0,
            answer: "he didn't",
            isRight: false
        },{
            id: 1,
            answer: "he didn't want to",
            isRight: false
        },{
            id: 2,
            answer: "he wanted to",
            isRight: false
        },{
            id: 3,
            answer: "he did",
            isRight: true
        }]
    });

    function getNewQuestion(){
        setAnswered(false);
        return {
            question: "Why road?",
            answers: [{
                id: 0,
                answer: "he dt",
                isRight: false
            },{
                id: 1,
                answer: "he dnt to",
                isRight: false
            },{
                id: 2,
                answer: "he to",
                isRight: false
            },{
                id: 3,
                answer: "hid",
                isRight: true
            }]
        };
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
            <div className="quiz-container">
                <Question question={question} answered={answered} setAnswered={setAnswered}/>
                <Button className="quiz-button" variant="primary" onClick={() => setShowSettings(true)}> Settings </Button>
                <Button variant="primary" onClick={() => setQuestion(getNewQuestion())}> Next Question </Button>
            </div>
        </div>
    );
}
