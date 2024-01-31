import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
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
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <FontAwesomeIcon icon={faBars} size="2xl" color="white" />
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Nav
