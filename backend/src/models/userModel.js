const db = require('../config/dbConfig');

const GardenerModel = {
    // Fetch all gardeners
    getAllGardeners: (callback) => {
        const query = 'SELECT * FROM gardeners';
        db.query(query, (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },

    // Add a new gardener
    addGardener: (gardenerData, callback) => {
        const query = 'INSERT INTO gardeners (G_name, Phone, Experience_level, Specialization, isAdmin, password, email) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [
            gardenerData.G_name,
            gardenerData.Phone,
            gardenerData.Experience_level,
            gardenerData.Specialization,
            gardenerData.isAdmin,
            gardenerData.password,
            gardenerData.email,
        ];
        db.query(query, values, (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },

    // Update an existing gardener
    updateGardener: (G_id, gardenerData, callback) => {
        const query = 'UPDATE gardeners SET G_name = ?, Phone = ?, Experience_level = ?, Specialization = ?, isAdmin = ?, password = ?, email = ? WHERE G_id = ?';
        const values = [
            gardenerData.G_name,
            gardenerData.Phone,
            gardenerData.Experience_level,
            gardenerData.Specialization,
            gardenerData.isAdmin,
            gardenerData.password,
            gardenerData.email,
            G_id,
        ];
        db.query(query, values, (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },

    // Delete a gardener
    deleteGardener: (G_id, callback) => {
        const query = 'DELETE FROM gardeners WHERE G_id = ?';
        db.query(query, [G_id], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results);
        });
    },

    // Fetch a gardener by email
    getGardenerByEmail: (email, callback) => {
        const query = 'SELECT * FROM gardeners WHERE email = ?';
        db.query(query, [email], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results[0]); // Assuming email is unique, return the first result
        });
    },
    // Fetch a gardener by id
    getGardenerById: (id, callback) => {
        const query = 'SELECT * FROM gardeners WHERE G_id = ?';
        db.query(query, [id], (err, results) => {
            if (err) return callback(err, null);
            callback(null, results[0]); // Assuming email is unique, return the first result
        });
    },
};

module.exports = GardenerModel;
