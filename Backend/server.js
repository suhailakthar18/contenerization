const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const mongoURI = process.env.MONGODB_URI || 'mongodb://mongo:27017/your-database'; // Use 'mongo' as the service name
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
const itemRoutes = require('./routes/itemRoutes');
app.use('/items', itemRoutes);

// Start the server
const PORT = process.env.PORT || 5000;  // Use environment variable for port
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));

