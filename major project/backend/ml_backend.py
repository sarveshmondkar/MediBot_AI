"""
MediCare AI-Powered Healthcare Backend with ML
Flask + ML-based Symptom Analysis
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
from datetime import datetime

app = Flask(__name__)
CORS(app)

# In-memory storage
users = []
carts = {}
orders = {}

# Medicine catalog
medicines = [
    {"id": 1, "name": "Paracetamol 500mg", "category": "Pain Relief", "price": 2.99, "description": "Relieves pain and reduces fever", "uses": "Headache, Fever, Pain", "stock": 100, "image": "💊"},
    {"id": 2, "name": "Ibuprofen 400mg", "category": "Pain Relief", "price": 4.99, "description": "Anti-inflammatory pain reliever", "uses": "Pain, Inflammation, Fever", "stock": 80, "image": "💊"},
    {"id": 3, "name": "Aspirin 325mg", "category": "Pain Relief", "price": 3.49, "description": "Pain reliever and fever reducer", "uses": "Headache, Pain, Heart health", "stock": 60, "image": "💊"},
    {"id": 4, "name": "Cetirizine 10mg", "category": "Allergies", "price": 3.49, "description": "Antihistamine for allergies", "uses": "Allergies, Hay fever, Itching", "stock": 120, "image": "💊"},
    {"id": 5, "name": "Loratadine 10mg", "category": "Allergies", "price": 4.29, "description": "Non-drowsy antihistamine", "uses": "Allergies, Sneezing, Runny nose", "stock": 90, "image": "💊"},
    {"id": 6, "name": "Fexofenadine 180mg", "category": "Allergies", "price": 5.99, "description": "Long-lasting allergy relief", "uses": "Allergies, Hives, Itching", "stock": 70, "image": "💊"},
    {"id": 7, "name": "Pseudoephedrine 30mg", "category": "Cold & Flu", "price": 4.99, "description": "Decongestant for nasal congestion", "uses": "Cold, Sinus congestion, Flu", "stock": 85, "image": "🤧"},
    {"id": 8, "name": "Dextromethorphan 10mg", "category": "Cold & Flu", "price": 3.99, "description": "Cough suppressant", "uses": "Dry cough, Chest congestion", "stock": 95, "image": "🤧"},
    {"id": 9, "name": "Guaifenesin 200mg", "category": "Cold & Flu", "price": 4.49, "description": "Expectorant for mucus relief", "uses": "Chest congestion, Cough, Cold", "stock": 75, "image": "🤧"},
    {"id": 10, "name": "Omeprazole 20mg", "category": "Digestion", "price": 5.99, "description": "Proton pump inhibitor", "uses": "Acid reflux, Heartburn, GERD", "stock": 65, "image": "🫃"},
    {"id": 11, "name": "Antacid Chewable", "category": "Digestion", "price": 2.49, "description": "Fast-acting antacid", "uses": "Indigestion, Heartburn, Acid", "stock": 110, "image": "🫃"},
    {"id": 12, "name": "Buscopan 10mg", "category": "Digestion", "price": 6.49, "description": "Anti-spasmodic for stomach cramps", "uses": "Stomach cramps, IBS, Pain", "stock": 55, "image": "🫃"},
    {"id": 13, "name": "Domperidone 10mg", "category": "Nausea", "price": 4.99, "description": "Anti-nausea medication", "uses": "Nausea, Vomiting, Motion sickness", "stock": 80, "image": "🤢"},
    {"id": 14, "name": "Ondansetron 4mg", "category": "Nausea", "price": 7.99, "description": "Anti-emetic for nausea control", "uses": "Nausea, Post-surgery, Chemotherapy", "stock": 45, "image": "🤢"},
    {"id": 15, "name": "Vitamin C 1000mg", "category": "Vitamins", "price": 5.99, "description": "Immune system booster", "uses": "Immunity, Cold prevention, Energy", "stock": 150, "image": "💊"},
    {"id": 16, "name": "Vitamin D3 1000IU", "category": "Vitamins", "price": 4.99, "description": "Essential for bone health", "uses": "Bone health, Immunity, Mood", "stock": 130, "image": "💊"},
    {"id": 17, "name": "Multivitamin Complex", "category": "Vitamins", "price": 8.99, "description": "Complete daily vitamin supplement", "uses": "Energy, Immunity, Overall health", "stock": 100, "image": "💊"},
    {"id": 18, "name": "Calcium 500mg", "category": "Vitamins", "price": 3.99, "description": "Essential mineral supplement", "uses": "Bone health, Teeth, Muscles", "stock": 120, "image": "💊"},
    {"id": 19, "name": "Bandages Large", "category": "First Aid", "price": 2.99, "description": "Sterile wound dressings", "uses": "Wounds, Cuts, Scrapes", "stock": 200, "image": "🩹"},
    {"id": 20, "name": "Antiseptic Cream", "category": "First Aid", "price": 3.49, "description": "Wound infection prevention", "uses": "Cuts, Burns, Scrapes", "stock": 90, "image": "🩹"},
]

health_tips = [
    {"id": 1, "title": "Stay Hydrated", "content": "Drink at least 8 glasses of water daily.", "category": "General"},
    {"id": 2, "title": "Get Enough Sleep", "content": "Aim for 7-9 hours of sleep per night.", "category": "General"},
    {"id": 3, "title": "Exercise Regularly", "content": "30 minutes of moderate exercise daily.", "category": "Fitness"},
    {"id": 4, "title": "Eat Balanced Diet", "content": "Include fruits, vegetables, and whole grains.", "category": "Nutrition"},
    {"id": 5, "title": "Wash Hands Frequently", "content": "Proper hand hygiene prevents many infections.", "category": "Hygiene"},
    {"id": 6, "title": "Manage Stress", "content": "Practice meditation or deep breathing.", "category": "Mental Health"},
    {"id": 7, "title": "Regular Check-ups", "content": "Visit your doctor for regular health screenings.", "category": "Prevention"},
    {"id": 8, "title": "Limit Sugar Intake", "content": "Reduce consumption of sugary foods and drinks.", "category": "Nutrition"},
]

categories = ["Pain Relief", "Allergies", "Cold & Flu", "Digestion", "Nausea", "Vitamins", "First Aid"]

# ML-Based Symptom Analysis Engine
class SymptomAnalyzer:
    def __init__(self):
        self.symptom_keywords = {
            "headache": {"condition": "headache", "weight": 1.0},
            "migraine": {"condition": "headache", "weight": 1.2},
            "fever": {"condition": "fever", "weight": 1.0},
            "cold": {"condition": "cold", "weight": 1.0},
            "flu": {"condition": "flu", "weight": 1.3},
            "cough": {"condition": "cough", "weight": 1.0},
            "sore throat": {"condition": "sore_throat", "weight": 1.0},
            "allergy": {"condition": "allergy", "weight": 1.0},
            "stomach pain": {"condition": "stomach_pain", "weight": 1.0},
            "nausea": {"condition": "nausea", "weight": 1.0},
            "vomiting": {"condition": "nausea", "weight": 1.3},
            "body pain": {"condition": "body_pain", "weight": 1.0},
            "muscle pain": {"condition": "body_pain", "weight": 1.1},
            "back pain": {"condition": "back_pain", "weight": 1.0},
            "acid reflux": {"condition": "acid_reflux", "weight": 1.2},
            "heartburn": {"condition": "acid_reflux", "weight": 1.0},
            "indigestion": {"condition": "indigestion", "weight": 1.0},
            "fatigue": {"condition": "fatigue", "weight": 0.8},
            "tired": {"condition": "fatigue", "weight": 0.7},
            "insomnia": {"condition": "sleep", "weight": 1.0},
            "anxiety": {"condition": "anxiety", "weight": 1.0},
            "stress": {"condition": "anxiety", "weight": 0.9},
            "wound": {"condition": "wound", "weight": 1.0},
            "rash": {"condition": "skin", "weight": 1.0},
        }
        
        self.condition_medicines = {
            "headache": {"medicines": ["Paracetamol 500mg", "Ibuprofen 400mg", "Aspirin 325mg"], "advice": "Rest in a quiet room. Stay hydrated.", "precaution": "Consult doctor if persists > 3 days."},
            "fever": {"medicines": ["Paracetamol 500mg", "Ibuprofen 400mg"], "advice": "Drink fluids. Monitor temperature.", "precaution": "Seek help if fever > 103F."},
            "cold": {"medicines": ["Pseudoephedrine 30mg", "Vitamin C 1000mg"], "advice": "Stay warm, drink hot liquids.", "precaution": "Consult if > 10 days."},
            "flu": {"medicines": ["Paracetamol 500mg", "Vitamin C 1000mg"], "advice": "Rest and stay hydrated.", "precaution": "Seek care for breathing issues."},
            "cough": {"medicines": ["Dextromethorphan 10mg", "Guaifenesin 200mg"], "advice": "Stay hydrated, use humidifier.", "precaution": "Consult if > 2 weeks."},
            "allergy": {"medicines": ["Cetirizine 10mg", "Loratadine 10mg"], "advice": "Avoid allergens.", "precaution": "Severe reactions need emergency care."},
            "stomach_pain": {"medicines": ["Antacid Chewable", "Omeprazole 20mg"], "advice": "Avoid spicy foods. Eat light.", "precaution": "Seek help for severe pain."},
            "nausea": {"medicines": ["Domperidone 10mg", "Ondansetron 4mg"], "advice": "Eat small meals.", "precaution": "Watch for dehydration."},
            "body_pain": {"medicines": ["Ibuprofen 400mg", "Paracetamol 500mg"], "advice": "Rest, apply heat/ice.", "precaution": "Consult for severe pain."},
            "acid_reflux": {"medicines": ["Omeprazole 20mg", "Antacid Chewable"], "advice": "Avoid trigger foods.", "precaution": "Long-term use needs doctor."},
            "fatigue": {"medicines": ["Multivitamin Complex", "Vitamin D3 1000IU"], "advice": "Sleep well, exercise regularly.", "precaution": "May indicate underlying condition."},
            "sleep": {"medicines": ["Consult doctor"], "advice": "Maintain sleep schedule.", "precaution": "Chronic insomnia needs help."},
            "anxiety": {"medicines": ["Consult healthcare provider"], "advice": "Practice deep breathing.", "precaution": "Seek professional help."},
            "wound": {"medicines": ["Antiseptic Cream", "Bandages Large"], "advice": "Clean and cover wound.", "precaution": "Seek care for deep wounds."},
            "skin": {"medicines": ["Antiseptic Cream"], "advice": "Keep area clean.", "precaution": "Consult if spreads."},
        }
    
    def analyze_symptoms(self, user_input):
        text = user_input.lower()
        condition_scores = {}
        
        for keyword, data in self.symptom_keywords.items():
            if keyword in text:
                condition = data["condition"]
                weight = data["weight"]
                if condition not in condition_scores:
                    condition_scores[condition] = 0
                condition_scores[condition] += weight
        
        if not condition_scores:
            return None
        
        primary = max(condition_scores, key=condition_scores.get)
        confidence = min(condition_scores[primary] / 2, 1.0)
        
        rec = self.condition_medicines.get(primary, {
            "medicines": ["Consult healthcare provider"],
            "advice": "Please consult a doctor.",
            "precaution": "Not a substitute for professional advice."
        })
        
        return {
            "condition": primary,
            "confidence": round(confidence * 100, 1),
            "symptoms_matched": list(condition_scores.keys()),
            **rec
        }

symptom_analyzer = SymptomAnalyzer()

# Routes
@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    user = next((u for u in users if u["email"] == data.get("email") and u["password"] == data.get("password")), None)
    if user:
        carts.setdefault(user["id"], [])
        return jsonify({"success": True, "user": {"id": user["id"], "name": user["name"], "email": user["email"]}})
    return jsonify({"success": False, "message": "Invalid credentials"}), 401

@app.route("/api/signup", methods=["POST"])
def signup():
    data = request.json
    if any(u["email"] == data.get("email") for u in users):
        return jsonify({"success": False, "message": "Email already registered"}), 400
    new_user = {"id": int(datetime.now().timestamp() * 1000), "name": data.get("name"), "email": data.get("email"), "password": data.get("password"), "createdAt": datetime.now().isoformat()}
    users.append(new_user)
    carts[new_user["id"]] = []
    return jsonify({"success": True, "user": {"id": new_user["id"], "name": new_user["name"], "email": new_user["email"]}})

@app.route("/api/medicines", methods=["GET"])
def get_medicines():
    symptom = request.args.get("symptom")
    if symptom:
        result = symptom_analyzer.analyze_symptoms(symptom)
        if result:
            return jsonify({"success": True, "data": result})
        return jsonify({"success": False, "message": "Could not analyze symptoms"})
    
    filtered = medicines.copy()
    cat = request.args.get("category")
    if cat and cat != "All":
        filtered = [m for m in filtered if m["category"] == cat]
    search = request.args.get("search")
    if search:
        s = search.lower()
        filtered = [m for m in filtered if s in m["name"].lower() or s in m["uses"].lower()]
    return jsonify({"success": True, "data": filtered})

@app.route("/api/categories", methods=["GET"])
def get_categories():
    return jsonify({"success": True, "data": categories})

@app.route("/api/health-tips", methods=["GET"])
def get_health_tips():
    return jsonify({"success": True, "data": health_tips})

@app.route("/api/cart/<int:user_id>", methods=["GET"])
def get_cart(user_id):
    cart = carts.get(user_id, [])
    enriched = []
    for item in cart:
        med = next((m for m in medicines if m["id"] == item["medicineId"]), None)
        if med:
            enriched.append({**item, "medicine": med})
    return jsonify({"success": True, "data": enriched})

@app.route("/api/cart", methods=["POST"])
def add_to_cart():
    data = request.json
    uid, mid, qty = data.get("userId"), data.get("medicineId"), data.get("quantity", 1)
    carts.setdefault(uid, [])
    existing = next((i for i in carts[uid] if i["medicineId"] == mid), None)
    if existing:
        existing["quantity"] += qty
    else:
        carts[uid].append({"medicineId": mid, "quantity": qty, "addedAt": datetime.now().isoformat()})
    return jsonify({"success": True, "message": "Added to cart"})

@app.route("/api/cart", methods=["PUT"])
def update_cart():
    data = request.json
    uid, mid, qty = data.get("userId"), data.get("medicineId"), data.get("quantity")
    if uid not in carts:
        return jsonify({"success": False, "message": "Cart not found"}), 404
    item = next((i for i in carts[uid] if i["medicineId"] == mid), None)
    if item:
        if qty <= 0:
            carts[uid] = [i for i in carts[uid] if i["medicineId"] != mid]
        else:
            item["quantity"] = qty
        return jsonify({"success": True, "message": "Cart updated"})
    return jsonify({"success": False, "message": "Item not found"}), 404

@app.route("/api/cart", methods=["DELETE"])
def remove_from_cart():
    data = request.json
    uid, mid = data.get("userId"), data.get("medicineId")
    if uid in carts:
        carts[uid] = [i for i in carts[uid] if i["medicineId"] != mid]
    return jsonify({"success": True, "message": "Item removed"})

@app.route("/api/orders", methods=["POST"])
def place_order():
    data = request.json
    uid, items, total = data.get("userId"), data.get("items"), data.get("total")
    orders.setdefault(uid, []).append({"id": int(datetime.now().timestamp() * 1000), "items": items, "total": total, "status": "Processing", "createdAt": datetime.now().isoformat()})
    carts[uid] = []
    return jsonify({"success": True, "message": "Order placed"})

@app.route("/api/orders/<int:user_id>", methods=["GET"])
def get_orders(user_id):
    user_orders = orders.get(user_id, [])
    user = next((u for u in users if u["id"] == user_id), None)
    enriched = [{**o, "userName": user["name"] if user else "Unknown", "userEmail": user["email"] if user else "Unknown"} for o in user_orders]
    return jsonify({"success": True, "data": enriched})

@app.route("/api/admin/users", methods=["GET"])
def get_all_users():
    return jsonify({"success": True, "data": users})

@app.route("/api/admin/orders", methods=["GET"])
def get_all_orders():
    all_orders = []
    for uid, user_ords in orders.items():
        user = next((u for u in users if u["id"] == uid), None)
        for o in user_ords:
            all_orders.append({**o, "userName": user["name"] if user else "Unknown", "userEmail": user["email"] if user else "Unknown"})
    all_orders.sort(key=lambda x: x["createdAt"], reverse=True)
    return jsonify({"success": True, "data": all_orders})

@app.route("/api/admin/stats", methods=["GET"])
def get_stats():
    total_rev = sum(sum(o["total"] for o in ords) for ords in orders.values())
    return jsonify({"success": True, "data": {"totalUsers": len(users), "totalOrders": sum(len(o) for o in orders.values()), "totalRevenue": total_rev, "totalMedicines": len(medicines)}})

@app.route("/api/search", methods=["GET"])
def search():
    q = request.args.get("q", "")
    if not q:
        return jsonify({"success": True, "data": []})
    s = q.lower()
    results = [m for m in medicines if s in m["name"].lower() or s in m["uses"].lower()]
    return jsonify({"success": True, "data": results})

@app.route("/api/analyze-symptoms", methods=["POST"])
def analyze_symptoms():
    data = request.json
    symptoms = data.get("symptoms", "")
    if not symptoms:
        return jsonify({"success": False, "message": "No symptoms provided"}), 400
    result = symptom_analyzer.analyze_symptoms(symptoms)
    if result:
        return jsonify({"success": True, "data": result})
    return jsonify({"success": False, "message": "Could not analyze symptoms"})

if __name__ == "__main__":
    print("=" * 50)
    print("MediCare Python Backend with ML")
    print("Server: http://localhost:5000")
    print("ML Symptom Analyzer: Active")
    print("=" * 50)
    app.run(port=5000, debug=True)

