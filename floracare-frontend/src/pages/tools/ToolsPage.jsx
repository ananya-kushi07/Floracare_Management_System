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

  // Inline styles for professional look
  const pageStyle = {
    padding: "50px",
    fontFamily: "Times New Roman, sans-serif",
    color: "#333",
    backgroundColor: "#f4f4f9",
    minHeight: "100vh",
  };

  const titleStyle = {
    fontSize: "24px",
    marginBottom: "20px",
    textAlign: "center",
    color: "#4A0670",
  };

  const toolsListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  };

  const toolItemStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const toolItemTitleStyle = {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#4A0670",
  };

  const formStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4A0670",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    textTransform: "uppercase",
  };

  const buttonHoverStyle = {
    backgroundColor: "#6b1f9e",
  };

  return (
    <div style={pageStyle}>
      <h2 style={titleStyle}>Tools List</h2>
      <div style={toolsListStyle}>
        {tools.map((tool) => (
          <div key={tool.T_id} style={toolItemStyle}>
            <h3 style={toolItemTitleStyle}>{tool.T_name}</h3>
            <p>Type: {tool.T_type}</p>
            <p>Power Source: {tool.T_PowerSource}</p>
          </div>
        ))}
      </div>

      <h2 style={titleStyle}>Add New Tool</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          name="T_name"
          placeholder="Tool Name"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="T_type"
          placeholder="Tool Type"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="T_PowerSource"
          placeholder="Power Source"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = buttonStyle.backgroundColor)
          }
        >
          Add Tool
        </button>
      </form>
    </div>
  );
};

export default ToolsPage;
