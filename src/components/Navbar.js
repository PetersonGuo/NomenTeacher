import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MyNav() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">NomenTeacher</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="quiz">Quizzing Tool</Nav.Link>
                        <NavDropdown title="Study Materials" id="basic-nav-dropdown">
                            <NavDropdown.Item href="material/mnbonds">Metal Non-Metal Bonds</NavDropdown.Item>
                            <NavDropdown.Item href="material/nnbonds">Non-Metal Non-Metal Bonds</NavDropdown.Item>
                            {/*<NavDropdown.Divider />*/}
                            {/*<NavDropdown.Item href="#action/3.4">*/}
                            {/*    Separated link*/}
                            {/*</NavDropdown.Item>*/}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
