const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "uS!djqs8bdubfcD",
    database: "election",
  },
  console.log("Connected to the election database.")
);

// exports connection
module.exports = db;
