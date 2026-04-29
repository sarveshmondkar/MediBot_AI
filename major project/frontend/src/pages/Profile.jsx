import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { suggestions } from "../data/suggestions";

function Profile({ user, onLogout }) {
  const [orders, setOrders] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    age: "",
    gender: "",
    height: "",
    weight: "",
    bloodGroup: "",
    previousDiseases: [],
    currentMedications: [],
    allergies: [],
    pastSurgeries: []
  });
  const [activeField, setActiveField] = useState(null);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_URL;

  const bloodOptions = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  const fetchOrders = async () => {
  try {
    const response = await fetch(`${API}/orders/${user.id}`);
    const data = await response.json();
    if (data.success) {
      setOrders(data.data);
    }
  } catch (err) {
    console.error('Error fetching orders:', err);
  }
  };

  const fetchProfile = async () => {
  try {
      const res = await fetch(`${API}/profile/${user.id}`);
      const data = await res.json();
      console.log("Profile API response:", data);
      if (data.success && data.data) {
        setProfile((prev) => ({
        ...prev,
        ...data.data,
        previousDiseases: data.data.previousDiseases || [],
        currentMedications: data.data.currentMedications || [],
        allergies: data.data.allergies || [],
        pastSurgeries: data.data.pastSurgeries || []
      }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const loadData = async () => {
      await fetchOrders();
      await fetchProfile();
      setLoading(false); // ✅ move here
    };

    loadData();
  }, [user]);

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  const handleTagInput = (e, field) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const value = e.target.value.trim();
      if (!value) return;

      setProfile(prev => {
        const existing = prev[field] || [];

        if (existing.some(item => item.toLowerCase() === value.toLowerCase())) {
          alert("Already added ⚠️");
          return prev;
        }

        return {
          ...prev,
          [field]: [...existing, value]
        };
      });

      // ✅ CLEAR INPUT HERE (outside setState)
      e.target.value = "";
    }
  };

  const handleInputChange = (e, field) => {
    const value = e.target.value;

    if (!value) {
      setFilteredOptions([]);
      return;
    }

    const matches = suggestions[field].filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredOptions(matches);
    setActiveField(field);
  };

  const addTag = (field, value) => {
    setProfile(prev => {
      const existing = prev[field] || [];

      if (existing.some(item => item.toLowerCase() === value.toLowerCase())) {
        alert("Already added ⚠️");
        return prev;
      }

      return {
        ...prev,
        [field]: [...existing, value]
      };
    });

    setFilteredOptions([]);
  };

  const removeTag = (field, index) => {
    const updated = [...profile[field]];
    updated.splice(index, 1);
    setProfile({ ...profile, [field]: updated });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: e.target.type === "number" 
        ? (value === "" ? "" : Number(value))
        : value
    });
  };

  const handleSave = async () => {
  try {
    const payload = {
      userId: user.id,
      healthProfile: {
        age: profile.age || null,
        gender: profile.gender || "",
        height: profile.height || null,
        weight: profile.weight || null,
        bloodGroup: profile.bloodGroup || "",
        previousDiseases: profile.previousDiseases || [],
        currentMedications: profile.currentMedications || [],
        allergies: profile.allergies || [],
        pastSurgeries: profile.pastSurgeries || []
      }
    };

    const res = await fetch(`${API}/update-health`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    if (data.success) {
      alert("Profile updated ✅");
    }
  } catch (err) {
    console.error(err);
  }
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

        {/* <div className="recent-orders">
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
        </div> */}
        
        <div className="health-profile">
          <h2>🩺 Health Profile</h2>

          <div className="health-grid">

            <div className="field">
              <label>Age</label>
              <input
                type="number"
                name="age"
                min="0"
                max="120"
                value={profile.age ?? ""}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Gender</label>
              <div className="radio-group">
                {["Male", "Female", "Other"].map(g => (
                  <label key={g}>
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={profile.gender === g}
                      onChange={handleChange}
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <label>Height (cm)</label>
              <input
                type="number"
                name="height"
                min="50"
                max="250"
                value={profile.height ?? ""}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Weight (kg)</label>
              <input
                type="number"
                name="weight"
                min="20"
                max="200"
                value={profile.weight ?? ""}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Blood Group</label>

              <div className="custom-select">
                <div className="selected" onClick={() => setOpen(!open)}>
                  {profile.bloodGroup || "Select"}
                </div>

                {open && (
                  <div className="options">
                    {bloodOptions.map(bg => (
                      <div
                        key={bg}
                        onClick={() => {
                          setProfile({ ...profile, bloodGroup: bg });
                          setOpen(false);
                        }}
                      >
                        {bg}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* TAG INPUTS */}
            {["previousDiseases", "currentMedications", "allergies", "pastSurgeries"].map(field => (
              <div className="field full" key={field}>
                <label>{field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</label>

                <div className="tag-box">
                  {(profile[field] || []).map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                      <button onClick={() => removeTag(field, i)}>×</button>
                    </span>
                  ))}

                  <input
                    placeholder="Type to search..."
                    onChange={(e) => handleInputChange(e, field)}
                    onKeyDown={(e) => handleTagInput(e, field)}
                  />

                  {/* Suggestions dropdown */}
                  {activeField === field && filteredOptions.length > 0 && (
                    <div className="suggestions">
                      {filteredOptions.map((item, i) => (
                        <div key={i} onClick={() => addTag(field, item)}>
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
              </div>
            ))}

          </div>

          <button className="save-btn" onClick={handleSave}>
            💾 Save Profile
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Profile;

