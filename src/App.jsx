import { Routes, Route } from "react-router-dom";
import routes from "./views/routes";
import Header from "./views/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            ></Route>
          );
        })}
      </Routes>
    </>
  );
}

export default App;
