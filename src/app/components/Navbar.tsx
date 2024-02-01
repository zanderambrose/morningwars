import { useRef } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    const navbarRef = useRef<HTMLDivElement>(null);

    // Function to handle scroll-to behavior
    const scrollToElement = (id: string): void => {
        const element = document.getElementById(id);
        const navbarHeight = navbarRef.current?.offsetHeight || 0;

        if (element) {
            const offsetTop = element.offsetTop - navbarHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };
    return (
        <Navbar ref={navbarRef} sticky="top" style={{ height: "74px" }} className={`bg-body-tertiary`} data-bs-theme="dark">
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
                    <Nav.Link onClick={() => scrollToElement("home")} className="text-white me-4" >Home</Nav.Link>
                    <Nav.Link onClick={() => scrollToElement("video")} className="text-white me-4">Video</Nav.Link>
                    <Nav.Link onClick={() => scrollToElement("merch")} className="text-white me-4">Merch</Nav.Link>
                    <Nav.Link onClick={() => scrollToElement("shows")} className="text-white me-4">Shows</Nav.Link>
                    <Nav.Link onClick={() => scrollToElement("contact")} className="text-white me-5">Contact</Nav.Link>
                    <FontAwesomeIcon icon={faBars} size="2xl" color="white" />
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Navigation
