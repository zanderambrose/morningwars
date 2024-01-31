import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    return (
        <Navbar sticky="top" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src="/morningwarslogo.jpeg"
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="Morning Wars logo"
                    />
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link className="text-white me-4" href="#home">Home</Nav.Link>
                    <Nav.Link className="text-white me-4" href="#video">Video</Nav.Link>
                    <Nav.Link className="text-white me-4" href="#merch">Merch</Nav.Link>
                    <Nav.Link className="text-white me-4" href="#shows">Shows</Nav.Link>
                    <Nav.Link className="text-white me-5" href="#contact">Contact</Nav.Link>
                    <FontAwesomeIcon icon={faBars} size="2xl" color="white" />
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navigation
