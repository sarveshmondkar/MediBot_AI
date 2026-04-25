import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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

  if (loading) {
    return (
      <div className="orders-page">
        <div className="loading">Loading orders...</div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-container">
        <h1>📦 My Orders</h1>
        
        {orders.length === 0 ? (
          <div className="empty-orders">
            <p>You haven't placed any orders yet</p>
            <Link to="/" className="continue-shopping">Start Shopping</Link>
          </div>
        ) : (
          <div className="orders-list-full">
            {orders.map((order) => (
              <div key={order.id} className="order-card-full">
                <div className="order-header-full">
                  <div className="order-info">
                    <span className="order-id-full">Order #{order.id}</span>
                    <span className="order-date-full">
                      {new Date(order.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <span className="order-status-full">{order.status}</span>
                </div>
                
                <div className="order-items">
                  {order.items?.map((item, index) => (
                    <div key={index} className="order-item">
                      <span className="item-image">{item.medicine?.image || '💊'}</span>
                      <span className="item-name">{item.medicine?.name}</span>
                      <span className="item-qty">x{item.quantity}</span>
                      <span className="item-price">
                        ${((item.medicine?.price || 0) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="order-footer-full">
                  <span className="order-total-full">
                    Total: ${order.total?.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;

