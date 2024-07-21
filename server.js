// server.js

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs'); // Ensure passwords are hashed
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all routes
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'mydatabase'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// server.js

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs'); // Ensure passwords are hashed
const cors = require('cors');

const app = express();
app.use(cors()); // Enable CORS for all routes
const port = 3000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'mydatabase'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to the database');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
        if (err) return res.json({ success: false, message: 'Database error.' });

        if (results.length > 0) {
            const user = results[0];

            // Plain text comparison (not recommended)
            if (password === user.password) {
                res.json({ success: true, message: 'Login successful!' });
            } else {
                res.json({ success: false, message: 'Incorrect password.' });
            }
        } else {
            res.json({ success: false, message: 'Username not found.' });
        }
    });
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
