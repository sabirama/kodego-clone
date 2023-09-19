import Home from "./Home/Home";
import About from "./About/About";
import ApplyNow from "./ApplyNow/ApplyNow";
import Blog from "./Blog/Blog";
import Careers from "./Careers/Careers";
import Courses from "./Courses/Courses";
import Faq from "./Faq/Faq";
import HowItWorks from "./HowItWorks/HowItWorks";
import Partners from "./Partners/Partners";
import SignIn from "./SignIn/SignIn";
import Tuition from "./Tuition/Tuition";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },

  {
    name: "Blog",
    path: "/blog",
    element: <Blog />,
  },
  {
    name: "Careers",
    path: "/careers",
    element: <Careers />,
  },
  {
    name: "Courses",
    path: "/courses",
    element: <Courses />,
  },
  {
    name: "FAQ",
    path: "/faq",
    element: <Faq />,
  },
  {
    name: "How it works",
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    name: "About",
    path: "/about",
    element: <ApplyNow />,
  },
  {
    name: "Partners",
    path: "/partners",
    element: <Partners />,
  },
  {
    name: "Sign-In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Tuition",
    path: "/tuition",
    element: <Tuition />,
  },
];

export default routes;
