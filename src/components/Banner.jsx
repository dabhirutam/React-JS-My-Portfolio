import { Container, Row, Col, Button } from "react-bootstrap";
import profileImage from "../images/person.png";
import pattern from "../images/banner-pattern.png";

const Banner = () => {

    return (
        <section className="d-flex align-items-center p-5 overflow-x-hidden" style={{ height: '100vh' }}>
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
                                <div style={{ width: '120%', aspectRatio: '1/1' }} className="position-absolute translate-middle top-50 start-50 z-n1">
                                    <img style={{ width: '100%', aspectRatio: '1/1', animation: '50s linear infinite patternRotate' }} src={pattern} alt=""/>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;