import { Link } from "react-router-dom";
import routes from "../routes";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isActve, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActve);
  };

  return (
    <>
      <header id="main-header">
        <Link to="/" id="home-logo">
          <img src="/kodego-large.svg" alt="" id="home-logo-image" />
        </Link>
        <div>
          <button onClick={toggleClass} id="nav-button">
            {isActve ? <span>X</span> : <span>|||</span>}
          </button>
          <ul id="nav-links-container" className={isActve ? "show" : "hidden"}>
            {routes.map((route, index) => {
              if (index === 0) {
                return null;
              }
              return (
                <li key={index + 1} className="nav-link">
                  <Link to={route.path}>{route.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
