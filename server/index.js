const express = require('express');
const mongoose = require('mongoose');
const profileRoutes = require('./Routes/ProfileRoutes');

const app = express();

mongoose.connect('mongodb://localhost:27017/bchealth', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

app.use('/profile', profileRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
