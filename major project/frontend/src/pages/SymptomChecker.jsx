/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStethoscope, FaSearch, FaPills, FaHeartbeat, FaShieldVirus, FaTimes, FaCheck, FaInfoCircle, FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';
import { symptomsList, formatSymptom, diseasesData, getAllDiseases } from '../data';

function SymptomChecker({ onClose }) {
  const navigate = useNavigate();
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [predictedDisease, setPredictedDisease] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle close - either call onClose prop or navigate back
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate('/'); // go back to home
    }
  };

  // Filter symptoms based on search
  const filteredSymptoms = symptomsList.filter(symptom =>
    formatSymptom(symptom).toLowerCase().includes(searchTerm.toLowerCase())
  ).slice(0, 50); // Limit to 50 for performance

  // Toggle symptom selection
  const toggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  // Simple prediction algorithm based on symptom matching
  const predictDisease = () => {
    if (selectedSymptoms.length === 0) {
      alert('Please select at least one symptom');
      return;
    }

    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      const diseases = getAllDiseases();
      let bestMatch = null;
      let maxMatches = 0;

      diseases.forEach(disease => {
        const diseaseInfo = diseasesData[disease];
        if (diseaseInfo && diseaseInfo.symptoms) {
          const matches = diseaseInfo.symptoms.filter(symptom => 
            selectedSymptoms.includes(symptom)
          ).length;
          
          if (matches > maxMatches) {
            maxMatches = matches;
            bestMatch = disease;
          }
        }
      });

      // If no good match, provide a default based on common symptoms
      if (!bestMatch || maxMatches === 0) {
        // Common symptom combinations
        if (selectedSymptoms.includes('cough') && selectedSymptoms.includes('runny_nose')) {
          bestMatch = 'Common Cold';
        } else if (selectedSymptoms.includes('fever') && selectedSymptoms.includes('headache')) {
          bestMatch = 'Typhoid';
        } else if (selectedSymptoms.includes('fatigue') && selectedSymptoms.includes('weight_loss')) {
          bestMatch = 'Diabetes';
        } else if (selectedSymptoms.includes('yellowish_skin') && selectedSymptoms.includes('yellowing_of_eyes')) {
          bestMatch = 'Jaundice';
        } else if (selectedSymptoms.includes('chest_pain') && selectedSymptoms.includes('breathlessness')) {
          bestMatch = 'Heart attack';
        } else {
          bestMatch = 'Common Cold';
        }
      }

      setPredictedDisease({
        name: bestMatch,
        info: diseasesData[bestMatch]
      });
      setLoading(false);
    }, 1000);
  };

  // Reset
  const reset = () => {
    setSelectedSymptoms([]);
    setPredictedDisease(null);
    setSearchTerm('');
  };

  return (
    <motion.div 
      className="symptom-checker-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      <motion.div 
        className="symptom-checker-container"
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="symptom-checker-header">
          <div className="header-icon">
            <FaStethoscope size={30} />
          </div>
          <div>
            <h2>AI Symptom Checker</h2>
            <p>Select your symptoms for personalized recommendations</p>
          </div>
          <button className="close-btn" onClick={handleClose}>
            X
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!predictedDisease ? (
            <motion.div 
              className="symptom-checker-body"
              key="symptoms"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Selected Symptoms */}
              {selectedSymptoms.length > 0 && (
                <div className="selected-symptoms">
                  <h4>Selected Symptoms ({selectedSymptoms.length}):</h4>
                  <div className="selected-tags">
                    {selectedSymptoms.map(symptom => (
                      <motion.span 
                        key={symptom}
                        className="symptom-tag selected"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        onClick={() => toggleSymptom(symptom)}
                      >
                        {formatSymptom(symptom)} <FaTimes />
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              {/* Search */}
              <div className="search-box">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search symptoms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Symptoms List */}
              <div className="symptoms-grid">
                {filteredSymptoms.map(symptom => (
                  <motion.button
                    key={symptom}
                    className={`symptom-btn ${selectedSymptoms.includes(symptom) ? 'active' : ''}`}
                    onClick={() => toggleSymptom(symptom)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {selectedSymptoms.includes(symptom) && <FaCheck />}
                    {formatSymptom(symptom)}
                  </motion.button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button 
                  className="clear-btn"
                  onClick={reset}
                  disabled={selectedSymptoms.length === 0}
                >
                  Clear All
                </button>
                <button 
                  className="predict-btn"
                  onClick={predictDisease}
                  disabled={selectedSymptoms.length === 0 || loading}
                >
                  {loading ? (
                    <>Analyzing...</>
                  ) : (
                    <> <FaHeartbeat /> Get Diagnosis</>
                  )}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              className="diagnosis-result"
              key="result"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="diagnosis-header">
                <div className="diagnosis-icon">
                  <FaStethoscope size={40} />
                </div>
                <h3>Predicted Condition</h3>
                <h2>{predictedDisease.name}</h2>
              </div>

              {predictedDisease.info && (
                <div className="diagnosis-details">
                  <div className="detail-section">
                    <h4><FaInfoCircle /> Description</h4>
                    <p>{predictedDisease.info.description}</p>
                  </div>

                  <div className="detail-section">
                    <h4><FaShieldVirus /> Precautions</h4>
                    <ul>
                      {predictedDisease.info.precautions.map((precaution, i) => (
                        <li key={i}>{precaution}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4><FaPills /> Medications</h4>
                    <div className="medications-list">
                      {predictedDisease.info.medications.map((med, i) => (
                        <span key={i} className="medication-tag">{med}</span>
                      ))}
                    </div>
                  </div>

                  <div className="detail-section">
                    <h4><FaHeartbeat /> Recommended Workouts</h4>
                    <ul>
                      {predictedDisease.info.workouts.slice(0, 5).map((workout, i) => (
                        <li key={i}>{workout}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="disclaimer-section">
                    <h4><FaExclamationTriangle /> Disclaimer</h4>
                    <p>
                      This symptom checker is for informational purposes only and does not provide medical advice, diagnosis, or treatment.
                      The results are based on general data and may not be accurate. Always consult a qualified healthcare professional
                      or doctor for proper medical guidance. Do not ignore professional medical advice or delay seeking it based on
                      information provided by this application.
                    </p>
                </div>
                </div>
              )}

              <div className="action-buttons">
                <button className="clear-btn" onClick={reset}>
                  Check Again
                </button>
                <button className="predict-btn" onClick={handleClose}>
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <style>{`
        .symptom-checker-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .symptom-checker-container {
          background: white;
          border-radius: 20px;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .symptom-checker-header {
          background: linear-gradient(135deg, #ffa509, #ff6b00);
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          color: white;
        }

        .header-icon {
          width: 60px;
          height: 60px;
          background: rgba(255,255,255,0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .symptom-checker-header h2 {
          margin: 0;
          font-size: 1.5rem;
        }

        .symptom-checker-header p {
          margin: 5px 0 0;
          opacity: 0.9;
          font-size: 0.9rem;
        }

        .close-btn {
          margin-left: auto;
          background: rgba(255,255,255,0.2);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          font-weight: bolder;
          display: flex;
          align-items: center;
          justify-content: center;

          font-size: 22px;   /* 🔥 important */
        }

        .symptom-checker-body {
          padding: 20px;
          overflow-y: auto;
          flex: 1;
        }

        .selected-symptoms {
          margin-bottom: 15px;
        }

        .selected-symptoms h4 {
          margin: 0 0 10px;
          color: #333;
        }

        .selected-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .symptom-tag {
          background: #f0f0f0;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 5px;
          cursor: pointer;
        }

        .symptom-tag.selected {
          background: #ffa509;
          color: white;
        }

        .search-box {
          position: relative;
          margin-bottom: 15px;
        }

        .search-box .search-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
        }

        .search-box input {
          width: 100%;
          padding: 12px 15px 12px 45px;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 1rem;
        }

        .search-box input:focus {
          border-color: #ffa509;
          outline: none;
        }

        .symptoms-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          max-height: 300px;
          overflow-y: auto;
          padding: 10px;
          background: #f9f9f9;
          border-radius: 10px;
          margin-bottom: 15px;
        }

        .symptom-btn {
          background: white;
          border: 2px solid #e0e0e0;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.85rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: all 0.2s;
        }

        .symptom-btn:hover {
          border-color: #ffa509;
        }

        .symptom-btn.active {
          background: #ffa509;
          border-color: #ffa509;
          color: white;
        }

        .action-buttons {
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .clear-btn {
          padding: 12px 25px;
          background: #f0f0f0;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1rem;
        }

        .predict-btn {
          padding: 12px 30px;
          background: linear-gradient(135deg, #ffa509, #ff6b00);
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .predict-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .diagnosis-result {
          padding: 20px;
          text-align: center;
        }

        .diagnosis-header {
          margin-bottom: 20px;
        }

        .diagnosis-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ffa509, #ff6b00);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 15px;
          color: white;
        }

        .diagnosis-header h3 {
          color: #666;
          margin: 0;
          font-size: 1rem;
        }

        .diagnosis-header h2 {
          color: #ffa509;
          font-size: 1.8rem;
          margin: 10px 0 0;
        }

        .diagnosis-details {
          text-align: left;
          max-height: 400px;
          overflow-y: auto;
        }

        .detail-section {
          margin-bottom: 20px;
          padding: 15px;
          background: #f9f9f9;
          border-radius: 10px;
          color: black;
        }

        .detail-section h4 {
          margin: 0 0 10px;
          color: #333;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .detail-section ul {
          margin: 0;
          padding-left: 20px;
        }

        .detail-section li {
          margin-bottom: 5px;
          color: #555;
        }

        .disclaimer-section{
          margin-bottom: 20px;
          padding: 15px;
          background: #f9f9f9;
          border-radius: 10px;
          color: red;
        }

      

        .medications-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .medication-tag {
          background: #ffa509;
          color: white;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 0.85rem;
        }
      `}</style>
    </motion.div>
  );
}

export default SymptomChecker;

