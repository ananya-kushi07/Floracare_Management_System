import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
// import HomePage from './pages/HomePage';
// import PlantPage from './pages/PlantPage';
// import GardenerPage from './pages/GardenerPage';
// import FertilizerPage from './pages/FertilizerPage';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/plant" element={<PlantPage />} />
        <Route path="/gardener" element={<GardenerPage />} />
        <Route path="/fertilizer" element={<FertilizerPage />} /> */}
        </Routes>
    </Router>
  );
};

export default AppRouter;
