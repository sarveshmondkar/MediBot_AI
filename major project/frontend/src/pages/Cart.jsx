import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
      const response = await fetch(`/api/cart/${user.id}`);
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
      await fetch('/api/cart', {
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
      await fetch('/api/cart', {
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
      
      const response = await fetch('/api/orders', {
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
        alert(`Order placed successfully! Order ID: ${data.orderId}`);
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
        <div className="loading">Loading cart...</div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>🛒 Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <Link to="/" className="continue-shopping">Continue Shopping</Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.medicineId} className="cart-item">
                  <div className="cart-item-image">{item.medicine?.image || '💊'}</div>
                  <div className="cart-item-info">
                    <h3>{item.medicine?.name}</h3>
                    <p className="cart-item-price">${item.medicine?.price?.toFixed(2)}</p>
                    <p className="cart-item-category">{item.medicine?.category}</p>
                  </div>
                  <div className="cart-item-quantity">
                    <button onClick={() => updateQuantity(item.medicineId, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.medicineId, item.quantity + 1)}>+</button>
                  </div>
                  <div className="cart-item-total">
                    ${((item.medicine?.price || 0) * item.quantity).toFixed(2)}
                  </div>
                  <button className="remove-btn" onClick={() => removeItem(item.medicineId)}>✕</button>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal ({cart.length} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button 
                className="checkout-btn" 
                onClick={placeOrder}
                disabled={ordering}
              >
                {ordering ? 'Processing...' : 'Place Order'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;

