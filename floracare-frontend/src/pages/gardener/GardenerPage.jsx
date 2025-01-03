import { useState } from 'react';
import Navbar from "../../components/Navbar";
import Footer from '../../components/Footer';

const GardenerPage = () => {
    const [gardenerData, setGardenerData] = useState({
        G_name: '',
        Phone: '',
        Experience_level: '',
        Specialization: '',
        image: 'https://globebag.com/cdn/shop/articles/0Wla2d4esIg1oG4HC3wtUClWqJafIm0h1695912078.jpg?v=1696010857',
        isAdmin: false,
    });

    const handleChange = (e) => {
        setGardenerData({ ...gardenerData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/gardeners', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(gardenerData),
        });
        if (response.status === 201) alert('Gardener added successfully!');
    };

    return (
        <div className="gardener-page">
            <Navbar />
            <h2>Add Gardener</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="G_name"
                    placeholder="Name"
                    value={gardenerData.G_name}
                    onChange={handleChange}
                    required
                />
                <input
                    name="Phone"
                    placeholder="Phone"
                    value={gardenerData.Phone}
                    onChange={handleChange}
                    type="text"
                    required
                />
                <input
                    name="Experience_level"
                    placeholder="Experience Level"
                    value={gardenerData.Experience_level}
                    onChange={handleChange}
                    required
                />
                <input
                    name="Specialization"
                    placeholder="Specialization"
                    value={gardenerData.Specialization}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="image"
                    placeholder="Image URL"
                    value={gardenerData.image}
                    onChange={handleChange}
                    required
                />
                {/* <input
                    name="isAdmin"
                    placeholder="Is Admin (0 or 1)"
                    value={gardenerData.isAdmin}
                    onChange={handleChange}
                    type="number"
                    required
                /> */}
                <button type="submit">Add Gardener</button>
            </form>
            {/* <Footer /> */}

            {/* Inline CSS */}
            <style jsx>{`
                .gardener-page {
                    padding: 20px;
                    background-color: #f9f9f9;
                    font-family: Arial, sans-serif;
                }

                h2 {
                    text-align: center;
                    color: #333;
                }

                form {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                    max-width: 400px;
                    margin: 0 auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                input, textarea {
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    font-size: 16px;
                    width: 100%;
                }

                button {
                    padding: 10px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 16px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                button:hover {
                    background-color: #45a049;
                }

                textarea {
                    resize: vertical;
                    height: 100px;
                }
            `}</style>
        </div>
    );
};

export default GardenerPage;
