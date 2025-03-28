import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../images/r-logo.png"

const Header = () => {
    return (
        <Navbar expand="lg" className="border-bottom border-secondary position-fixed w-100 z-3 bg-dark p-1">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} style={{ width: '70px', filter: 'brightness(200%)', }} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fs-5 fw-medium column-gap-4">
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