import { Container, Row, Col, Button } from "react-bootstrap";
import profileImage from "../../images/person.png";
import pattern from "../../images/pattern.png";

const Banner = () => {

    return (
        <section className="py-5 overflow-x-hidden position-relative">
            <Container>
                <Row className="align-items-center justify-content-between pt-5 my-5">
                    <Col md={6} className="text-white text-start">
                        <p className="text-light fs-5 ps-1">Hi There, I'm</p>
                        <h1 className="fw-bold display-3">Dabhi Rutam</h1>
                        <div className="pt-1 bg-danger mb-3 ms-1" style={{ width: '140px' }}></div>
                        <span className="fw-medium fs-3 ps-1">Full Stack Developer</span>
                        <p className="text-light opacity-75 my-3 ps-1">
                            I'm Rutam Dabhi, a fullstack developer with the goal of advancing my career
                            and participating in inspiring projects. Here i present my work and my passion for
                            web development. Let's shape digital solution togther ans shape the future.
                        </p>
                        <Button variant="light" className="mt-3 ms-1">Contact Me</Button>
                    </Col>
                    <Col md={6} className="text-end mt-5 mt-md-0">
                        <div className="profile-container">
                            <div className="custom-frame ms-auto p-3 position-relative bg-dark">
                                <img src={profileImage} alt="" className="profile-image object-fit-cover" />
                                <div style={{ width: '107%', aspectRatio: '1/1', left: '-8%' }} className="position-absolute translate-middle-y top-50 z-n1 overflow-hidden">
                                    <img className="object-fit-cover" style={{ width: '100%', aspectRatio: '1/1', animation: '50s linear infinite patternRotate' }} src={pattern} alt="" />
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="position-absolute d-flex flex-column row-gap-2 fs-4 top-50 end-0 translate-middle text-center p-0" style={{width: '35px'}}>
                        {
                            ['linkedin', 'github', 'instagram', 'whatsapp'].map((i) => {
                                return(
                                    <a href="#" key={i}>
                                        <i className={`bi bi-${i} text-white`}></i>
                                    </a>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;