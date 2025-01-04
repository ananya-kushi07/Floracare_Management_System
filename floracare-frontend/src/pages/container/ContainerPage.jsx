import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ContainersPage = () => {
  const [containers, setContainers] = useState([]);
  const [newContainer, setNewContainer] = useState({
    C_name: "",
    Material: "",
    Size: "",
    Color: "",
  });

  const fetchContainers = async () => {
    const response = await fetch("http://localhost:5000/api/containers");
    if (response.ok) {
      const data = await response.json();
      setContainers(data);
    }
  };

  const handleChange = (e) => {
    setNewContainer({ ...newContainer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/containers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContainer),
    });

    if (response.ok) {
      alert("Container added successfully!");
      fetchContainers();
    }
  };

  useEffect(() => {
    fetchContainers();
  }, []);

  const containerPageStyle = {
    padding: "50px",
    fontFamily: "'Roboto', sans-serif",
    color: "#333",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#4A0670",
  };

  const containersListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
  };

  const containerItemStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const containerItemTitleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#4A0670",
  };

  const containerItemTextStyle = {
    margin: "5px 0",
    fontSize: "14px",
    color: "#555",
  };

  const formStyle = {
    marginTop: "30px",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    padding: "10px",
    margin: "10px 0",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "4px",
    fontSize: "14px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#4A0670",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#6b1f9e",
  };

  return (
    <div style={containerPageStyle}>
      <h2 style={headerStyle}>Containers List</h2>
      <div style={containersListStyle}>
        {containers.map((container) => (
          <div key={container.C_id} style={containerItemStyle}>
            <h3 style={containerItemTitleStyle}>{container.C_name}</h3>
            <p style={containerItemTextStyle}>Material: {container.Material}</p>
            <p style={containerItemTextStyle}>Size: {container.Size}</p>
            <p style={containerItemTextStyle}>Color: {container.Color}</p>
          </div>
        ))}
      </div>

      <h2 style={headerStyle}>Add New Container</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          name="C_name"
          placeholder="Container Name"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="Material"
          placeholder="Material"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="Size"
          placeholder="Size"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="Color"
          placeholder="Color"
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Add Container
        </button>
      </form>
    </div>
  );
};

export default ContainersPage;
