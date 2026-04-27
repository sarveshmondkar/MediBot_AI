import { AnimatePresence, motion } from "framer-motion";

export default function EmergencyModal({ show, onClose }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          className="emergency-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            className="emergency-modal"
            initial={{ scale: 0.8, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 50 }}
          >
            <h2>🚨 EMERGENCY HELP</h2>

            <div className="emergency-item">
              <strong>📞 Ambulance:</strong> <a href="tel:108">108</a> / <a href="tel:102">102</a>
            </div>

            <div className="emergency-item">
              <strong>👮 Police:</strong> <a href="tel:100">100</a>
            </div>

            <div className="emergency-item">
              <strong>🔥 Fire Brigade:</strong> <a href="tel:101">101</a>
            </div>

            <div className="emergency-item">
              <strong>📧 Email:</strong> support@medibot.ai
            </div>

            <button 
              className="close-btn"
              onClick={onClose}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}