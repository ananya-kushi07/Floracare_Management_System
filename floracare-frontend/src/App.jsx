import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./pages/Auth/SignUp";
import "./App.css";
import Plant from "./pages/plant/PlantList";
import Gardener from "./pages/gardener/Gardener";
import Fertilizer from "./pages/fertilizer/Fertilizer";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import GardenerDetail from "./pages/gardener/GardenerDetail";


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/gardener" element={<Gardener />} />
          <Route path="/fertilizer" element={<Fertilizer />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/gardener/:id" element={<GardenerDetail />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
