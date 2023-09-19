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
    name: "About Us",
    path: "/about",
    element: <About />,
  },
  {
    name: "How it works",
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    name: "Courses",
    path: "/courses",
    element: <Courses />,
  },
  {
    name: "Tuition",
    path: "/tuition",
    element: <Tuition />,
  },
  {
    name: "Partners",
    path: "/partners",
    element: <Partners />,
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
    name: "FAQ",
    path: "/faq",
    element: <Faq />,
  },
  {
    name: "Sign-In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Apply now",
    path: "/apply-now",
    element: <ApplyNow />,
  },
];

export default routes;
