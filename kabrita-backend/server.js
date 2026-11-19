
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./db');
const courseRoutes = require('./routes/courseRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Kabrita Backend is Running!');
});

// Database test route
app.get('/api/db-test', (req, res) => {
    db.query('SELECT DATABASE() AS database_name', (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.json({
            success: true,
            message: 'MySQL Connected Successfully!',
            database: result[0].database_name
        });
    });
});

// Courses route
app.use('/api/courses', courseRoutes);

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
