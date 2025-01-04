import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Plant from "./pages/plant/PlantList";
import Gardener from "./pages/gardener/Gardener";
import Fertilizer from "./pages/fertilizer/Fertilizer";
import ToolsAdd from "./pages/tools/ToolsAdd";
import ContainersAdd from "./pages/container/ContainersAdd";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import GardenerDetail from "./pages/gardener/GardenerDetail";
import PlantPage from "./pages/plant/PlantPage";
import FertilizerPage from "./pages/fertilizer/FertilizerPage";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./redux/api/userApi";
import PrivateRoute from "./components/PrivateRoute";
import ToolsPage from "./pages/tools/ToolsPage";
import ContainersPage from "./pages/container/ContainersPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.auth);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [auth]);

  return (
    <div className="App">
      {/* Routes */}
      <Navbar />   {/* Navbar */}
      <div style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<PrivateRoute><SignUp /></PrivateRoute>} />
          <Route path="/toolsadd" element={<PrivateRoute><ToolsPage /></PrivateRoute>} />
          <Route path="/containersadd" element={<PrivateRoute><ContainersPage /></PrivateRoute>} />
          <Route path="/plant" element={<PrivateRoute><Plant /></PrivateRoute>} />
          <Route path="/tools" element={<PrivateRoute><ToolsAdd /></PrivateRoute>} />
          <Route path="/containers" element={<PrivateRoute><ContainersAdd /></PrivateRoute>} />
          <Route path="/gardener" element={<PrivateRoute><Gardener /></PrivateRoute>} />
          <Route path="/fertilizer" element={<PrivateRoute><Fertilizer /></PrivateRoute>} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/gardener/:id" element={<PrivateRoute><GardenerDetail /></PrivateRoute>} />
          <Route path="/plant" element={<PrivateRoute><PlantPage /></PrivateRoute>} />
          <Route path="/fertilizer" element={<PrivateRoute><FertilizerPage /></PrivateRoute>} />
        </Routes>
      </div>
      <Footer />  {/* Footer */}
    </div>
  );
}

export default App;
