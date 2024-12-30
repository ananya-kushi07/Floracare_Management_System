import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
