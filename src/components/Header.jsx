import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar expand="lg" className="border-bottom border-secondary">
            <Container>
                <Navbar.Brand href="#home" className="text-white">Rutam</Navbar.Brand>
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