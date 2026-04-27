import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate,Navigate } from 'react-router-dom';
import Layout from "./components/Layout";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaRobot, FaStethoscope, FaPills, FaHeartbeat, FaUserMd, 
  FaShieldVirus, FaThermometer, FaAmbulance, FaCapsules,
  FaMicrophone, FaBrain, FaNotesMedical, FaWind,
  FaBone, FaFirstAid, FaTint, FaEye, FaVolumeUp, FaTooth,
  FaHospital, FaPhone, FaClock, FaCheckCircle, FaArrowRight,
  FaSearch, FaShoppingCart, FaUser, FaSignOutAlt, FaChevronRight,
  FaQuoteLeft, FaStar, FaPlay, FaStickyNote, FaAppleAlt
} from 'react-icons/fa';
import './App.css';
import Home from './pages/Home';
import SymptomChecker from './pages/SymptomChecker';
import Profile from './pages/Profile';
import HealthTips from './pages/HealthTips';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Orders from './pages/Orders';
import GroqChatbot from './components/GroqChatbot';
import EmergencyModal from './components/EmergencyModal';


// Login Component
function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      const data = await response.json();
      
      if (data.success) {
        onLogin(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Connection error. Make sure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <motion.div 
        className="auth-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="auth-header">
          <motion.div 
            className="auth-logo"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <FaRobot size={50} />
          </motion.div>
          <h1>MediBot AI</h1>
          <p>Your AI Health Assistant</p>
        </div>
        
        {error && <motion.div 
          className="error-message"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >{error}</motion.div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label><FaUser /> Email</label>
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              whileFocus={{ scale: 1.02, borderColor: '#ffa509' }}
            />
          </div>
          
          <div className="form-group">
            <label><FaShieldVirus /> Password</label>
            <motion.input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              whileFocus={{ scale: 1.02, borderColor: '#ffa509' }}
            />
          </div>
          
          <motion.button 
            type="submit" 
            className="auth-btn"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Logging in...' : '🚀 Login to Continue'}
          </motion.button>
        </form>
        
        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign Up Free</Link>
        </p>
      </motion.div>
    </div>
  );
}

// Signup Component
function Signup({ onLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });
      
      const data = await response.json();
      
      if (data.success) {
        onLogin(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Connection error. Make sure backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <motion.div 
        className="auth-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="auth-header">
          <motion.div 
            className="auth-logo"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <FaRobot size={50} />
          </motion.div>
          <h1>Join MediBot AI</h1>
          <p>Start Your Health Journey</p>
        </div>
        
        {error && <motion.div 
          className="error-message"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >{error}</motion.div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label><FaUser /> Full Name</label>
            <motion.input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          
          <div className="form-group">
            <label><FaUser /> Email</label>
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          
          <div className="form-group">
            <label><FaShieldVirus /> Password</label>
            <motion.input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          
          <div className="form-group">
            <label><FaShieldVirus /> Confirm Password</label>
            <motion.input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          
          <motion.button 
            type="submit" 
            className="auth-btn"
            disabled={loading}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {loading ? 'Creating account...' : '🚀 Create Account'}
          </motion.button>
        </form>
        
        <p className="auth-switch">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </motion.div>
    </div>
  );
}


// Main App
function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const [showEmergency, setShowEmergency] = useState(false);


  return (
    <Router>
      <EmergencyModal 
        show={showEmergency} 
        onClose={() => setShowEmergency(false)} 
      />
      <Routes>
        <Route element={<Layout user={user} setShowEmergency={setShowEmergency} />}>
            <Route 
              path="/" 
              element={user ? <Home user={user} /> : <Navigate to="/login" />} 
            />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
            <Route path="/shop" element={user ? <Shop user={user} /> : <Login onLogin={handleLogin} />} />
            <Route path="/cart" element={user ? <Cart user={user} /> : <Login onLogin={handleLogin} />} />
            <Route path="/orders" element={user ? <Orders user={user} /> : <Login onLogin={handleLogin} />} />
            <Route path="/profile" element={user ? <Profile user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
            <Route path="/health-tips" element={user ? <HealthTips /> : <Login onLogin={handleLogin} />} />
        </Route>
            {/* No navbar here */}
            <Route path="/symptom-checker" element={<SymptomChecker />} />
      </Routes>
    </Router>
  );
}

export default App;

