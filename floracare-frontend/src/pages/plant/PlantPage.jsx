import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Home";

const PlantPage = () => {
    const [plantData, setPlantData] = useState({
        P_name: '',
        P_type: '',
        Age: '',
        Life_span: '',
        Planting_season: '',
        photo_url: '',
    });

    const handleChange = (e) => {
        setPlantData({ ...plantData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/plants', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(plantData),
        });
        if (response.ok) {
            alert('Plant added successfully!');
        } else {
            alert('Failed to add plant');
        }
    };

    return (
        <div className="plant-page" style={styles.pageContainer}>
            <Navbar />
            <h2 style={styles.heading}>Add Plant</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    name="P_name"
                    placeholder="Name"
                    value={plantData.P_name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    name="P_type"
                    placeholder="Type"
                    value={plantData.P_type}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    name="Age"
                    placeholder="Age"
                    type="number"
                    value={plantData.Age}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    name="Life_span"
                    placeholder="Life Span"
                    type="number"
                    value={plantData.Life_span}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    name="Planting_season"
                    placeholder="Planting Season"
                    value={plantData.Planting_season}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    name="photo_url"
                    placeholder="Photo URL"
                    value={plantData.photo_url}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.submitButton}>Add Plant</button>
            </form>
            {/* <Footer /> */}
        </div>
    );
};

const styles = {
    pageContainer: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
    },
    heading: {
        textAlign: 'center',
        fontSize: '2rem',
        color: '#333',
        marginBottom: '20px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    input: {
        padding: '10px',
        margin: '10px 0',
        borderRadius: '4px',
        border: '1px solid #ccc',
        fontSize: '1rem',
    },
    submitButton: {
        padding: '12px',
        backgroundColor: '#4caf50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '1.1rem',
        marginTop: '20px',
    }
};

export default PlantPage;
