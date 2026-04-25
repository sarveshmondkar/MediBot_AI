import { useState, useEffect } from 'react';

function HealthTips() {
  const [tips, setTips] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTips();
  }, []);

  const fetchTips = async () => {
    try {
      const response = await fetch('/api/health-tips');
      const data = await response.json();
      if (data.success) {
        setTips(data.data);
      }
    } catch (err) {
      console.error('Error fetching tips:', err);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['All', ...new Set(tips.map(tip => tip.category))];
  
  const filteredTips = selectedCategory === 'All' 
    ? tips 
    : tips.filter(tip => tip.category === selectedCategory);

  return (
    <div className="health-tips-page">
      <div className="health-tips-container">
        <div className="health-tips-header">
          <h1>💡 Health Tips</h1>
          <p>Stay healthy with these helpful tips</p>
        </div>

        <div className="tips-category-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tip-category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="loading">Loading tips...</div>
        ) : (
          <div className="tips-grid">
            {filteredTips.map((tip) => (
              <div key={tip.id} className="tip-card">
                <div className="tip-icon">
                  {tip.category === 'General' && '🌟'}
                  {tip.category === 'Fitness' && '🏃'}
                  {tip.category === 'Nutrition' && '🥗'}
                  {tip.category === 'Hygiene' && '🧼'}
                  {tip.category === 'Mental Health' && '🧘'}
                  {tip.category === 'Prevention' && '🛡️'}
                </div>
                <h3>{tip.title}</h3>
                <p>{tip.content}</p>
                <span className="tip-category">{tip.category}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default HealthTips;

