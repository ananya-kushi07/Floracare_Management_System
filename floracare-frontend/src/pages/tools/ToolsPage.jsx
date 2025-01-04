import { useState } from "react";
import Navbar from "../../components/Navbar";

const ToolsPage = () => {
    const [toolData, setToolData] = useState({
        T_name: '',
        T_type: '',
        T_PowerSource: '',
        T_image: '', // Added T_image field
    });

    const handleChange = (e) => {
        setToolData({ ...toolData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/tools', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(toolData),
        });
        if (response.ok) {
            alert('Tool added successfully!');
            setToolData({ T_name: '', T_type: '', T_PowerSource: '', T_image: '' }); // Reset form
        } else {
            alert('Failed to add tool');
        }
    };

    return (
        <div className="tools-page" style={styles.pageContainer}>
            <Navbar />
            <h2 style={styles.heading}>Add Tool</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    name="T_name"
                    placeholder="Tool Name"
                    value={toolData.T_name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    name="T_type"
                    placeholder="Tool Type"
                    value={toolData.T_type}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    name="T_PowerSource"
                    placeholder="Power Source"
                    value={toolData.T_PowerSource}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <input
                    name="T_image"
                    placeholder="Image URL"
                    value={toolData.T_image}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.submitButton}>Add Tool</button>
            </form>
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

export default ToolsPage;
