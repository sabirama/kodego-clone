import { Container, Card, Accordion, Button } from "react-bootstrap";
import "./Courses.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Courses = () => {
  return (
    <section id="courses">
      <Container id="courses-text-container">
        <h1 id="container-main-text">Courses</h1>
        <p id="container-sub-text">Build your tech career.</p>
      </Container>

      <Container>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header />
            <Accordion.Body style={{ display: "flex" }}>
              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="/public/courses/Full_Stack_Web_Development_Night_Classes.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    Full-Stack Web Development (Day Classes)
                  </Card.Title>
                  <Card.Text>
                    Become a full-stack web developer with the fundamentals of
                    both front-end and back-end web development. Enroll now!
                  </Card.Text>
                  <span>Starts September 29, 2023</span>

                  <Card.Footer>
                    <span>32/40 enrolled</span>
                    <Button
                      variant="primary"
                      className="courses-learn-more-button"
                    >
                      Learn More
                    </Button>
                  </Card.Footer>
                </Card.Body>
              </Card>

              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="/public/courses/Full_Stack_Web_Development_Night_Classes_Regular_Classes_on_Saturdays.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    Full-Stack Web Development (Night Classes + Day Classes on
                    Sat)
                  </Card.Title>
                  <Card.Text>
                    Become a full-stack web developer with the fundamentals of
                    both front-end and back-end web development.
                  </Card.Text>
                  <span>Starts September 29, 2023</span>

                  <Card.Footer>
                    <span>31/40 enrolled</span>
                    <Button
                      variant="primary"
                      className="courses-learn-more-button"
                    >
                      Learn More
                    </Button>
                  </Card.Footer>
                </Card.Body>
              </Card>

              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="/public/courses/Full_Stack_Web_Development_Regular_Classes.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    Full-Stack Web Development (Night Classes)
                  </Card.Title>
                  <Card.Text>
                    Our new schedule is designed to accommodate your busy life
                    while equipping you with the fundamentals of front-end and
                    back-end web development.
                  </Card.Text>
                  <span> Starts September 28, 2023</span>
                  <Card.Footer>
                    <span>30/40 enrolled</span>
                    <Button
                      variant="primary"
                      className="courses-learn-more-button"
                    >
                      Learn More
                    </Button>
                  </Card.Footer>
                </Card.Body>
              </Card>

              <Card style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src="/public/courses/General_Virtual_Assistant_Night_Classes_JPG.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    General Virtual Assistant (Night Classes)
                  </Card.Title>
                  <Card.Text>
                    8-day comprehensive training in client coordination, event
                    management, and more. Pay ₱4,000 upfront or reserve your
                    slot for only ₱2,000! Enroll now.
                  </Card.Text>
                  <span> Starts September 28, 2023</span>
                  <Card.Footer>
                    <span>35/45 enrolled</span>
                    <Button
                      variant="primary"
                      className="courses-learn-more-button"
                    >
                      Learn More
                    </Button>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default Courses;
