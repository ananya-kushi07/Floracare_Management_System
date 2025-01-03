import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ToolsPage = () => {
  const [tools, setTools] = useState([]);
  const [newTool, setNewTool] = useState({
    T_name: "",
    T_type: "",
    T_PowerSource: "",
  });

  // Fetch all tools from the backend
  const fetchTools = async () => {
    const response = await fetch("http://localhost:5000/api/tools");
    if (response.ok) {
      const data = await response.json();
      setTools(data);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setNewTool({ ...newTool, [e.target.name]: e.target.value });
  };

  // Handle form submission for adding a new tool
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/tools", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTool),
    });

    if (response.ok) {
      alert("Tool added successfully!");
      fetchTools(); // Refresh tool list after adding
    }
  };

  // Fetch tools when the component mounts
  useEffect(() => {
    fetchTools();
  }, []);

  return (
    <div className="tools-page">
      <Navbar />
      <h2>Tools List</h2>
      <div className="tools-list">
        {tools.map((tool) => (
          <div key={tool.T_id} className="tool-item">
            <h3>{tool.T_name}</h3>
            <p>Type: {tool.T_type}</p>
            <p>Power Source: {tool.T_PowerSource}</p>
          </div>
        ))}
      </div>

      <h2>Add New Tool</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="T_name"
          placeholder="Tool Name"
          onChange={handleChange}
          required
        />
        <input
          name="T_type"
          placeholder="Tool Type"
          onChange={handleChange}
          required
        />
        <input
          name="T_PowerSource"
          placeholder="Power Source"
          onChange={handleChange}
          required
        />
        <button type="submit">Add Tool</button>
      </form>

      <Footer />
    </div>
  );
};

export default ToolsPage;
