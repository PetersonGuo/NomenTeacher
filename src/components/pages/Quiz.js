import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Quiz() {
    const [probChoices, setProbChoices] = React.useState({
        MNBonds: false,
        NNBonds: false
    });

    const [showSettings, setShowSettings] = React.useState(false);

    console.log(probChoices.MNBonds, probChoices.NNBonds);

    function handleProblemChange(event){
        setProbChoices(prevChoices => {
            return {
                ...prevChoices,
                [event.target.name]: event.target.checked
            }
        });
    }


    return (
        <div className="container">
            <Button variant="primary" onClick={() => setShowSettings(true)}> Settings </Button>
            <Offcanvas show={showSettings} onHide={() => setShowSettings(false)}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> Settings </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <form>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="MNBonds" name="MNBonds" onChange={handleProblemChange}/>
                            <Form.Check type="checkbox" label="NNBonds" name="NNBonds" onChange={handleProblemChange}/>
                        </Form.Group>
                    </form>
                </Offcanvas.Body>
            </Offcanvas>

        </div>
    );
}
