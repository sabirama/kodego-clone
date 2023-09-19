import { Link } from "react-router-dom";
import routes from "../routes";

const Header = () => {
  return (
    <div>
      <span>LOGO</span>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/how-it-works">How it works</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/tuition">Tuition</Link>
          </li>
          <li>
            <Link to="/partners">Partners</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/careers">Careers</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign-in</Link>
          </li>
          <li>
            <Link to="/apply-now">Apply now</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
