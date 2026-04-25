import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      const response = await fetch('/api/categories');
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
      
      const response = await fetch(`/api/medicines?${params}`);
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
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, medicineId, quantity: 1 })
      });
      
      const data = await response.json();
      if (data.success) {
        alert('Added to cart!');
      }
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
  };

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>💊 Medicine Shop</h1>
        <p>Find the medicines you need</p>
      </div>

      <div className="shop-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search medicines..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="category-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="loading">Loading medicines...</div>
      ) : (
        <div className="medicines-grid">
          {medicines.map((medicine) => (
            <div key={medicine.id} className="medicine-card-full">
              <div className="medicine-image-full">{medicine.image}</div>
              <div className="medicine-info-full">
                <span className="medicine-category">{medicine.category}</span>
                <h3>{medicine.name}</h3>
                <p className="medicine-description">{medicine.description}</p>
                <p className="medicine-uses">Uses: {medicine.uses}</p>
                <div className="medicine-footer-full">
                  <span className="medicine-price">${medicine.price.toFixed(2)}</span>
                  <span className="medicine-stock">In Stock: {medicine.stock}</span>
                </div>
                <button 
                  className="add-to-cart-btn"
                  onClick={() => addToCart(medicine.id)}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {medicines.length === 0 && !loading && (
        <div className="no-results">
          <p>No medicines found</p>
        </div>
      )}
    </div>
  );
}

export default Shop;

