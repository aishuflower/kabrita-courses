
const express = require('express');
const router = express.Router();

const db = require('../db');

// GET all published courses
router.get('/', (req, res) => {

    const sql = `
        SELECT
            course_id,
            title,
            description,
            image_url,
            duration_hours,
            instructor_name,
            difficulty_level,
            status
        FROM courses
        WHERE status = 'Published'
        ORDER BY course_id ASC
        LIMIT 9
    `;

    db.query(sql, (err, results) => {

        if (err) {
            console.error('Course query error:', err.message);

            return res.status(500).json({
                success: false,
                message: 'Failed to fetch courses',
                error: err.message
            });
        }

        res.json({
            success: true,
            count: results.length,
            courses: results
        });
    });
});

module.exports = router;
