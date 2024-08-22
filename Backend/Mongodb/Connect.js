const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
  
  try {
    await mongoose.connect(process.env.MONOGO_URL);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Database connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

