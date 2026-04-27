/* eslint-disable no-unused-vars */
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
import { Link } from 'react-router-dom';
import GroqChatbot from '../components/GroqChatbot';


function Home({ user, onLogin }) {

  const features = [
    { icon: <FaRobot />, title: 'AI Symptom Checker', desc: 'Get instant AI-powered health recommendations', color: '#ffa509' },
    { icon: <FaPills />, title: 'Medicine Catalog', desc: 'Browse 20+ verified medicines', color: '#4ecdc4' },
    { icon: <FaShieldVirus />, title: 'Health Protection', desc: 'Your health is our priority', color: '#45b7d1' },
    { icon: <FaClock />, title: '24/7 Support', desc: 'Round-the-clock health assistance', color: '#96ceb4' },
  ];

  const categories = [
    { name: 'Pain Relief', icon: '💊', color: '#ff6b6b' },
    { name: 'Cold & Flu', icon: '🤧', color: '#4ecdc4' },
    { name: 'Allergies', icon: '🤧', color: '#96ceb4' },
    { name: 'Vitamins', icon: '💊', color: '#ffeaa7' },
    { name: 'First Aid', icon: '🩹', color: '#dfe6e9' },
    { name: 'Digestion', icon: '🫃', color: '#45b7d1' },
  ];

  const healthTips = [
    { icon: '💧', title: 'Stay Hydrated', tip: 'Drink 8 glasses of water daily' },
    { icon: '😴', title: 'Sleep Well', tip: 'Get 7-9 hours of sleep' },
    { icon: '🏃', title: 'Exercise', tip: '30 min of daily exercise' },
    { icon: '🥗', title: 'Eat Healthy', tip: 'Balanced diet is key' },
  ];

    // Animation variants
    const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
    };

    const staggerContainer = {
    animate: {
        transition: {
        staggerChildren: 0.1
        }
    }
    };

    const smoothScrollToTop = () => {
    const start = window.scrollY;
    const duration = 500; // ms
    const startTime = performance.now();

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const scroll = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, start * (1 - easeOutCubic(progress)));

        if (progress < 1) {
        requestAnimationFrame(scroll);
        }
    };

    requestAnimationFrame(scroll);
    };

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-badge">🏥 Your Health, Our Priority</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            AI-Powered <span className="highlight">Healthcare Assistant</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get instant health recommendations, medicine information, and personalized care from our advanced AI chatbot. Your health journey starts here!
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.button 
              className="hero-btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.dispatchEvent(new Event('open-groq-chat'))}            >
              <FaRobot /> Try AI Chat
            </motion.button>
            <Link to="/shop" className="hero-btn-secondary">
              Browse Medicines <FaArrowRight />
            </Link>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Medicines</span>
            </div>
            <div className="stat">
              <span className="stat-number">7</span>
              <span className="stat-label">Categories</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-card chatbot-preview"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="chatbot-header-preview">
              <span>🤖 MediBot</span>
              <span className="online-dot"></span>
            </div>
            <div className="chatbot-body-preview">
              <p>Hi! How can I help you today?</p>
            </div>
            <div className="chatbot-input-preview">
              <span>Type your symptoms...</span>
              <button>Send</button>
            </div>
          </motion.div>

          <motion.div 
            className="floating-icon icon-1"
            animate={{ y: [-15, 15, -15], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            💊
          </motion.div>
          <motion.div 
            className="floating-icon icon-2"
            animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            🏥
          </motion.div>
          <motion.div 
            className="floating-icon icon-3"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            💉
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Why Choose MediBot AI?</h2>
          <p>Advanced AI technology meets healthcare expertise</p>
        </motion.div>

        <motion.div 
          className="features-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="feature-icon"
                style={{ background: `linear-gradient(135deg, ${feature.color}33, ${feature.color}11)` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {feature.icon}
              </motion.div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Browse Categories</h2>
          <p>Find medicines by category</p>
        </motion.div>

        <motion.div 
          className="categories-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Link to={`/shop?category=${encodeURIComponent(cat.name)}`} className="category-card-new" style={{ '--category-color': cat.color }}>
                <span className="category-icon">{cat.icon}</span>
                <span className="category-name">{cat.name}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Health Tips Preview */}
      <section className="tips-section">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Quick Health Tips</h2>
          <p>Simple habits for a healthier life</p>
        </motion.div>

        <motion.div 
          className="tips-preview-grid"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {healthTips.map((tip, index) => (
            <motion.div 
              key={index}
              className="tip-preview-new"
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
            >
              <span className="tip-icon">{tip.icon}</span>
              <h3>{tip.title}</h3>
              <p>{tip.tip}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link to="/health-tips" className="view-more-tips">
            View All Tips <FaArrowRight />
          </Link>
        </motion.div>
      </section>

      {/* Chatbot */}
      <GroqChatbot />
      {/* Chat Toggle Button */}
      

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              <span className="footer-icon">🤖</span>
              <span className="footer-logo-text"> MediBot AI</span>
            </h3>
            <p>Your trusted AI-powered healthcare assistant</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/" onClick={smoothScrollToTop}>Home</Link>
            <Link to="/symptom-checker">Symptom Checker</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/health-tips">Health Tips</Link>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📞 Emergency: 1-800-000-000</p>
            <p>📧 support@medibot.ai</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 MediBot AI. All rights reserved. ⚠️ Consult doctor before medication.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;