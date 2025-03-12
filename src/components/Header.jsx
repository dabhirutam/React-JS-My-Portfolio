import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/r-logo.png"

const Header = () => {
    return (
        <Navbar expand="lg" className="border-bottom border-secondary position-fixed w-100">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} style={{ width: '70px', filter: 'brightness(200%) drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.47))', }} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-medium column-gap-3">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">About Us</Nav.Link>
                        <Nav.Link href="#home">Skills</Nav.Link>
                        <Nav.Link href="#home">Projects</Nav.Link>
                        <Nav.Link href="#home">Contect</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;