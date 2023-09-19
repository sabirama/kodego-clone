import { Container, Card, Row, Col } from "react-bootstrap";
import "./About.css";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <section id="about">
      <Container id="about-main-text-container">
        <h1>Learn Tech Skills That Employers Demand</h1>
      </Container>

      <Container>
        <Row style={{ width: "2000px" }}>
          <Col className="col-12 col-md-2">
            <Card style={{ width: "18rem", height: "18rem" }}>
              <Card.Img variant="top" src="/industry-driven.png" />
              <Card.Body>
                <Card.Title>Industry-Driven Curriculum</Card.Title>

                <Card.Text>
                  Our curriculum is patterned after in-demand tech skills and
                  soft skills sought by companies
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-12 col-md-2">
            <Card style={{ width: "18rem", height: "18rem" }}>
              <Card.Img variant="top" src="/industry-partners.png" />
              <Card.Body>
                <Card.Title>Hundreds of Industry Partners</Card.Title>

                <Card.Text>
                  We work with global companies that hire our graduates
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-12 col-md-2">
            <Card style={{ width: "18rem", height: "18rem" }}>
              <Card.Img variant="top" src="/hands-on-teaching.png" />
              <Card.Body>
                <Card.Title>Hands-On Teaching</Card.Title>

                <Card.Text>
                  Dedicated instructors adjust to students learning paces
                  whether they are beginners or career-shifters
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col className="col-12 col-md-2">
            <Card style={{ width: "18rem", height: "18rem" }}>
              <Card.Img variant="top" src="/pay-only-when-hired.png" />
              <Card.Body>
                <Card.Title>Pay Only When Hired</Card.Title>

                <Card.Text>
                  Pay a maximum of 17% only once you have secured a job
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
