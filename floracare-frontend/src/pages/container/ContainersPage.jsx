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
    C_image: "", // Added C_image field
  });

  const fetchContainers = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/containers");
      if (response.ok) {
        const data = await response.json();
        setContainers(data);
      } else {
        console.error("Failed to fetch containers");
      }
    } catch (error) {
      console.error("Error fetching containers:", error);
    }
  };

  const handleChange = (e) => {
    setNewContainer({ ...newContainer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/containers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContainer),
      });

      if (response.ok) {
        alert("Container added successfully!");
        setNewContainer({ C_name: "", Material: "", Size: "", Color: "", C_image: "" }); // Reset form
        fetchContainers(); // Refresh the list
      } else {
        alert("Failed to add container");
      }
    } catch (error) {
      console.error("Error adding container:", error);
    }
  };

  useEffect(() => {
    fetchContainers();
  }, []);

  const styles = {
    pageContainer: {
      padding: "20px",
      paddingTop: "80px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      minHeight: "100vh",
    },
    heading: {
      textAlign: "center",
      fontSize: "2rem",
      color: "#333",
      marginBottom: "20px",
    },
    listContainer: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    containerCard: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    containerImage: {
      width: "100%",
      height: "200px",
      objectFit: "cover",
      borderRadius: "8px",
    },
    form: {
      marginTop: "30px",
      maxWidth: "500px",
      margin: "0 auto",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    input: {
      padding: "10px",
      margin: "10px 0",
      width: "100%",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
    },
    button: {
      padding: "12px",
      backgroundColor: "#4caf50",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "1rem",
      marginTop: "10px",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#45a049",
    },
  };

  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <h2 style={styles.heading}>Container Management</h2>

      {/* Display Container List */}
      <div style={styles.listContainer}>
        {containers.map((container) => (
          <div key={container.C_id} style={styles.containerCard}>
            <img
              src={container.C_image || "https://via.placeholder.com/250"}
              alt={container.C_name}
              style={styles.containerImage}
            />
            <h3>{container.C_name}</h3>
            <p>Material: {container.Material}</p>
            <p>Size: {container.Size}</p>
            <p>Color: {container.Color}</p>
          </div>
        ))}
      </div>

      {/* Add New Container Form */}
      <h2 style={styles.heading}>Add New Container</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          name="C_name"
          placeholder="Container Name"
          value={newContainer.C_name}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="Material"
          placeholder="Material"
          value={newContainer.Material}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="Size"
          placeholder="Size"
          value={newContainer.Size}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="Color"
          placeholder="Color"
          value={newContainer.Color}
          onChange={handleChange}
          required
          style={styles.input}
        />
        <input
          name="C_image"
          placeholder="Image URL"
          value={newContainer.C_image}
          onChange={handleChange}
          style={styles.input}
        />
        <button
          type="submit"
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Add Container
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default ContainersPage;
