// db.js
const mysql = require('mysql2');

// Create a connection pool to the MySQL server
const pool = mysql.createPool({
    host: '127.0.0.1', // Use IPv4 address
    user: 'root',      // Replace with your MySQL username
    password: '',      // Replace with your MySQL password
    database: 'taskdb', // Replace with the desired database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  

module.exports = pool.promise();
