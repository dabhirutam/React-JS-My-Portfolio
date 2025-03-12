import { Container, Row, Col, Button } from "react-bootstrap";
import profileImage from "../images/person.png";
import pattern from "../images/pattern.png";

const Banner = () => {

    return (
        <section className="d-flex align-items-center p-5 overflow-x-hidden" style={{ height: '100vh' }}>
            <Container fluid>
                <Row className="align-items-center justify-content-between">
                    <Col md={4} className="text-center text-white text-md-start">
                        <p className="text-light fs-5 ps-1">Hi There, I'm</p>
                        <h1 className="fw-bold display-1">Dabhi Rutam</h1>
                        <div className="pt-1 bg-danger mb-3 ms-1" style={{ width: '190px' }}></div>
                        <span className="fw-medium fs-3 ps-1">Full Stack Developer</span>
                        <p className="text-light opacity-75 my-3 ps-1">
                            I'm Rutam Dabhi, a fullstack developer with the goal of advancing my career
                            and participating in inspiring projects. Here i present my work and my passion for
                            web development. Let's shape digital solution togther ans shape the future.
                        </p>
                        <Button variant="light" className="mt-3 ms-1">Contact Me</Button>
                    </Col>
                    <Col md={6} className="text-end">
                        <div className="profile-container">
                            <div className="custom-frame ms-auto me-5 p-3">
                                <img src={profileImage} alt="Zemo Plakson" className="profile-image" />
                                <div style={{ width: '107%', aspectRatio: '1/1', left: '-8%' }} className="position-absolute translate-middle-y top-50 z-n1 overflow-hidden">
                                    <img style={{ width: '100%', aspectRatio: '1/1', animation: '50s linear infinite patternRotate' }} src={pattern} alt="" />
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