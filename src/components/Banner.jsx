import { Container, Row, Col, Button } from "react-bootstrap";
import profileImage from "../images/person.png"

const Banner = () => {
    return (
        <section className="d-flex align-items-center p-5 overflow-x-hidden" style={{height: '100vh'}}>
            <Container fluid>
                <Row className="align-items-center">
                    <Col md={6} className="text-center text-md-start">
                        <p className="text-light">Hi There, I'm</p>
                        <h1 className="fw-bold">Zemo Plakson</h1>
                        <h4 className="text-primary">Freelance</h4>
                        <p className="text-secondary">
                            The names of how users interact with interactive elements within a user interface
                            flow chart based on container proportion.
                        </p>
                        <Button variant="light" className="mt-3">Contact Me</Button>
                    </Col>
                    <Col md={6} className="text-end">
                        <div className="profile-container">
                            <div className="custom-frame ms-auto p-3">
                                <img src={profileImage} alt="Zemo Plakson" className="profile-image" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;