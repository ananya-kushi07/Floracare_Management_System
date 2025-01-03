import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Auth/Login";

import SignUp from "./pages/Auth/SignUp";
import Plant from "./pages/plant/PlantList";
import Gardener from "./pages/gardener/Gardener";
import Fertilizer from "./pages/fertilizer/Fertilizer";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import GardenerDetail from "./pages/gardener/GardenerDetail";

import PlantPage from "./pages/plant/PlantPage";
import GardenerPage from "./pages/gardener/GardenerPage";
import FertilizerPage from "./pages/fertilizer/FertilizerPage";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "./redux/api/userApi";
import PrivateRoute from "./components/PrivateRoute";
import ToolsPage from "./pages/tools/ToolsPage";
import ContainersPage from "./pages/container/ContainerPage";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.auth);

  useEffect(() => {
    dispatch(getUserProfile());
  }, [auth]);

  return (
    <div className="App">
      {/* Routes */}
      {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/container" element={<ContainersPage />} />
          <Route path="/plant" element={<PrivateRoute><Plant /></PrivateRoute>} />
          <Route path="/gardener" element={<PrivateRoute><Gardener /></PrivateRoute>} />
          <Route path="/fertilizer" element={<PrivateRoute><Fertilizer /></PrivateRoute>} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/gardener/:id" element={<PrivateRoute><GardenerDetail /></PrivateRoute>} />
          <Route path="/plant" element={<PrivateRoute><PlantPage /></PrivateRoute>} />
          <Route path="/gardener" element={<PrivateRoute><GardenerPage /></PrivateRoute>} />
          <Route path="/fertilizer" element={<PrivateRoute><FertilizerPage /></PrivateRoute>} />
          <Route path="/add" element={<PrivateRoute><GardenerPage /></PrivateRoute>} />
        </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/container" element={<ContainersPage />} />
        <Route path="/plant" element={<Plant />} />
        <Route path="/gardener" element={<Gardener />} />
        <Route path="/fertilizer" element={<Fertilizer />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/gardener/:id" element={<GardenerDetail />} />
        <Route path="/plant" element={<PlantPage />} />
        <Route path="/gardener" element={<GardenerPage />} />
        <Route path="/fertilizer" element={<FertilizerPage />} />
        <Route path="/add" element={<GardenerPage />} />
      </Routes>
    </div>
  );
}

export default App;
