import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <Navbar sticky="top" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Morning Wars Logo</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <FontAwesomeIcon icon={faBars} size="2xl" />
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Nav
