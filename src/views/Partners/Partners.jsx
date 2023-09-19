import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Partners.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Partners = () => {
  return (
    <section id="partners">
      <Container>
        <img src="/Frame2.About.png" alt="" />
        <h1>Get Top Talent from the Philippines` #1 Tech Bootcamp!</h1>
        <hr />
        <p>
          KodeGo democratizes education by providing quality and accessible
          education to Filipinos. Running fully online tech bootcamps since
          2021, we transform beginners and career shifters into highly skilled
          professionals equipped with in-demand skills in various technologies.
        </p>
      </Container>

      <Container>
        <h1>Find the Perfect Talent for Your Team</h1>
        <p>
          KodeGo graduates are rigorously trained under an industry-driven
          curriculum and have hands-on experience in building real-world
          projects. Fulfill tech stack requirements with competent talent ready
          to augment your team.
        </p>
      </Container>

      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  Fundamentals of both frontend and backend development.
                </Card.Text>
                <Button variant="primary">View Curriculum</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Mobile App Development</Card.Title>
                <Card.Text>
                  Creation of functional mobile applications for Android
                  operating systems.
                </Card.Text>
                <Button variant="primary">View Curriculum</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>UX Design</Card.Title>
                <Card.Text>
                  Wireframing, prototyping, and the human-centered design
                  process.
                </Card.Text>
                <Button variant="primary">View Curriculum</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h1>Industry-Driven Skills</h1>
            <p>
              We have developed diverse curriculums that address the needs,
              standards, and best practices of the IT industry to equip our
              students with the practical knowledge and skills that companies
              seek after.
            </p>
          </Col>
          <Col>
            <img src="" alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="" alt="" />
          </Col>
          <Col>
            <h1>Hard & Soft Skills Training</h1>
            <p>
              Aside from mastery of in-demand tech stacks, KodeGo helps students
              develop key soft skills that tech professionals must possess, such
              as good communication skills, problem solving skills, leadership
              skills, and creativity.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>No Placement Fees</h1>
            <p>
              Easily fill tech positions in your company with our 3-step
              recruitment process and hire directly from KodeGo with NO
              RECRUITMENT FEES.
            </p>
          </Col>
          <Col>
            <img src="" alt="" />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1>Our Current Partners</h1>
        <p>
          KodeGo has over 200 company partners across various industries in the
          Philippines, Singapore, India, and other parts of the world, making us
          one of the leading tech talent providers in the industry.
        </p>
      </Container>
      <Container>
        <h1>Hire Tech Talent from KodeGo Today!</h1>
        <p>
          Fast-track your recruitment process and hire talented IT professionals
          from KodeGo.
        </p>
        <Button>Book an Appointment</Button>
      </Container>
    </section>
  );
};

export default Partners;
