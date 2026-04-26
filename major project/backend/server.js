import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 5000;

// MongoDB Connection URI
// For local MongoDB: 'mongodb://localhost:27017/medibot'
// For MongoDB Atlas: 'mongodb+srv://<username>:<password>@cluster.mongodb.net/medibot'
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/medibot';

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('MediBot Backend is running successfully! Use /api/... endpoints to access data.');
});

// MongoDB Models
import { User } from './models/User.js';
import { Medicine } from './models/Medicine.js';
import { Cart } from './models/Cart.js';
import { Order } from './models/Order.js';
import { HealthTip } from './models/HealthTip.js';

// Categories
const categories = ['Pain Relief', 'Allergies', 'Cold & Flu', 'Digestion', 'Nausea', 'Vitamins', 'First Aid'];

// Symptom recommendations data
const symptomData = {
  headache: { medicines: ['Paracetamol', 'Ibuprofen', 'Aspirin'], advice: 'Rest in a quiet, dark room. Stay hydrated.' },
  fever: { medicines: ['Paracetamol', 'Ibuprofen', 'Acetaminophen'], advice: 'Drink plenty of fluids. Rest and monitor temperature.' },
  cold: { medicines: ['Cetirizine', 'Loratadine', 'Pseudoephedrine'], advice: 'Stay warm, drink hot liquids, get plenty of rest.' },
  cough: { medicines: ['Dextromethorphan', 'Guaifenesin', 'Honey'], advice: 'Stay hydrated, use humidifier, avoid irritants.' },
  'stomach pain': { medicines: ['Antacid', 'Omeprazole', 'Buscopan'], advice: 'Avoid spicy foods, eat light meals, stay hydrated.' },
  allergy: { medicines: ['Cetirizine', 'Loratadine', 'Fexofenadine'], advice: 'Avoid allergens, keep windows closed, use air purifier.' },
  'body pain': { medicines: ['Ibuprofen', 'Paracetamol', 'Naproxen'], advice: 'Rest, apply heat or ice, gentle massage.' },
  nausea: { medicines: ['Domperidone', 'Ondansetron', 'Ginger tablets'], advice: 'Eat small meals, stay hydrated, avoid strong odors.' }
};

// Connect to MongoDB
let isMongoConnected = false;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB Connected Successfully');
    isMongoConnected = true;
    
    // Seed initial data if database is empty
    await seedInitialData();
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    console.log('Falling back to in-memory storage');
    isMongoConnected = false;
  }
};

const seedInitialData = async () => {
  const medicineCount = await Medicine.countDocuments();
  if (medicineCount === 0) {
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
    await Medicine.insertMany(medicines);
    console.log('Initial medicines seeded');
  }

  const tipCount = await HealthTip.countDocuments();
  if (tipCount === 0) {
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
    await HealthTip.insertMany(healthTips);
    console.log('Initial health tips seeded');
  }
};

// In-memory storage (fallback)
const users = [];
const carts = {};
const orders = {};

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  
  if (isMongoConnected) {
    try {
      const user = await User.findOne({ email, password });
      if (user) {
        res.json({ 
          success: true, 
          message: 'Login successful',
          user: { id: user._id, name: user.name, email: user.email }
        });
      } else {
        res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  } else {
    // Fallback to in-memory
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      if (!carts[user.id]) carts[user.id] = [];
      res.json({ 
        success: true, 
        message: 'Login successful',
        user: { id: user.id, name: user.name, email: user.email }
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
  }
});

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  
  if (isMongoConnected) {
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ success: false, message: 'Email already registered' });
      }
      
      const newUser = await User.create({ name, email, password });
      res.json({ 
        success: true, 
        message: 'Signup successful',
        user: { id: newUser._id, name: newUser.name, email: newUser.email }
      });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Server error' });
    }
  } else {
    // Fallback to in-memory
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }
    
    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      createdAt: new Date()
    };
    
    users.push(newUser);
    carts[newUser.id] = [];
    
    res.json({ 
      success: true, 
      message: 'Signup successful',
      user: { id: newUser.id, name: newUser.name, email: newUser.email }
    });
  }
});

// GET profile
app.get('/api/profile/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).select("-password");
    res.json({ success: true, data: user.healthProfile || {} });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// UPDATE profile
app.put('/api/update-health', async (req, res) => {
  try {
    const { userId, healthProfile } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { healthProfile } },
      { new: true }
    ).select("-password");

    res.json({ success: true, data: updatedUser.healthProfile });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});



// Get all medicines
app.get('/api/medicines', async (req, res) => {
  try {
    const { category, search } = req.query;

    const pageNum = parseInt(req.query.page) || 1;
    const limitNum = parseInt(req.query.limit) || 20;

    let query = {};

    if (category && category !== "All") {
      query.category = category;
    }

    if (search) {
      query.name = { $regex: search, $options: "i" };
    }

    const skip = (pageNum - 1) * limitNum;

    const medicines = await Medicine.find(query)
      .skip(skip)
      .limit(limitNum);

    const total = await Medicine.countDocuments(query);

    res.json({
      success: true,
      data: medicines,
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum)
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false });
  }
});
// Get categories
app.get('/api/categories', (req, res) => {
  res.json({ success: true, data: categories });
});

// Get health tips
app.get('/api/health-tips', async (req, res) => {
  try {
    if (isMongoConnected) {
      const tips = await HealthTip.find({});
      res.json({ success: true, data: tips });
    } else {
      const tips = [
        { id: 1, title: 'Stay Hydrated', content: 'Drink at least 8 glasses of water daily to maintain good health.', category: 'General' },
        { id: 2, title: 'Get Enough Sleep', content: 'Aim for 7-9 hours of sleep per night for optimal health.', category: 'General' },
        { id: 3, title: 'Exercise Regularly', content: '30 minutes of moderate exercise daily can improve your health.', category: 'Fitness' },
        { id: 4, title: 'Eat Balanced Diet', content: 'Include fruits, vegetables, and whole grains in your diet.', category: 'Nutrition' },
        { id: 5, title: 'Wash Hands Frequently', content: 'Proper hand hygiene prevents many infections.', category: 'Hygiene' },
        { id: 6, title: 'Manage Stress', content: 'Practice meditation or deep breathing to reduce stress levels.', category: 'Mental Health' },
        { id: 7, title: 'Regular Check-ups', content: 'Visit your doctor for regular health screenings.', category: 'Prevention' },
        { id: 8, title: 'Limit Sugar Intake', content: 'Reduce consumption of sugary foods and drinks.', category: 'Nutrition' },
      ];
      res.json({ success: true, data: tips });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get cart
app.get('/api/cart/:userId', async (req, res) => {
  const userId = req.params.userId;
  
  try {
    if (isMongoConnected) {
      const cartItems = await Cart.find({ userId }).populate('medicineId');
      const enrichedCart = cartItems.map(item => ({
        medicineId: item.medicineId._id,   // ✅ only ID
        quantity: item.quantity,
        medicine: item.medicineId          // ✅ full object
      }));
      res.json({ success: true, data: enrichedCart });
    } else {
      const cart = carts[userId] || [];
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
      const enrichedCart = cart.map(item => {
        const medicine = medicines.find(m => m.id === item.medicineId);
        return { ...item, medicine };
      });
      res.json({ success: true, data: enrichedCart });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Add to cart
app.post('/api/cart', async (req, res) => {
  const { userId, medicineId, quantity } = req.body;
  
  try {
    if (isMongoConnected) {
      const existingItem = await Cart.findOne({ userId, medicineId });
      if (existingItem) {
        existingItem.quantity += quantity || 1;
        await existingItem.save();
      } else {
        await Cart.create({ userId, medicineId, quantity: quantity || 1 });
      }
      res.json({ success: true, message: 'Added to cart' });
    } else {
      // Fallback to in-memory
      if (!carts[userId]) carts[userId] = [];
      const existingItem = carts[userId].find(item => item.medicineId === medicineId);
      if (existingItem) {
        existingItem.quantity += quantity || 1;
      } else {
        carts[userId].push({ medicineId, quantity: quantity || 1, addedAt: new Date() });
      }
      res.json({ success: true, message: 'Added to cart' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Update cart quantity
app.put('/api/cart', async (req, res) => {
  const { userId, medicineId, quantity } = req.body;
  
  try {
    if (isMongoConnected) {
      if (quantity <= 0) {
        await Cart.deleteOne({ userId, medicineId });
      } else {
        await Cart.findOneAndUpdate({ userId, medicineId }, { quantity });
      }
      res.json({ success: true, message: 'Cart updated' });
    } else {
      // Fallback to in-memory
      if (!carts[userId]) return res.status(404).json({ success: false, message: 'Cart not found' });
      const item = carts[userId].find(item => item.medicineId === medicineId);
      if (item) {
        if (quantity <= 0) {
          carts[userId] = carts[userId].filter(i => i.medicineId !== medicineId);
        } else {
          item.quantity = quantity;
        }
        res.json({ success: true, message: 'Cart updated' });
      } else {
        res.status(404).json({ success: false, message: 'Item not found' });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Remove from cart
app.delete('/api/cart', async (req, res) => {
  const { userId, medicineId } = req.body;
  
  try {
    if (isMongoConnected) {
      await Cart.deleteOne({ userId, medicineId });
      res.json({ success: true, message: 'Item removed from cart' });
    } else {
      // Fallback to in-memory
      if (!carts[userId]) return res.status(404).json({ success: false, message: 'Cart not found' });
      carts[userId] = carts[userId].filter(item => item.medicineId !== medicineId);
      res.json({ success: true, message: 'Item removed from cart' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Checkout/Place order
app.post('/api/orders', async (req, res) => {
  const { userId, items, total } = req.body;
  
  try {
    if (isMongoConnected) {
      const order = await Order.create({ userId, items, total, status: 'Processing' });
      // Clear cart
      await Cart.deleteMany({ userId });
      res.json({ success: true, message: 'Order placed successfully', orderId: order._id });
    } else {
      // Fallback to in-memory
      if (!orders[userId]) orders[userId] = [];
      const order = {
        id: Date.now(),
        items,
        total,
        status: 'Processing',
        createdAt: new Date()
      };
      orders[userId].push(order);
      carts[userId] = [];
      res.json({ success: true, message: 'Order placed successfully', orderId: order.id });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get order history
app.get('/api/orders/:userId', async (req, res) => {
  const userId = req.params.userId;
  
  try {
    if (isMongoConnected) {
      const userOrders = await Order.find({ userId }).sort({ createdAt: -1 });
      res.json({ success: true, data: userOrders });
    } else {
      const userOrders = orders[userId] || [];
      res.json({ success: true, data: userOrders });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Gemini AI Chat Endpoint
app.post('/api/gemini-chat', async (req, res) => {
  const { message, context } = req.body;
  
  try {
    // Import Google Generative AI
    const { GoogleGenerativeAI } = await import('@google/generative-ai');
    
    // Configure the API key (you need to set this as environment variable)
    const API_KEY = process.env._API_KEYGEMINI || 'YOUR_GEMINI_API_KEY';
    
    if (API_KEY === 'YOUR_GEMINI_API_KEY') {
      // Fallback to basic response if no API key is set
      const fallbackResponse = generateFallbackResponse(message);
      return res.json({ success: true, response: fallbackResponse });
    }
    
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const fullPrompt = `${context}\n\nUser: ${message}\n\nMediBot:`;
    
    const result = await model.generateContent(fullPrompt);
    const response = result.response.text();
    
    res.json({ success: true, response });
  } catch (error) {
    console.error('Gemini API Error:', error);
    // Fallback response
    const fallbackResponse = generateFallbackResponse(message);
    res.json({ success: true, response: fallbackResponse });
  }
});

// Fallback response generator
function generateFallbackResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  // Symptom-based responses
  if (lowerMessage.includes('headache') || lowerMessage.includes('head pain')) {
    return "For headache, you can consider:\n\n💊 Paracetamol 500mg\n💊 Ibuprofen 400mg\n💊 Aspirin 325mg\n\n💡 Advice: Rest in a quiet, dark room. Stay hydrated and avoid bright screens.\n\n⚠️ Please consult a doctor if headache persists for more than 3 days.";
  }
  
  if (lowerMessage.includes('fever')) {
    return "For fever, you can consider:\n\n💊 Paracetamol\n💊 Ibuprofen\n💊 Acetaminophen\n\n💡 Advice: Drink plenty of fluids, rest, and monitor your temperature. Seek medical attention if fever exceeds 103°F (39.4°C).\n\n⚠️ Please consult a doctor.";
  }
  
  if (lowerMessage.includes('cold') || lowerMessage.includes('cough') || lowerMessage.includes('flu')) {
    return "For cold/flu symptoms, you can consider:\n\n💊 Cetirizine 10mg\n💊 Loratadine 10mg\n💊 Pseudoephedrine\n💊 Dextromethorphan\n\n💡 Advice: Stay warm, drink hot liquids, get plenty of rest, and use a humidifier.\n\n⚠️ Please consult a doctor if symptoms worsen.";
  }
  
  if (lowerMessage.includes('allergy') || lowerMessage.includes('sneezing') || lowerMessage.includes('itching')) {
    return "For allergies, you can consider:\n\n💊 Cetirizine\n💊 Loratadine\n💊 Fexofenadine\n\n💡 Advice: Avoid known allergens, keep windows closed, use air purifiers, and shower after being outdoors.\n\n⚠️ Please consult a doctor for severe allergies.";
  }
  
  if (lowerMessage.includes('stomach') || lowerMessage.includes('acid') || lowerMessage.includes('heartburn')) {
    return "For digestive issues, you can consider:\n\n💊 Omeprazole 20mg\n💊 Antacid Chewable\n💊 Buscopan\n\n💡 Advice: Avoid spicy foods, eat light meals, stay hydrated, and avoid lying down after eating.\n\n⚠️ Please consult a doctor if symptoms persist.";
  }
  
  if (lowerMessage.includes('nausea') || lowerMessage.includes('vomit') || lowerMessage.includes('feeling sick')) {
    return "For nausea, you can consider:\n\n💊 Domperidone 10mg\n💊 Ondansetron 4mg\n💊 Ginger tablets\n\n💡 Advice: Eat small, frequent meals, stay hydrated, and avoid strong odors.\n\n⚠️ Please consult a doctor if nausea persists.";
  }
  
  if (lowerMessage.includes('pain') || lowerMessage.includes('body pain') || lowerMessage.includes('muscle')) {
    return "For pain relief, you can consider:\n\n💊 Ibuprofen 400mg\n💊 Paracetamol 500mg\n💊 Naproxen 250mg\n\n💡 Advice: Rest, apply heat or ice, and consider gentle massage.\n\n⚠️ Please consult a doctor for chronic pain.";
  }
  
  // Default response
  return "Thank you for your question! I'm here to help with general health information. \n\n💡 For specific medical advice, please describe your symptoms in more detail (e.g., 'I have headache', 'feeling nausea', 'cold and cough').\n\n⚠️ Important: This is not a substitute for professional medical advice. Please consult a doctor for proper diagnosis and treatment.";
}

// ==================== ADMIN ENDPOINTS ====================

// Get all users (Admin)
app.get('/api/admin/users', async (req, res) => {
  try {
    if (isMongoConnected) {
      const users = await User.find({}, '-password');
      res.json({ success: true, data: users });
    } else {
      const usersWithoutPassword = users.map(u => ({
        id: u.id,
        name: u.name,
        email: u.email,
        createdAt: u.createdAt
      }));
      res.json({ success: true, data: usersWithoutPassword });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get all orders (Admin)
app.get('/api/admin/orders', async (req, res) => {
  try {
    if (isMongoConnected) {
      const allOrders = await Order.find({}).sort({ createdAt: -1 }).populate('userId', 'name email');
      const enrichedOrders = allOrders.map(order => ({
        ...order.toObject(),
        userId: order.userId?._id,
        userName: order.userId?.name || 'Unknown',
        userEmail: order.userId?.email || 'Unknown'
      }));
      res.json({ success: true, data: enrichedOrders });
    } else {
      const allOrders = [];
      for (const [userId, userOrders] of Object.entries(orders)) {
        const user = users.find(u => u.id === parseInt(userId));
        userOrders.forEach(order => {
          allOrders.push({
            ...order,
            userId: parseInt(userId),
            userName: user ? user.name : 'Unknown',
            userEmail: user ? user.email : 'Unknown'
          });
        });
      }
      res.json({ success: true, data: allOrders });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Get dashboard stats (Admin)
app.get('/api/admin/stats', async (req, res) => {
  try {
    if (isMongoConnected) {
      const totalUsers = await User.countDocuments();
      const totalOrders = await Order.countDocuments();
      const totalRevenue = await Order.aggregate([
        { $group: { _id: null, total: { $sum: '$total' } } }
      ]);
      const totalMedicines = await Medicine.countDocuments();
      
      res.json({
        success: true,
        data: {
          totalUsers,
          totalOrders,
          totalRevenue: totalRevenue[0]?.total || 0,
          totalMedicines
        }
      });
    } else {
      const totalUsers = users.length;
      const totalOrders = Object.values(orders).reduce((sum, userOrders) => sum + userOrders.length, 0);
      const totalRevenue = Object.values(orders).reduce((sum, userOrders) => {
        return sum + userOrders.reduce((orderSum, order) => orderSum + (order.total || 0), 0);
      }, 0);
      
      res.json({
        success: true,
        data: {
          totalUsers,
          totalOrders,
          totalRevenue,
          totalMedicines: 20
        }
      });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Connect to MongoDB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
