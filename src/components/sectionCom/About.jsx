import { Card, Col, Container, Row } from "react-bootstrap";
import Heading from "../helperCom/Heading";
import aboutMeImage from "../../images/person.png";

const About = () => {
  return (
    <section className="py-5 text-center text-white">
      <Container>
        <Row className="py-5">
          <Heading />
          <Col md={5} xs={12} className="mb-4">
            <img src={aboutMeImage} alt="About Me" className="img-fluid rounded" />
          </Col>
          <Col md={7} xs={12}>
            <Card className="p-4 shadow-sm border-0 text-start bg-dark text-white">
              <Card.Body>
                <h2 className="border-start border-2 border-danger ps-3">About Me</h2>
                <h4 className="ps-3">Hello, my name is Dabhi Rutan and I full stack developer</h4>
                <p className="opacity-50 ps-3">
                  Hello, I am Rutam Dabhi. I am full stack developer with the goal of advancing my career and participating in inspiring projects. I am 16+ years old and I am currently studying in Diploma Computer Engineering Semester-3 in Swarrnim Startup and Innovation University. I am concentrating on developing my skills and I am proud of myself that I am a full stack developer.
                </p>

                <h2 className="border-start border-2 border-danger ps-3 mt-4">Technologies and Skills</h2>
                <div className="d-flex flex-wrap gap-2 ps-3">
                  {["HTML", "CSS", "Jquery", "Bootstrap", "React JS", "JavaScript", "Node JS", "Express JS", "Mongo db"].map((skill) => (
                    <span key={skill} className="badge bg-dark text-white text-opacity-50 border-bottom border-light border-opacity-75 px-3 py-2 rounded-pill">{skill}</span>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;