import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Careers = () => {
  return (
    <section id="careers">
      <Container>
        <Row>
          <Col className="col-4">
            <img src="" alt="" />
          </Col>
          <Col className="col-8">
            <h1>Become a KodeGeek Instructor today!</h1>
            <p>
              Be a part of a movement that’s shaping the next generation of
              Filipino IT professionals
            </p>
            <ul>
              <li>100% Remote</li>
              <li>Internet Allowance</li>
              <li>Competitive Salary</li>
              <li>Teaching Material Support</li>
            </ul>

            <Button>Apply as Instructor</Button>

            <h1>Become One of Our Instructors!</h1>
            <p>
              Think you have the skills that could help our KodeGo students be
              tech talents? Then check out our listings below to apply!
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <input type="text" value="search" />

        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Full-Stack Web Development</Card.Title>
                <Card.Text>
                  Teach well designed, testable, and efficient code for web
                  applications using established frameworks
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Mobile App Development</Card.Title>
                <Card.Text>
                  This course aims to build an individual’s mobile development
                  for Android using Kotlin and other frameworks.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>UX Design Instructor</Card.Title>
                <Card.Text>
                  Teach the fundamentals and processes of designing excellent
                  Product experiences.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>
                  Full-Stack Web Development Instructor (Full-Time or Part-Time)
                </Card.Title>
                <Card.Text>
                  Teach well designed, testable, and efficient code for web
                  applications using established frameworks
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Careers;
