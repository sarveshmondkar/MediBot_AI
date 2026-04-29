import { useState, useEffect } from 'react';

function HealthTips() {
  const [tips, setTips] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const API = import.meta.env.VITE_API_URL;


  useEffect(() => {
    fetchTips(page, selectedCategory);
  }, [page, selectedCategory]);

  const fetchTips = async (pageNumber = 1, category = selectedCategory) => {
    try {
      setLoading(true);

      const query = category !== 'All' 
        ? `?page=${pageNumber}&limit=9&category=${category}`
        : `?page=${pageNumber}&limit=9`;

      const response = await fetch(`${API}/health-tips${query}`);
      const data = await response.json();

      if (data.success) {
        setTips(data.data);
        setTotalPages(data.totalPages);
      }
    } catch (err) {
      console.error('Error fetching tips:', err);
    } finally {
      setLoading(false);
    }
  };

const categories = [
  'All',
  'General',
  'Fitness',
  'Nutrition',
  'Hygiene',
  'Mental Health',
  'Prevention'
];
  

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
              onClick={() => {
                setSelectedCategory(cat);
                setPage(1); // reset page when switching category
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="loading">Loading tips...</div>
        ) : (
          <>
          <div className="tips-grid">
            {tips.map((tip) => (
              <div key={tip._id} className="tip-card">
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
          <div className="pagination">
            <button 
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              ⬅ Prev
            </button>

            <span>Page {page} of {totalPages}</span>

            <button 
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next ➡
            </button>
          </div>
          </>
        )}
      </div>
    </div>
  );
}

export default HealthTips;

