/*eslint-disable*/
import { Routes, Route, useLocation, BrowserRouter, Navigate, Outlet } from "react-router-dom";
import paths from "./utils/paths";
import SignIn from "./views/Sgnin/SignIn";
import SignUp from "./views/Sgnin/SignUp";
import Todos from "./views/Todos/Todos";
import Layout from "./components/Layout";
import "./App.css";

const useAuth = () => {
  const user = { loggedIn: localStorage.getItem("jwtauth") };
  return user && user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Layout /> : <Navigate to="/login" />;
};

function App() {
  return (
      <Routes>
        <Route path={paths.login} element={<SignIn />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Todos />} />
        </Route>
      </Routes>
  );
}

export default App;
