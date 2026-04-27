import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ user, setShowEmergency }) {
    const location = useLocation();

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

    // ❌ Hide navbar on symptom checker route
    if (location.pathname === "/symptom-checker") return null;

    return (
    <motion.header
        className="header"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
    >
        <Link to="/" onClick={smoothScrollToTop} className="logo">
            <motion.span
                className="logo-icon"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
                🤖
            </motion.span>

            <span className="logo-text">MediBot AI</span>
        </Link>

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
            <Link to="/cart" className="cart-btn">
                🛒 Cart
            </Link>
            <span className="user-name">👋 {user.name}</span>
            </div>
        ) : (
            <div className="auth-buttons">
            <Link to="/login" className="login-btn">
                Login
            </Link>
            <Link to="/signup" className="signup-btn">
                Sign Up
            </Link>
            </div>
        )}

        <motion.button
            className="emergency-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowEmergency(true)}
        >
            🚨 Emergency
        </motion.button>
        </div>
    </motion.header>
    );
}
