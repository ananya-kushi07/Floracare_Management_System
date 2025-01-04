import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';

const FertilizerPage = () => {
    const [fertilizerData, setFertilizerData] = useState({
        F_name: '',
        F_type: '',
        F_quantity: '',
    });

    const handleChange = (e) => {
        setFertilizerData({ ...fertilizerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/fertilizers', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fertilizerData),
        });
        if (response.ok) {
            alert('Fertilizer added successfully!');
            setFertilizerData({ F_name: '', F_type: '', F_quantity: '' }); // Reset form
        } else {
            alert('Failed to add fertilizer');
        }
    };

    return (
        <div className="fertilizer-page" style={styles.pageContainer}>
            <Navbar />
            <h2 style={styles.heading}>Add Fertilizer</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    name="F_name"
                    placeholder="Fertilizer Name"
                    value={fertilizerData.F_name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    name="F_type"
                    placeholder="Fertilizer Type"
                    value={fertilizerData.F_type}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    name="F_quantity"
                    placeholder="Quantity (kg)"
                    value={fertilizerData.F_quantity}
                    onChange={handleChange}
                    type="number"
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.submitButton}>Add Fertilizer</button>
            </form>
            <Footer />
        </div>
    );
};

const styles = {
    pageContainer: {
        padding: '20px',
        paddingTop: '80px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
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

export default FertilizerPage;
