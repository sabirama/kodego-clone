import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
  return (
    <section id="sign-in">
      <Container>
        <Row>
          <Col>
            <img src="/auth-bg.png" />
          </Col>
          <Col>
            <h1>Sign In to Your Account</h1>
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Password" />
            <div>
              <div>
                <input type="checkbox" id="sign-in-checkbox" />{" "}
                <label htmlFor="sign-in-checkbox">Remember me</label>
              </div>
              <a href="">Forgot Password</a>
            </div>

            <div>
              <Button> Sign-in</Button>
            </div>

            <div>
              <p> or with</p>

              <div>
                <a href="http://">facebook</a>
                <a href="">google</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SignIn;
