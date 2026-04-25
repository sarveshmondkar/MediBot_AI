import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  healthProfile: {
    age: { type: Number, default: null },
    gender: { type: String, default: "" },
    height: { type: Number, default: null },
    weight: { type: Number, default: null },
    bloodGroup: { type: String, default: "" },

    previousDiseases: { type: [String], default: [] },
    currentMedications: { type: [String], default: [] },
    allergies: { type: [String], default: [] },
    pastSurgeries: { type: [String], default: [] }
  }
  ,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const User = mongoose.model('User', userSchema);
