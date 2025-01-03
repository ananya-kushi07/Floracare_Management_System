import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';

const FertilizerPage = () => {
    const [fertilizerData, setFertilizerData] = useState({
        name: '',
        type: '',
        quantity: '',
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
        if (response.ok) alert('Fertilizer added successfully!');
    };

    return (
        <div className="fertilizer-page">
            <Navbar />
            <h2>Add Fertilizer</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} required />
                <input name="type" placeholder="Type" onChange={handleChange} required />
                <input name="quantity" placeholder="Quantity" onChange={handleChange} type="number" required />
                <button type="submit">Add Fertilizer</button>
            </form>
            <Footer/>
        </div>
    );
};

export default FertilizerPage;
