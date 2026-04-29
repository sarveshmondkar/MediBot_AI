import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiUsers, FiShoppingCart, FiDollarSign, FiPackage, FiArrowRight } from 'react-icons/fi';

function Admin() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [usersRes, ordersRes, statsRes] = await Promise.all([
        fetch(`${API}/admin/users`),
        fetch(`${API}/admin/orders`),
        fetch(`${API}/admin/stats`)
      ]);

      const usersData = await usersRes.json();
      const ordersData = await ordersRes.json();
      const statsData = await statsRes.json();

      if (usersData.success) setUsers(usersData.data);
      if (ordersData.success) setOrders(ordersData.data);
      if (statsData.success) setStats(statsData.data);
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="admin-page">
        <div className="loading">Loading admin data...</div>
      </div>
    );
  }

  return (
    <motion.div 
      className="admin-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="admin-container">
        {/* Admin Header */}
        <motion.div 
          className="admin-header"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="admin-header-content">
            <h1>⚙️ Admin Dashboard</h1>
            <p>Manage your MediCare platform</p>
          </div>
          <Link to="/" className="back-home-btn">
            ← Back to Home
          </Link>
        </motion.div>

        {/* Stats Cards */}
        <motion.div 
          className="admin-stats"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="stat-card-admin">
            <div className="stat-icon-admin" style={{ background: 'rgba(255, 165, 9, 0.2)' }}>
              <FiUsers style={{ color: '#ffa509' }} />
            </div>
            <div className="stat-content">
              <span className="stat-number-admin">{stats?.totalUsers || 0}</span>
              <span className="stat-label-admin">Total Users</span>
            </div>
          </div>
          <div className="stat-card-admin">
            <div className="stat-icon-admin" style={{ background: 'rgba(6, 182, 212, 0.2)' }}>
              <FiShoppingCart style={{ color: '#06b6d4' }} />
            </div>
            <div className="stat-content">
              <span className="stat-number-admin">{stats?.totalOrders || 0}</span>
              <span className="stat-label-admin">Total Orders</span>
            </div>
          </div>
          <div className="stat-card-admin">
            <div className="stat-icon-admin" style={{ background: 'rgba(16, 185, 129, 0.2)' }}>
              <FiDollarSign style={{ color: '#10b981' }} />
            </div>
            <div className="stat-content">
              <span className="stat-number-admin">${(stats?.totalRevenue || 0).toFixed(2)}</span>
              <span className="stat-label-admin">Total Revenue</span>
            </div>
          </div>
          <div className="stat-card-admin">
            <div className="stat-icon-admin" style={{ background: 'rgba(139, 92, 246, 0.2)' }}>
              <FiPackage style={{ color: '#8b5cf6' }} />
            </div>
            <div className="stat-content">
              <span className="stat-number-admin">{stats?.totalMedicines || 0}</span>
              <span className="stat-label-admin">Medicines</span>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          className="admin-tabs"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <button 
            className={`tab-btn ${activeTab === 'users' ? 'active' : ''}`}
            onClick={() => setActiveTab('users')}
          >
            <FiUsers /> Users
          </button>
          <button 
            className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <FiShoppingCart /> Orders
          </button>
        </motion.div>

        {/* Users Table */}
        {activeTab === 'users' && (
          <motion.div 
            className="data-table-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2>👥 All Users</h2>
            {users.length === 0 ? (
              <div className="empty-data">
                <p>No users registered yet</p>
              </div>
            ) : (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Joined Date</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <motion.tr 
                      key={user.id}
                      whileHover={{ scale: 1.01 }}
                    >
                      <td>#{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            )}
          </motion.div>
        )}

        {/* Orders Table */}
        {activeTab === 'orders' && (
          <motion.div 
            className="data-table-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2>📦 All Orders</h2>
            {orders.length === 0 ? (
              <div className="empty-data">
                <p>No orders placed yet</p>
              </div>
            ) : (
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Email</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <motion.tr 
                      key={order.id}
                      whileHover={{ scale: 1.01 }}
                    >
                      <td>#{order.id}</td>
                      <td>{order.userName}</td>
                      <td>{order.userEmail}</td>
                      <td>${order.total?.toFixed(2)}</td>
                      <td>
                        <span className="status-badge">{order.status}</span>
                      </td>
                      <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            )}
          </motion.div>
        )}
      </div>

      <style>{`
        .admin-page {
          min-height: 100vh;
          padding: 100px 20px 50px;
          background: linear-gradient(180deg, #050b2c 0%, #0d1b3e 100%);
        }

        .admin-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding: 20px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
        }

        .admin-header h1 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 5px;
        }

        .admin-header p {
          color: rgba(255, 255, 255, 0.6);
        }

        .back-home-btn {
          background: linear-gradient(135deg, #ffa509 0%, #ffb833 100%);
          color: #050b2c;
          padding: 12px 24px;
          border-radius: 25px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .back-home-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(255, 165, 9, 0.4);
        }

        .admin-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        @media (max-width: 900px) {
          .admin-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .stat-card-admin {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 15px;
          padding: 20px;
          display: flex;
          align-items: center;
          gap: 15px;
          transition: all 0.3s ease;
        }

        .stat-card-admin:hover {
          border-color: rgba(255, 165, 9, 0.3);
          transform: translateY(-3px);
        }

        .stat-icon-admin {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }

        .stat-content {
          display: flex;
          flex-direction: column;
        }

        .stat-number-admin {
          font-size: 28px;
          font-weight: 700;
          color: #fff;
        }

        .stat-label-admin {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
        }

        .admin-tabs {
          display: flex;
          gap: 15px;
          margin-bottom: 25px;
        }

        .tab-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 12px 25px;
          border-radius: 25px;
          color: #fff;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .tab-btn:hover {
          border-color: #ffa509;
          color: #ffa509;
        }

        .tab-btn.active {
          background: linear-gradient(135deg, #ffa509 0%, #ffb833 100%);
          color: #050b2c;
          border-color: #ffa509;
        }

        .data-table-container {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 25px;
        }

        .data-table-container h2 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        .empty-data {
          text-align: center;
          padding: 50px;
          color: rgba(255, 255, 255, 0.5);
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
        }

        .data-table th {
          text-align: left;
          padding: 15px;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 500;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .data-table td {
          padding: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .data-table tr:hover td {
          background: rgba(255, 255, 255, 0.05);
        }

        .status-badge {
          background: rgba(16, 185, 129, 0.2);
          color: #10b981;
          padding: 5px 12px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .admin-header {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .admin-stats {
            grid-template-columns: 1fr;
          }

          .data-table {
            font-size: 14px;
          }

          .data-table th,
          .data-table td {
            padding: 10px 5px;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default Admin;

