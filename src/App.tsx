import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import routes from "./routes";

function App() {
  return (
    <>
      <ToastContainer position="top-center" />
      <Router>
        <Routes>
          {routes.map((route, index) => {
            const { path, component: Component } = route;
            return (
              <Route
                key={index}
                path={path}
                element={<Component />}
              />
            );
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;