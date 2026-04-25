import mongoose from 'mongoose';
import { User } from './models/User.js';
import { Medicine } from './models/Medicine.js';
import { HealthTip } from './models/HealthTip.js';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/medibot';

const medicines = [
  { id: 1, name: 'Paracetamol 500mg', category: 'Pain Relief', price: 2.99, description: 'Relieves pain and reduces fever', uses: 'Headache, Fever, Pain', stock: 100, image: '💊' },
  { id: 2, name: 'Ibuprofen 400mg', category: 'Pain Relief', price: 4.99, description: 'Anti-inflammatory pain reliever', uses: 'Pain, Inflammation, Fever', stock: 80, image: '💊' },
  { id: 3, name: 'Aspirin 325mg', category: 'Pain Relief', price: 3.49, description: 'Pain reliever and fever reducer', uses: 'Headache, Pain, Heart health', stock: 60, image: '💊' },
  { id: 4, name: 'Cetirizine 10mg', category: 'Allergies', price: 3.49, description: 'Antihistamine for allergies', uses: 'Allergies, Hay fever, Itching', stock: 120, image: '💊' },
  { id: 5, name: 'Loratadine 10mg', category: 'Allergies', price: 4.29, description: 'Non-drowsy antihistamine', uses: 'Allergies, Sneezing, Runny nose', stock: 90, image: '💊' },
  { id: 6, name: 'Fexofenadine 180mg', category: 'Allergies', price: 5.99, description: 'Long-lasting allergy relief', uses: 'Allergies, Hives, Itching', stock: 70, image: '💊' },
  { id: 7, name: 'Pseudoephedrine 30mg', category: 'Cold & Flu', price: 4.99, description: 'Decongestant for nasal congestion', uses: 'Cold, Sinus congestion, Flu', stock: 85, image: '🤧' },
  { id: 8, name: 'Dextromethorphan 10mg', category: 'Cold & Flu', price: 3.99, description: 'Cough suppressant', uses: 'Dry cough, Chest congestion', stock: 95, image: '🤧' },
  { id: 9, name: 'Guaifenesin 200mg', category: 'Cold & Flu', price: 4.49, description: 'Expectorant for mucus relief', uses: 'Chest congestion, Cough, Cold', stock: 75, image: '🤧' },
  { id: 10, name: 'Omeprazole 20mg', category: 'Digestion', price: 5.99, description: 'Proton pump inhibitor', uses: 'Acid reflux, Heartburn, GERD', stock: 65, image: '🫃' },
  { id: 11, name: 'Antacid Chewable', category: 'Digestion', price: 2.49, description: 'Fast-acting antacid', uses: 'Indigestion, Heartburn, Acid', stock: 110, image: '🫃' },
  { id: 12, name: 'Buscopan 10mg', category: 'Digestion', price: 6.49, description: 'Anti-spasmodic for stomach cramps', uses: 'Stomach cramps, IBS, Pain', stock: 55, image: '🫃' },
  { id: 13, name: 'Domperidone 10mg', category: 'Nausea', price: 4.99, description: 'Anti-nausea medication', uses: 'Nausea, Vomiting, Motion sickness', stock: 80, image: '🤢' },
  { id: 14, name: 'Ondansetron 4mg', category: 'Nausea', price: 7.99, description: 'Anti-emetic for nausea control', uses: 'Nausea, Post-surgery, Chemotherapy', stock: 45, image: '🤢' },
  { id: 15, name: 'Vitamin C 1000mg', category: 'Vitamins', price: 5.99, description: 'Immune system booster', uses: 'Immunity, Cold prevention, Energy', stock: 150, image: '💊' },
  { id: 16, name: 'Vitamin D3 1000IU', category: 'Vitamins', price: 4.99, description: 'Essential for bone health', uses: 'Bone health, Immunity, Mood', stock: 130, image: '💊' },
  { id: 17, name: 'Multivitamin Complex', category: 'Vitamins', price: 8.99, description: 'Complete daily vitamin supplement', uses: 'Energy, Immunity, Overall health', stock: 100, image: '💊' },
  { id: 18, name: 'Calcium 500mg', category: 'Vitamins', price: 3.99, description: 'Essential mineral supplement', uses: 'Bone health, Teeth, Muscles', stock: 120, image: '💊' },
  { id: 19, name: 'Bandages Large', category: 'First Aid', price: 2.99, description: 'Sterile wound dressings', uses: 'Wounds, Cuts, Scrapes', stock: 200, image: '🩹' },
  { id: 20, name: 'Antiseptic Cream', category: 'First Aid', price: 3.49, description: 'Wound infection prevention', uses: 'Cuts, Burns, Scrapes', stock: 90, image: '🩹' },
];

const healthTips = [
  { title: 'Stay Hydrated', content: 'Drink at least 8 glasses of water daily to maintain good health.', category: 'General' },
  { title: 'Get Enough Sleep', content: 'Aim for 7-9 hours of sleep per night for optimal health.', category: 'General' },
  { title: 'Exercise Regularly', content: '30 minutes of moderate exercise daily can improve your health.', category: 'Fitness' },
  { title: 'Eat Balanced Diet', content: 'Include fruits, vegetables, and whole grains in your diet.', category: 'Nutrition' },
  { title: 'Wash Hands Frequently', content: 'Proper hand hygiene prevents many infections.', category: 'Hygiene' },
  { title: 'Manage Stress', content: 'Practice meditation or deep breathing to reduce stress levels.', category: 'Mental Health' },
  { title: 'Regular Check-ups', content: 'Visit your doctor for regular health screenings.', category: 'Prevention' },
  { title: 'Limit Sugar Intake', content: 'Reduce consumption of sugary foods and drinks.', category: 'Nutrition' },
];

export const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Medicine.deleteMany({});
    await HealthTip.deleteMany({});
    console.log('Cleared existing data');

    // Seed medicines
    await Medicine.insertMany(medicines);
    console.log('Seeded medicines');

    // Seed health tips
    await HealthTip.insertMany(healthTips);
    console.log('Seeded health tips');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};
