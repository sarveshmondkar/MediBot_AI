/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
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
import SymptomChecker from './pages/SymptomChecker';
import Profile from './pages/Profile';
import HealthTips from './pages/HealthTips';
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

// Shop Component
function Shop({ user }) {
  const [medicines, setMedicines] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
    fetchMedicines();
  }, []);

  useEffect(() => {
    fetchMedicines();
  }, [selectedCategory, searchTerm]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/categories');
      const data = await response.json();
      if (data.success) {
        setCategories(['All', ...data.data]);
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
    }
  };

  const fetchMedicines = async () => {
    try {
      const params = new URLSearchParams();
      if (selectedCategory !== 'All') {
        params.append('category', selectedCategory);
      }
      if (searchTerm) {
        params.append('search', searchTerm);
      }
      
      const response = await fetch(`http://localhost:5000/api/medicines?${params}`);
      const data = await response.json();
      if (data.success) {
        setMedicines(data.data);
      }
    } catch (err) {
      console.error('Error fetching medicines:', err);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (medicineId) => {
    if (!user) {
      alert('Please login to add items to cart');
      return;
    }
    
    try {
      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, medicineId, quantity: 1 })
      });
      
      const data = await response.json();
      if (data.success) {
        alert('✅ Added to cart!');
      }
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
  };

  const categoryIcons = {
    'Pain Relief': <FaPills />,
    'Allergies': <FaShieldVirus />,
    'Cold & Flu': <FaThermometer />,
    'Digestion': <FaAppleAlt scale={0.8} />,
    'Nausea': <FaPills />,
    'Vitamins': <FaCapsules />,
    'First Aid': <FaFirstAid />
  };

  return (
    <div className="shop-page">
      <motion.div 
        className="shop-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>💊 Medicine Shop</h1>
        <p>Find the medicines you need</p>
      </motion.div>

      <motion.div 
        className="shop-filters"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search medicines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="category-filters">
          {categories.map((cat, index) => (
            <motion.button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {loading ? (
        <div className="loading">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <FaRobot size={40} />
          </motion.div>
          <p>Loading medicines...</p>
        </div>
      ) : (
        <motion.div 
          className="medicines-grid"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {medicines.map((medicine, index) => (
            <motion.div 
              key={medicine.id} 
              className="medicine-card"
              variants={fadeInUp}
              whileHover={{ y: -10 }}
            >
              <div className="medicine-image">{medicine.image}</div>
              <span className="medicine-category">{medicine.category}</span>
              <h3>{medicine.name}</h3>
              <p className="medicine-description">{medicine.description}</p>
              <p className="medicine-uses">Uses: {medicine.uses}</p>
              <div className="medicine-footer">
                <span className="medicine-price">${medicine.price.toFixed(2)}</span>
                <span className="medicine-stock">Stock: {medicine.stock}</span>
              </div>
              <motion.button 
                className="add-to-cart-btn"
                onClick={() => addToCart(medicine.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🛒 Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      )}

      {medicines.length === 0 && !loading && (
        <div className="no-results">
          <FaSearch size={50} />
          <p>No medicines found</p>
        </div>
      )}
    </div>
  );
}

// Cart Component
function Cart({ user }) {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [ordering, setOrdering] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchCart();
  }, [user]);

  const fetchCart = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${user.id}`);
      const data = await response.json();
      if (data.success) {
        setCart(data.data);
      }
    } catch (err) {
      console.error('Error fetching cart:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (medicineId, quantity) => {
    try {
      await fetch('http://localhost:5000/api/cart', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, medicineId, quantity })
      });
      fetchCart();
    } catch (err) {
      console.error('Error updating quantity:', err);
    }
  };

  const removeItem = async (medicineId) => {
    try {
      await fetch('http://localhost:5000/api/cart', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, medicineId })
      });
      fetchCart();
    } catch (err) {
      console.error('Error removing item:', err);
    }
  };

  const placeOrder = async () => {
    if (cart.length === 0) return;
    
    setOrdering(true);
    try {
      const total = cart.reduce((sum, item) => sum + (item.medicine?.price || 0) * item.quantity, 0);
      
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          items: cart,
          total
        })
      });
      
      const data = await response.json();
      if (data.success) {
        alert(`🎉 Order placed successfully! Order ID: ${data.orderId}`);
        navigate('/orders');
      }
    } catch (err) {
      console.error('Error placing order:', err);
    } finally {
      setOrdering(false);
    }
  };

  const total = cart.reduce((sum, item) => sum + (item.medicine?.price || 0) * item.quantity, 0);

  if (loading) {
    return (
      <div className="cart-page">
        <div className="loading">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
            <FaRobot size={40} />
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <motion.div 
        className="cart-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>🛒 Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <FaShoppingCart size={60} />
            <p>Your cart is empty</p>
            <Link to="/" className="continue-shopping">Continue Shopping →</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <motion.div 
                  key={item.medicineId} 
                  className="cart-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="cart-item-image">{item.medicine?.image || '💊'}</div>
                  <div className="cart-item-info">
                    <h3>{item.medicine?.name}</h3>
                    <p className="cart-item-price">${item.medicine?.price?.toFixed(2)}</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button onClick={() => updateQuantity(item.medicineId, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.medicineId, item.quantity + 1)}>+</button>
                  </div>
                  <div className="cart-item-total">
                    ${((item.medicine?.price || 0) * item.quantity).toFixed(2)}
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.medicineId)}>✕</button>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="cart-summary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal ({cart.length} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="free-shipping">FREE</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <motion.button 
                className="checkout-btn"
                onClick={placeOrder}
                disabled={ordering}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {ordering ? '⏳ Processing...' : '🚀 Place Order'}
              </motion.button>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}

// Orders Component
function Orders({ user }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchOrders();
  }, [user]);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/orders/${user.id}`);
      const data = await response.json();
      if (data.success) {
        setOrders(data.data);
      }
    } catch (err) {
      console.error('Error fetching orders:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="orders-page">
        <div className="loading">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
            <FaRobot size={40} />
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <motion.div 
        className="orders-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h1>📦 My Orders</h1>
        
        {orders.length === 0 ? (
          <div className="empty-orders">
            <FaNotesMedical size={60} />
            <p>You haven't placed any orders yet</p>
            <Link to="/" className="continue-shopping">Start Shopping →</Link>
          </div>
        ) : (
          <div className="orders-list">
            {orders.map((order, index) => (
              <motion.div 
                key={order.id} 
                className="order-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="order-header">
                  <div className="order-info">
                    <span className="order-id">Order #{order.id}</span>
                    <span className="order-date">
                      {new Date(order.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <span className="order-status">{order.status}</span>
                </div>
                <div className="order-items">
                  {order.items?.map((item, i) => (
                    <span key={i} className="order-item">
                      {item.medicine?.image || '💊'} {item.medicine?.name} x{item.quantity}
                    </span>
                  ))}
                </div>
                <div className="order-footer">
                  <span className="order-total">Total: ${order.total?.toFixed(2)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}

// // Profile Component
// function Profile({ user, onLogout }) {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate('/login');
//       return;
//     }
//     fetchOrders();
//   }, [user]);

//   const fetchOrders = async () => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/orders/${user.id}`);
//       const data = await response.json();
//       if (data.success) {
//         setOrders(data.data);
//       }
//     } catch (err) {
//       console.error('Error fetching orders:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLogout = () => {
//     onLogout();
//     localStorage.removeItem('user');
//     navigate('/');
//   };

//   if (loading) {
//     return (
//       <div className="profile-page">
//         <div className="loading">
//           <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
//             <FaRobot size={40} />
//           </motion.div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="profile-page">
//       <motion.div 
//         className="profile-container"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         <motion.div 
//           className="profile-header"
//           initial={{ y: -20 }}
//           animate={{ y: 0 }}
//         >
//           <motion.div 
//             className="profile-avatar"
//             animate={{ 
//               boxShadow: ['0 0 0 0 rgba(255, 165, 9, 0.4)', '0 0 0 20px rgba(255, 165, 9, 0)', '0 0 0 0 rgba(255, 165, 9, 0.4)']
//             }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             👤
//           </motion.div>
//           <div className="profile-info">
//             <h1>{user.name}</h1>
//             <p>{user.email}</p>
//           </div>
//         </motion.div>

//         <motion.div 
//           className="profile-menu"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           <Link to="/orders" className="profile-menu-item">
//             <span>📦</span> My Orders
//           </Link>
//           <Link to="/cart" className="profile-menu-item">
//             <span>🛒</span> Shopping Cart
//           </Link>
//           <button onClick={handleLogout} className="profile-menu-item logout">
//             <span>🚪</span> Logout
//           </button>
//         </motion.div>

//         <motion.div 
//           className="profile-stats"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           <div className="stat-card">
//             <span className="stat-icon">📦</span>
//             <span className="stat-value">{orders.length}</span>
//             <span className="stat-label">Total Orders</span>
//           </div>
//           <div className="stat-card">
//             <span className="stat-icon">💰</span>
//             <span className="stat-value">
//               ${orders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}
//             </span>
//             <span className="stat-label">Total Spent</span>
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// // Health Tips Component
// function HealthTips() {
//   const [tips, setTips] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchTips();
//   }, []);

//   const fetchTips = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/health-tips');
//       const data = await response.json();
//       if (data.success) {
//         setTips(data.data);
//       }
//     } catch (err) {
//       console.error('Error fetching tips:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const categories = ['All', ...new Set(tips.map(tip => tip.category))];
  
//   const filteredTips = selectedCategory === 'All' 
//     ? tips 
//     : tips.filter(tip => tip.category === selectedCategory);

//   const categoryIcons = {
//     'General': '🌟',
//     'Fitness': '🏃',
//     'Nutrition': '🥗',
//     'Hygiene': '🧼',
//     'Mental Health': '🧘',
//     'Prevention': '🛡️'
//   };

//   return (
//     <div className="health-tips-page">
//       <motion.div 
//         className="health-tips-container"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         <motion.div 
//           className="health-tips-header"
//           initial={{ y: -20 }}
//           animate={{ y: 0 }}
//         >
//           <h1>💡 Health Tips</h1>
//           <p>Stay healthy with these helpful tips</p>
//         </motion.div>

//         <motion.div 
//           className="tips-category-filter"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           {categories.map((cat, index) => (
//             <motion.button
//               key={cat}
//               className={`tip-category-btn ${selectedCategory === cat ? 'active' : ''}`}
//               onClick={() => setSelectedCategory(cat)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {categoryIcons[cat] || '📌'} {cat}
//             </motion.button>
//           ))}
//         </motion.div>

//         {loading ? (
//           <div className="loading">
//             <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }}>
//               <FaRobot size={40} />
//             </motion.div>
//           </div>
//         ) : (
//           <motion.div 
//             className="tips-grid"
//             variants={staggerContainer}
//             initial="initial"
//             animate="animate"
//           >
//             {filteredTips.map((tip, index) => (
//               <motion.div 
//                 key={tip.id} 
//                 className="tip-card"
//                 variants={fadeInUp}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="tip-icon">
//                   {categoryIcons[tip.category] || '💡'}
//                 </div>
//                 <h3>{tip.title}</h3>
//                 <p>{tip.content}</p>
//                 <span className="tip-category">{tip.category}</span>
//               </motion.div>
//             ))}
//           </motion.div>
//         )}
//       </motion.div>
//     </div>
//   );
// }

// Home Component with Improved Chatbot
function Home({ user, onLogin }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "Hello! I'm MediBot AI 🤖\n\nI can help you with:\n• Health information & advice\n• Medicine recommendations\n• Symptom analysis\n• General health questions\n\nJust describe your symptoms or ask a question!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Improved chatbot with comprehensive responses
  const getRecommendation = async (userInput) => {
    const input = userInput.toLowerCase();
    
    // Check for greetings
    if (input.includes('hello') || input.includes('hi') || input.includes('hey') || input.includes('greetings')) {
      return "Hello! Welcome to MediBot AI! I'm here to help you with health information, medicine recommendations, and symptom analysis. How can I assist you today?";
    }
    
    // Check for thanks/gratitude
    if (input.includes('thank')) {
      return "You're welcome! I'm happy to help. Feel free to ask any health-related questions or describe your symptoms if you need medicine recommendations. Take care!";
    }
    
    // Check for goodbye
    if (input.includes('bye') || input.includes('goodbye')) {
      return "Goodbye! Take care of your health. Don't hesitate to return if you need any assistance. Stay healthy!";
    }
    
    // Check for common health topics
    if (input.includes('fever') || input.includes('temperature')) {
      return "Fever is usually a sign that your body is fighting an infection. Suggestions: Rest and stay hydrated, Take fever-reducing medicine (Paracetamol/Ibuprofen). Please consult a doctor if fever persists more than 3 days.";
    }
    
    if (input.includes('cold') || input.includes('cough') || input.includes('flu')) {
      return "For Cold & Flu: Rest and drink warm fluids, Vitamin C supplements, Honey for sore throat. Common medicines: Cetirizine, Cough syrups. Consult doctor if symptoms worsen.";
    }
    
    if (input.includes('headache') || input.includes('head pain')) {
      return "For Headache: Rest in a quiet dark room, Stay hydrated, Over-the-counter pain relievers. Seek medical attention for severe or persistent headaches.";
    }
    
    if (input.includes('stomach') || input.includes('nausea') || input.includes('vomit') || input.includes('digestion')) {
      return "For Digestive Issues: Drink ginger tea, Eat light foods, Avoid spicy/oily foods. Common medicines: Antacids, Omeprazole. Consult doctor if persistent.";
    }
    
    if (input.includes('diabetes') || input.includes('sugar')) {
      return "For Diabetes: Monitor blood sugar regularly, Eat balanced meals, Exercise regularly. Common medications: Metformin. Always consult an endocrinologist for proper diagnosis.";
    }
    
    if (input.includes('blood pressure') || input.includes('hypertension')) {
      return "For Blood Pressure: Reduce salt intake, Exercise regularly, Manage stress. Consult doctor for proper diagnosis and medication.";
    }
    
    if (input.includes('pain') || input.includes('ache')) {
      return "Pain Relief Options: Paracetamol (Acetaminophen), Ibuprofen, Aspirin. Always follow dosage instructions and consult doctor for chronic pain.";
    }
    
    if (input.includes('allergy') || input.includes('allergic')) {
      return "For Allergy Relief: Cetirizine (Zyrtec), Loratadine (Claritin). Tips: Identify and avoid allergens. Severe allergic reactions need immediate medical attention.";
    }
    
    if (input.includes('vitamin') || input.includes('supplement')) {
      return "Common supplements: Vitamin D for bone health, Vitamin C for immunity, B-complex for energy, Iron for anemia. Consult doctor before starting any supplement.";
    }
    
    if (input.includes('sleep') || input.includes('insomnia')) {
      return "Sleep Tips: Maintain regular sleep schedule, Avoid caffeine before bed, Create relaxing bedtime routine. Consult doctor for chronic insomnia.";
    }
    
    if (input.includes('skin') || input.includes('rash') || input.includes('acne')) {
      return "Skin Care: Keep skin clean and moisturized, Use sunscreen daily, Stay hydrated. Consult dermatologist for persistent issues.";
    }
    
    // Try backend API
    try {
      const response = await fetch(`http://localhost:5000/api/medicines?symptom=${encodeURIComponent(userInput)}`);
      const data = await response.json();
      
      if (data.success && data.data && data.data.medicines && data.data.medicines.length > 0) {
        return `Based on "${userInput}":\n\nRecommended Medicines:\n${data.data.medicines.map(m => `- ${m}`).join('\n')}\n\nAdvice: ${data.data.advice || 'Please consult a doctor before taking any medication.'}`;
      }
    } catch (err) {
      console.error('Error getting recommendation:', err);
    }
    
    // Default response
    return `I understand you're asking about "${userInput}". As your health assistant, I can help with symptom analysis, medicine recommendations, and general health information. Please describe your symptoms or ask a specific health question.`;
  };

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMessage = { id: Date.now(), type: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    
    setTimeout(async () => {
      const botText = await getRecommendation(input);
      const botResponse = { 
        id: Date.now() + 1, 
        type: 'bot', 
        text: botText 
      };
      setMessages(prev => [...prev, botResponse]);
      setLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

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

  return (
    <div className="app">
      {/* Header */}
      <motion.header 
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="logo">
          <motion.span 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            🤖
          </motion.span>
          MediBot AI
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/symptom-checker">Symptom Checker</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/health-tips">Health Tips</Link>
          {user && <Link to="/profile">Profile</Link>}
        </nav>
        <div className="header-actions">
          {user ? (
            <div className="user-menu">
              <Link to="/cart" className="cart-btn">🛒 Cart</Link>
              <span className="user-name">👋 {user.name}</span>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/signup" className="signup-btn">Sign Up</Link>
            </div>
          )}
          <motion.button 
            className="emergency-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            🚨 Emergency
          </motion.button>
        </div>
      </motion.header>

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
              onClick={() => setIsChatOpen(true)}
            >
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
              <Link to="/shop" className="category-card-new" style={{ '--category-color': cat.color }}>
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
      <AnimatePresence>
        {isChatOpen && (
          <motion.div 
            className="chatbot-container-new"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
          >
            <div className="chatbot-new">
              <div className="chatbot-header-new">
                <span>🤖 MediBot AI</span>
                <button onClick={() => setIsChatOpen(false)}>✕</button>
              </div>
              <div className="chatbot-messages-new">
                {messages.map(msg => (
                  <motion.div 
                    key={msg.id} 
                    className={`message-new ${msg.type}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="message-content-new">{msg.text}</div>
                  </motion.div>
                ))}
                {loading && (
                  <div className="message-new bot">
                    <div className="message-content-new typing">
                      <span>•</span><span>•</span><span>•</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="chatbot-input-new">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Describe your symptoms..." 
                />
                <motion.button 
                  onClick={handleSend}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={loading}
                >
                  ➤
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Toggle Button */}
      {!isChatOpen && (
        <motion.button 
          className="chat-toggle-btn"
          onClick={() => setIsChatOpen(true)}
          animate={{ 
            boxShadow: ['0 0 0 0 rgba(255, 165, 9, 0.4)', '0 0 0 20px rgba(255, 165, 9, 0)', '0 0 0 0 rgba(255, 165, 9, 0.4)']
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaRobot size={28} />
        </motion.button>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🤖 MediBot AI</h3>
            <p>Your trusted AI-powered healthcare assistant</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/symptom-checker">Symptom Checker</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/health-tips">Health Tips</Link>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>📞 Emergency: 1-800-MEDICARE</p>
            <p>📧 support@medibot.ai</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 MediBot AI. All rights reserved. ⚠️ Consult doctor before medication.</p>
        </div>
      </footer>
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
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home user={user} onLogin={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
        <Route path="/shop" element={<Shop user={user} />} />
        <Route path="/cart" element={<Cart user={user} />} />
        <Route path="/orders" element={<Orders user={user} />} />
        <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
        <Route path="/health-tips" element={<HealthTips />} />
        <Route path="/symptom-checker" element={<SymptomChecker />} />
      </Routes>
    </Router>
  );
}

export default App;

