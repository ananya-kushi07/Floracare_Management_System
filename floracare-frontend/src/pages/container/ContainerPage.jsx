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

  // Fetch all containers from the backend
  const fetchContainers = async () => {
    const response = await fetch("http://localhost:5000/api/containers");
    if (response.ok) {
      const data = await response.json();
      setContainers(data);
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setNewContainer({ ...newContainer, [e.target.name]: e.target.value });
  };

  // Handle form submission for adding a new container
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
      fetchContainers(); // Refresh container list after adding
    }
  };

  // Fetch containers when the component mounts
  useEffect(() => {
    fetchContainers();
  }, []);

  // Inline styles in JS
  const containerPageStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const containersListStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  };

  const containerItemStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    width: "200px",
    backgroundColor: "#f9f9f9",
  };

  const containerItemTitleStyle = {
    fontSize: "18px",
    marginBottom: "10px",
  };

  const containerItemTextStyle = {
    margin: "5px 0",
  };

  const formStyle = {
    marginTop: "20px",
  };

  const inputStyle = {
    padding: "10px",
    margin: "10px 0",
    width: "100%",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#4A0670",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    backgroundColor: "#6b1f9e",
  };

  return (
    <div style={containerPageStyle}>
      <Navbar />
      <h2>Containers List</h2>
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

      <h2>Add New Container</h2>
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
        <button type="submit" style={buttonStyle} onMouseOver={e => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={e => e.target.style.backgroundColor = buttonStyle.backgroundColor}>
          Add Container
        </button>
      </form>

      <Footer />
    </div>
  );
};

export default ContainersPage;
