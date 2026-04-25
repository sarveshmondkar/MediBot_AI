import mongoose from 'mongoose';

const medicineSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  uses: { type: String },
  stock: { type: Number, default: 0 },
  image: { type: String }
});

export const Medicine = mongoose.model('Medicine', medicineSchema);
