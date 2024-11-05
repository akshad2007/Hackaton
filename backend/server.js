const express = require('express');
const cors = require('cors');
const path = require('path');
const furnitureRoutes = require('./routes/furniture.js');

const app = express();
app.use(cors());
app.use(express.json());

// Log all static requests to verify path
app.use('/images', express.static(path.join(__dirname, 'images')), (req, res, next) => {
    console.log(`Serving static file: ${req.url}`);
    next();
});

// Use furniture routes
app.use('/api/furniture', furnitureRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
