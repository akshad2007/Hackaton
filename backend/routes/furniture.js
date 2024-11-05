const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Read the furniture data from the JSON file
const furnitureDataPath = path.join(__dirname, '../data/furniture.json'); // Adjusted to correctly point to data

// GET furniture data
router.get('/', (req, res) => {
    fs.readFile(furnitureDataPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading furniture data.' });
        }
        res.json(JSON.parse(data));
    });
});

module.exports = router;
