import mongoose from 'mongoose';

const healthTipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true }
});

export const HealthTip = mongoose.model('HealthTip', healthTipSchema);
