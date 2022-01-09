import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Sidebar from "./components/Sidebar";
const Login = lazy(() => import("./pages/Login"));
// const Register = lazy(() => import("./pages/Register"));
const Welcome = lazy(() => import("./pages/Welcome"));
const Parish = lazy(() => import("./pages/Parish"));
const Shepherd = lazy(() => import("./pages/Shepherd"));

const App = () => {
  return (
    <div className="main">
      <Router>
        <Sidebar />
        <div className="content">
          <Routes>
            <Route exact path="/parish" element={<PrivateRoute />}>
              <Route
                exact
                path="/parish"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Parish />
                  </Suspense>
                }
              />
            </Route>
            <Route exact path="/shepherd" element={<PrivateRoute />}>
              <Route
                exact
                path="/shepherd"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <Shepherd />
                  </Suspense>
                }
              />
            </Route>

            <Route
              exact
              path="/login"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Login />
                </Suspense>
              }
            />
            <Route
              exact
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Welcome />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
