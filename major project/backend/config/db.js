import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

// MongoDB Connection URI
// For local MongoDB: 'mongodb://localhost:27017/medibot'
// For MongoDB Atlas: 'mongodb+srv://<username>:<password>@cluster.mongodb.net/medibot'
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/medibot';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    // Fall back to in-memory storage if MongoDB is not available
    console.log('Falling back to in-memory storage');
  }
};

export default mongoose;
