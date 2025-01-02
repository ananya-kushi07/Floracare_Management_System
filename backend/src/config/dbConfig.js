const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',       // Replace with your database host
  user: 'root',            // Replace with your database user
  password: '4SF22CS220',    // Replace with your database password
  database: 'floracare',   // Replace with your database name
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

module.exports = db;
