// server.js

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // For hashing passwords

const app = express();
const port = 3000;

// Create a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'your_database'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Query the database
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            const user = results[0];
            
            // Compare passwords
            bcrypt.compare(password, user.password, (err, match) => {
                if (err) throw err;
                
                if (match) {
                    res.json({ success: true, message: 'Login successful!' });
                } else {
                    res.json({ success: false, message: 'Incorrect password.' });
                }
            });
        } else {
            res.json({ success: false, message: 'Username not found.' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
