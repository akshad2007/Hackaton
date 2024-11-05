// backend/models/Furniture.js
const mongoose = require('mongoose');

const furnitureSchema = new mongoose.Schema({
    name: String,
    roomType: String, // e.g., "Living Room", "Kitchen"
    theme: String,    // e.g., "Black", "White", "Neutral"
    size: String,     // e.g., "250 Sq Ft", "500 Sq Ft", "750 Sq Ft"
    style: String,    // e.g., "Modern", "Classic", "Rustic"
    image: String,    // Placeholder for image URL or image name
    description: String
});

module.exports = mongoose.model('Furniture', furnitureSchema);
