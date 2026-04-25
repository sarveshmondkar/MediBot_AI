import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Profile({ user, onLogout }) {
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
      const response = await fetch(`/api/orders/${user.id}`);
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

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="profile-page">
        <div className="loading">Loading profile...</div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">👤</div>
          <div className="profile-info">
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        </div>

        <div className="profile-menu">
          <Link to="/orders" className="profile-menu-item">
            <span>📦</span> My Orders
          </Link>
          <Link to="/cart" className="profile-menu-item">
            <span>🛒</span> Shopping Cart
          </Link>
          <button onClick={handleLogout} className="profile-menu-item logout">
            <span>🚪</span> Logout
          </button>
        </div>

        <div className="profile-stats">
          <div className="stat-card">
            <span className="stat-icon">📦</span>
            <span className="stat-value">{orders.length}</span>
            <span className="stat-label">Total Orders</span>
          </div>
          <div className="stat-card">
            <span className="stat-icon">💰</span>
            <span className="stat-value">
              ${orders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}
            </span>
            <span className="stat-label">Total Spent</span>
          </div>
        </div>

        <div className="recent-orders">
          <h2>Recent Orders</h2>
          {orders.length === 0 ? (
            <p className="no-orders">No orders yet</p>
          ) : (
            <div className="orders-list">
              {orders.slice(0, 5).map((order) => (
                <div key={order.id} className="order-card">
                  <div className="order-header">
                    <span className="order-id">Order #{order.id}</span>
                    <span className="order-status">{order.status}</span>
                  </div>
                  <div className="order-details">
                    <span>{order.items?.length || 0} items</span>
                    <span className="order-total">${order.total?.toFixed(2)}</span>
                  </div>
                  <div className="order-date">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;

