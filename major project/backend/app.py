
"""
MediCare AI-Powered Healthcare Backend
Flask + ML-based Symptom Analysis
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import random
from datetime import datetime

app = Flask(__name__)
CORS(app)

# In-memory storage (for demo purposes)
users = []
carts = {}
orders = {}

# Medicine catalog
medicines = [
    { "id": 1, "name": "Paracetamol 500mg", "category": "Pain Relief", "price": 2.99, "description": "Relieves pain and reduces fever", "uses": "Headache, Fever, Pain", "stock": 100, "image": "💊" },
    { "id": 2, "name": "Ibuprofen 400mg", "category": "Pain Relief", "price": 4.99, "description": "Anti-inflammatory pain reliever", "uses": "Pain, Inflammation, Fever", "stock": 80, "image": "💊" },
    { "id": 3, "name": "Aspirin 325mg", "category": "Pain Relief", "price": 3.49, "description": "Pain reliever and fever reducer", "uses": "Headache, Pain, Heart health", "stock": 60, "image": "💊" },
    { "id": 4, "name": "Cetirizine 10mg", "category": "Allergies", "price": 3.49, "description": "Antihistamine for allergies", "uses": "Allergies, Hay fever, Itching", "stock": 120, "image": "💊" },
    { "id": 5, "name": "Loratadine 10mg", "category": "Allergies", "price": 4.29, "description": "Non-drowsy antihistamine", "uses": "Allergies, Sneezing, Runny nose", "stock": 90, "image": "💊" },
    { "id": 6, "name": "Fexofenadine 180mg", "category": "Allergies", "price": 5.99, "description": "Long-lasting allergy relief", "uses": "Allergies, Hives, Itching", "stock": 70, "image": "💊" },
    { "id": 7, "name": "Pseudoephedrine 30mg", "category": "Cold & Flu", "price": 4.99, "description": "Decongestant for nasal congestion", "uses": "Cold, Sinus congestion, Flu", "stock": 85, "image": "🤧" },
    { "id": 8, "name": "Dextromethorphan 10mg", "category": "Cold & Flu", "price": 3.99, "description": "Cough suppressant", "uses": "Dry cough, Chest congestion", "stock": 95, "image": "🤧" },
    { "id": 9, "name": "Guaifenesin 200mg", "category": "Cold & Flu", "price": 4.49, "description": "Expectorant for mucus relief", "uses": "Chest congestion, Cough, Cold", "stock": 75, "image": "🤧" },
    { "id": 10, "name": "Omeprazole 20mg", "category": "Digestion", "price": 5.99, "description": "Proton pump inhibitor", "uses": "Acid reflux, Heartburn, GERD", "stock": 65, "image": "🫃" },
    { "id": 11, "name": "Antacid Chewable", "category": "Digestion", "price": 2.49, "description": "Fast-acting antacid", "uses": "Indigestion, Heartburn, Acid", "stock": 110, "image": "🫃" },
    { "id": 12, "name": "Buscopan 10mg", "category": "Digestion", "price": 6.49, "description": "Anti-spasmodic for stomach cramps", "uses": "Stomach cramps, IBS, Pain", "stock": 55, "image": "🫃" },
    { "id": 13, "name": "Domperidone 10mg", "category": "Nausea", "price": 4.99, "description": "Anti-nausea medication", "uses": "Nausea, Vomiting, Motion sickness", "stock": 80, "image": "🤢" },
    { "id": 14, "name": "Ondansetron 4mg", "category": "Nausea", "price": 7.99, "description": "Anti-emetic for nausea control", "uses": "Nausea, Post-surgery, Chemotherapy", "stock": 45, "image": "🤢" },
    { "id": 15, "name": "Vitamin C 1000mg", "category": "Vitamins", "price": 5.99, "description": "Immune system booster", "uses": "Immunity, Cold prevention, Energy", "stock": 150, "image": "💊" },
    { "id": 16, "name": "Vitamin D3 1000IU", "category": "Vitamins", "price": 4.99, "description": "Essential for bone health", "uses": "Bone health, Immunity, Mood", "stock": 130, "image": "💊" },
    { "id": 17, "name": "Multivitamin Complex", "category": "Vitamins", "price": 8.99, "description": "Complete daily vitamin supplement", "uses": "Energy, Immunity, Overall health", "stock": 100, "image": "💊" },
    { "id": 18, "name": "Calcium 500mg", "category": "Vitamins", "price": 3.99, "description": "Essential mineral supplement", "uses": "Bone health, Teeth, Muscles", "stock": 120, "image": "💊" },
    { "id": 19, "name": "Bandages Large", "category": "First Aid", "price": 2.99, "description": "Sterile wound dressings", "uses": "Wounds, Cuts, Scrapes", "stock": 200, "image": "🩹" },
    { "id": 20, "name": "Antiseptic Cream", "category": "First Aid", "price": 3.49, "description": "Wound infection prevention", "uses": "Cuts, Burns, Scrapes", "stock": 90, "image": "🩹" },
]

# Health tips
health_tips = [
    { "id": 1, "title": "Stay Hydrated", "content": "Drink at least 8 glasses of water daily to maintain good health.", "category": "General" },
    { "id": 2, "title": "Get Enough Sleep", "content": "Aim for 7-9 hours of sleep per night for optimal health.", "category": "General" },
    { "id": 3, "title": "Exercise Regularly", "content": "30 minutes of moderate exercise daily can improve your health.", "category": "Fitness" },
    { "id": 4, "title": "Eat Balanced Diet", "content": "Include fruits, vegetables, and whole grains in your diet.", "category": "Nutrition" },
    { "id": 5, "title": "Wash Hands Frequently", "content": "Proper hand hygiene prevents many infections.", "category": "Hygiene" },
    { "id": 6, "title": "Manage Stress", "content": "Practice meditation or deep breathing to reduce stress levels.", "category": "Mental Health" },
    { "id": 7, "title": "Regular Check-ups", "content": "Visit your doctor for regular health screenings.", "category": "Prevention" },
    { "id": 8, "title": "Limit Sugar Intake", "content": "Reduce consumption of sugary foods and drinks.", "category": "Nutrition" },
]

categories = ['Pain Relief', 'Allergies', 'Cold & Flu', 'Digestion', 'Nausea', 'Vitamins', 'First Aid']

# ============================================
# ML-Based Symptom Analysis Engine
# ============================================

class SymptomAnalyzer:
    """
    ML-based symptom analyzer using keyword extraction
    and weighted scoring system
    """
    
    def __init__(self):
        # Symptom keywords mapped to conditions
        self.symptom_keywords = {
            'headache': {'condition': 'headache', 'weight': 1.0, 'severity': 'moderate'},
            'migraine': {'condition': 'headache', 'weight': 1.2, 'severity': 'high'},
            'fever': {'condition': 'fever', 'weight': 1.0, 'severity': 'moderate'},
            'high temperature': {'condition': 'fever', 'weight': 1.2, 'severity': 'high'},
            'cold': {'condition': 'cold', 'weight': 1.0, 'severity': 'low'},
            'flu': {'condition': 'flu', 'weight': 1.3, 'severity': 'moderate'},
            'cough': {'condition': 'cough', 'weight': 1.0, 'severity': 'low'},
            'dry cough': {'condition': 'cough', 'weight': 1.1, 'severity': 'low'},
            'wet cough': {'condition': 'cough', 'weight': 1.1, 'severity': 'moderate'},
            'sore throat': {'condition': 'sore_throat', 'weight': 1.0, 'severity': 'low'},
            'runny nose': {'condition': 'cold', 'weight': 0.8, 'severity': 'low'},
            'stuffy nose': {'condition': 'cold', 'weight': 0.9, 'severity': 'low'},
            'sneezing': {'condition': 'allergy', 'weight': 0.8, 'severity': 'low'},
            'allergy': {'condition': 'allergy', 'weight': 1.0, 'severity': 'low'},
            'allergies': {'condition': 'allergy', 'weight': 1.0, 'severity': 'low'},
            'hay fever': {'condition': 'allergy', 'weight': 1.1, 'severity': 'moderate'},
            'itching': {'condition': 'allergy', 'weight': 0.9, 'severity': 'low'},
            'hives': {'condition': 'allergy', 'weight': 1.2, 'severity': 'moderate'},
            'stomach pain': {'condition': 'stomach_pain', 'weight': 1.0, 'severity': 'moderate'},
            'belly pain': {'condition': 'stomach_pain', 'weight': 1.0, 'severity': 'moderate'},
            'abdominal pain': {'condition': 'stomach_pain', 'weight': 1.1, 'severity': 'moderate'},
            'nausea': {'condition': 'nausea', 'weight': 1.0, 'severity': 'moderate'},
            'vomiting': {'condition': 'nausea', 'weight': 1.3, 'severity': 'high'},
            'feeling sick': {'condition': 'nausea', 'weight': 0.9, 'severity': 'low'},
            'dizziness': {'condition': 'dizziness', 'weight': 1.0, 'severity': 'moderate'},
            'body pain': {'condition': 'body_pain', 'weight': 1.0, 'severity': 'low'},
            'muscle pain': {'condition': 'body_pain', 'weight': 1.1, 'severity': 'moderate'},
            'joint pain': {'condition': 'body_pain', 'weight': 1.1, 'severity': 'moderate'},
            'back pain': {'condition': 'back_pain', 'weight': 1.0, 'severity': 'moderate'},
            'acid reflux': {'condition': 'acid_reflux', 'weight': 1.2, 'severity': 'moderate'},
            'heartburn': {'condition': 'acid_reflux', 'weight': 1.0, 'severity': 'low'},
            'indigestion': {'condition': 'indigestion', 'weight': 1.0, 'severity': 'low'},
            'gas': {'condition': 'indigestion', 'weight': 0.8, 'severity': 'low'},
            'constipation': {'condition': 'digestive', 'weight': 1.0, 'severity': 'low'},
            'diarrhea': {'condition': 'digestive', 'weight': 1.1, 'severity': 'moderate'},
            'tired': {'condition': 'fatigue', 'weight': 0.7, 'severity': 'low'},
            'fatigue': {'condition': 'fatigue', 'weight': 0.8, 'severity': 'low'},
            'weakness': {'condition': 'fatigue', 'weight': 0.9, 'severity': 'moderate'},
            'tiredness': {'condition': 'fatigue', 'weight': 0.8, 'severity': 'low'},
            'low energy': {'condition': 'fatigue', 'weight': 0.7, 'severity': 'low'},
            'insomnia': {'condition': 'sleep', 'weight': 1.0, 'severity': 'moderate'},
            'cannot sleep': {'condition': 'sleep', 'weight': 1.0, 'severity': 'moderate'},
            'sleep problem': {'condition': 'sleep', 'weight': 1.0, 'severity': 'moderate'},
            'anxiety': {'condition': 'anxiety', 'weight': 1.0, 'severity': 'moderate'},
            'stress': {'condition': 'anxiety', 'weight': 0.9, 'severity': 'low'},
            'wound': {'condition': 'wound', 'weight': 1.0, 'severity': 'moderate'},
            'cut': {'condition': 'wound', 'weight': 1.0, 'severity': 'low'},
            'burn': {'condition': 'burn', 'weight': 1.2, 'severity': 'moderate'},
            'skin infection': {'condition': 'skin', 'weight': 1.1, 'severity': 'moderate'},
            'rash': {'condition': 'skin', 'weight': 1.0, 'severity': 'low'},
        }
        
        # Medicine recommendations based on conditions
        self.condition_medicines = {
            'headache': {
                'medicines': ['Paracetamol 500mg', 'Ibuprofen 400mg', 'Aspirin 325mg'],
                'advice': 'Rest in a quiet, dark room. Stay hydrated. Avoid screen time.',
                'precaution': 'Do not take on empty stomach. Consult doctor if persists > 3 days.'
            },
            'fever': {
                'medicines': ['Paracetamol 500mg', 'Ibuprofen 400mg'],
                'advice': 'Drink plenty of fluids. Rest and monitor temperature. Use cool compress.',
                'precaution': 'Seek medical attention if fever > 103°F or lasts > 3 days.'
            },
            'cold': {
                'medicines': ['Pseudoephedrine 30mg', 'Cetirizine 10mg', 'Vitamin C 1000mg'],
                'advice': 'Stay warm, drink hot liquids, get plenty of rest. Use humidifier.',
                'precaution': 'Consult doctor if symptoms worsen or persist > 10 days.'
            },
            'flu': {
                'medicines': ['Paracetamol 500mg', 'Pseudoephedrine 30mg', 'Vitamin C 1000mg'],
                'advice': 'Rest, stay hydrated, take warm fluids. Monitor symptoms closely.',
                'precaution': 'Seek immediate care if difficulty breathing or high fever.'
            },
            'cough': {
                'medicines': ['Dextromethorphan 10mg', 'Guaifenesin 200mg', 'Honey'],
                'advice': 'Stay hydrated, use humidifier, avoid irritants like smoke.',
                'precaution': 'Consult doctor if cough persists > 2 weeks or with blood.'
            },
            'allergy': {
                'medicines': ['Cetirizine 10mg', 'Loratadine 10mg', 'Fexofenadine 180mg'],
                'advice': 'Avoid allergens, keep windows closed, use air purifier.',
                'precaution': 'Severe allergic reactions require immediate medical attention.'
            },
            'stomach_pain': {
                'medicines': ['Antacid Chewable', 'Omeprazole 20mg', 'Buscopan 10mg'],
                'advice': 'Avoid spicy foods, eat light meals, stay hydrated. Apply heat.',
                'precaution': 'Seek medical help if severe pain or bloody stool.'
            },
            'nausea': {
                'medicines': ['Domperidone 10mg', 'Ondansetron 4mg', 'Ginger tablets'],
                'advice': 'Eat small meals, stay hydrated, avoid strong odors.',
                'precaution': 'Consult doctor if persistent vomiting or signs of dehydration.'
            },
            'body_pain': {
                'medicines': ['Ibuprofen 400mg', 'Paracetamol 500mg'],
                'advice': 'Rest, apply heat or ice, gentle massage. Light stretching.',
                'precaution': 'Consult doctor if pain is severe or unexplained.'
            },
            'acid_reflux': {
                'medicines': ['Omeprazole 20mg', 'Antacid Chewable'],
                'advice': 'Avoid trigger foods, eat smaller meals, don't lie down after eating.',
                'precaution': 'Long-term use requires doctor supervision.'
            },
            'fatigue': {
                'medicines': ['Multivitamin Complex', 'Vitamin B Complex', 'Vitamin D3 1000IU'],
                'advice': 'Get adequate sleep, exercise regularly, maintain balanced diet.',
                'precaution': 'Persistent fatigue may indicate underlying condition.'
            },
            'digestive': {
                'medicines': ['Antacid Chewable', 'Buscopan 10mg'],
                'advice': 'Eat fiber-rich foods, stay hydrated, avoid processed foods.',
                'precaution': 'Consult doctor if symptoms persist.'
            },
            'wound': {
                'medicines': ['Antiseptic Cream', 'Bandages Large'],
                'advice': 'Clean wound, apply antiseptic, keep covered. Change dressing daily.',
                'precaution': 'Seek medical care for deep wounds or signs of infection.'
            },
            'sleep': {
                'medicines': ['Melatonin (consult doctor)', 'Valerian Root'],
                'advice': 'Maintain consistent sleep schedule, avoid caffeine late in day.',
                'precaution': 'Consult doctor for chronic insomnia.'
            },
            'anxiety': {
                'medicines': ['Consult healthcare provider'],
                'advice': 'Practice deep breathing, meditation. Regular exercise helps.',
                'precaution': 'Seek professional help for persistent anxiety.'
            }
        }
    
    def analyze_symptoms(self, user_input):
        """Analyze user symptoms and return ML-based recommendations"""
        
        # Convert to lowercase for matching
        text = user_input.lower()
        words = text.split()
        
        # Score each condition based on keyword matches
        condition_scores = {}
        
        for keyword, data in self.symptom_keywords.items():
            if keyword in text:
                condition = data['condition']
                weight = data['weight']
                
                if condition not in condition_scores:
                    condition_scores[condition] = 0
                
                condition_scores[condition] += weight
        
        if not condition_scores:
            return None
        
        # Get the condition with highest score
        primary_condition = max(condition_scores, key=condition_scores.get)
        confidence = min(condition_scores[primary_condition] / 2, 1.0)  # Normalize to 0-1
        
        # Get recommendations
        recommendation = self.condition_medicines.get(primary_condition, {
            'medicines': ['Consult healthcare provider'],
            'advice': 'Please consult a doctor for proper diagnosis.',
            'precaution': 'This is not a substitute for professional medical advice.'
        })
        
        return {
            'condition': primary_condition,
            'confidence': round(confidence * 100, 1),
            'symptoms_matched': list(condition_scores.keys()),
            **recommendation
        }

# Initialize the ML analyzer
symptom_analyzer = SymptomAnalyzer()

# ============================================
# API Routes
# ============================================

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    user = next((u for u in users if u['email'] == email and u['password'] == password), None)
    
    if user:
        if user['id'] not in carts:
            carts[user['id']] = []
        return jsonify({
            'success': True,
            'message': 'Login successful',
            'user': { 'id': user['id'], 'name': user['name'], 'email': user['email'] }
        })
    else:
        return jsonify({ 'success': False, 'message': 'Invalid email or password' }), 401

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    password = data.get('password')
    
    existing_user = next((u for u in users if u['email'] == email), None)
    
    if existing_user:
        return jsonify({ 'success': False, 'message': 'Email already registered' }), 400
    
    new_user = {
        'id': int(datetime.now().timestamp() * 1000),
        'name': name,
        'email': email,
        'password': password,
        'createdAt': datetime.now().isoformat()
    }
    
    users.append(new_user)
    carts[new_user['id']] = []
    
    return jsonify({
        'success': True,
        'message': 'Signup successful',
        'user': { 'id': new_user['id'], 'name': new_user['name'], 'email': new_user['email'] }
    })

@app.route('/api/medicines', methods=['GET'])
def get_medicines():
    category = request.args.get('category')
    search = request.args.get('search')
    symptom = request.args.get('symptom')
    
    # ML-based symptom analysis
    if symptom:
        result = symptom_analyzer.analyze_symptoms(symptom)
        if result:
            return jsonify({ 'success': True, 'data': result })
        return jsonify({ 'success': False, 'message': 'Could not analyze symptoms' })
    
    filtered = medicines.copy()
    
    if category and category != 'All':
        filtered = [m for m in filtered if m['category'] == category]
    
    if search:
        search_lower = search.lower()
        filtered = [m for m in filtered if 
                   search_lower in m['name'].lower() or 
                   search_lower in m['uses'].lower() or
                   search_lower in m['category'].lower()]
    
    return jsonify({ 'success': True, 'data': filtered })

@app.route('/api/medicines/<int:medicine_id>', methods=['GET'])
def get_medicine(medicine_id):
    medicine = next((m for m in medicines if m['id'] == medicine_id), None)
    
    if medicine:
        return jsonify({ 'success': True, 'data': medicine })
    return jsonify({ 'success': False, 'message': 'Medicine not found' }), 404

@app.route('/api/categories', methods=['GET'])
def get_categories():
    return jsonify({ 'success': True, 'data': categories })

@app.route('/api/health-tips', methods=['GET'])
def get_health_tips():
    return jsonify({ 'success': True, 'data': health_tips })

@app.route('/api/cart/<int:user_id>', methods=['GET'])
def get_cart(user_id):
    cart = carts.get(user_id, [])
    
    enriched_cart = []
    for item in cart:
        medicine = next((m for m in medicines if m['id'] == item['medicineId']), None)
        if medicine:
            enriched_cart.append({ **item, 'medicine': medicine })
    
    return jsonify({ 'success': True, 'data': enriched_cart })

@app.route('/api/cart', methods=['POST'])
def add_to_cart():
    data = request.json
    user_id = data.get('userId')
    medicine_id = data.get('medicineId')
    quantity = data.get('quantity', 1)
    
    if user_id not in carts:
        carts[user_id] = []
    
    existing_item = next((item for item in carts[user_id] if item['medicineId'] == medicine_id), None)
    
    if existing_item:
        existing_item['quantity'] += quantity
    else:
        carts[user_id].append({
            'medicineId': medicine_id,
            'quantity': quantity,
            'addedAt': datetime.now().isoformat()
        })
    
    return jsonify({ 'success': True, 'message': 'Added to cart' })

@app.route('/api/cart', methods=['PUT'])
def update_cart():
    data = request.json
    user_id = data.get('userId')
    medicine_id = data.get('medicineId')
    quantity = data.get('quantity')
    
    if user_id not in carts:
        return jsonify({ 'success': False, 'message': 'Cart not found' }), 404
    
    item = next((item for item in carts[user_id] if item['medicineId'] == medicine_id), None)
    
    if item:
        if quantity <= 0:
            carts[user_id] = [i for i in carts[user_id] if i['medicineId'] != medicine_id]
        else:
            item['quantity'] = quantity
        return jsonify({ 'success': True, 'message': 'Cart updated' })
    
    return jsonify({ 'success': False, 'message': 'Item not found' }), 404

@app.route('/api/cart', methods=['DELETE'])
def remove_from_cart():
    data = request.json
    user_id = data.get('userId')
    medicine_id = data.get('medicineId')
    
    if user_id in carts:
        carts[user_id] = [item for item in carts[user_id] if item['medicineId'] != medicine_id]
    
    return jsonify({ 'success': True, 'message': 'Item removed from cart' })

@app.route('/api/orders', methods=['POST'])
def place_order():
    data = request.json
    user_id = data.get('userId')
    items = data.get('items')
    total = data.get('total')
    
    if user_id not in orders:
        orders[user_id] = []
    
    order = {
        'id': int(datetime.now().timestamp() * 1000),
        'items': items,
        'total': total,
        'status': 'Processing',
        'createdAt': datetime.now().isoformat()
    }
    
    orders[user_id].append(order)
    
    # Clear cart
    carts[user_id] = []
    
    return jsonify({ 'success': True, 'message': 'Order placed successfully', 'orderId': order['id'] })

@app.route('/api/orders/<int:user_id>', methods=['GET'])
def get_orders(user_id):
    user_orders = orders.get(user_id, [])
    
    # Enrich orders with user info
    enriched_orders = []
    for order in user_orders:
        user = next((u for u in users if u['id'] == user_id), None)
        enriched_orders.append({
            **order,
            'userName': user['name'] if user else 'Unknown',
            'userEmail': user['email'] if user else 'Unknown'
        })
    
    return jsonify({ 'success': True, 'data': enriched_orders })

# Admin Routes
@app.route('/api/admin/users', methods=['GET'])
def get_all_users():
    return jsonify({ 'success': True, 'data': users })

@app.route('/api/admin/orders', methods=['GET'])
def get_all_orders():
    all_orders = []
    for user_id, user_orders in orders.items():
        user = next((u for u in users if u['id'] == user_id), None)
        for order in user_orders:
            all_orders.append({
                **order,
                'userName': user['name'] if user else 'Unknown',
                'userEmail': user['email'] if user else 'Unknown'
            })
    
    # Sort by date descending
    all_orders.sort(key=lambda x: x['createdAt'], reverse=True)
    
    return jsonify({ 'success': True, 'data': all_orders })

@app.route('/api/admin/stats', methods=['GET'])
def get_stats():
    total_revenue = sum(
        sum(order['total'] for order in user_orders) 
        for user_orders in orders.values()
    )
    
    return jsonify({
        'success': True,
        'data': {
            'totalUsers': len(users),
            'totalOrders': sum(len(user_orders) for user_orders in orders.values()),
            'totalRevenue': total_revenue,
            'totalMedicines': len(medicines)
        }
    })

@app.route('/api/search', methods=['GET'])
def search_medicines():
    q = request.args.get('q', '')
    
    if not q:
        return jsonify({ 'success': True, 'data': [] })
    
    search_lower = q.lower()
    results = [m for m in medicines if 
               search_lower in m['name'].lower() or
               search_lower in m['uses'].lower() or
               search_lower in m['category'].lower() or
               search_lower in m['description'].lower()]
    
    return jsonify({ 'success': True, 'data': results })

# ML Symptom Analysis Endpoint
@app.route('/api/analyze-symptoms', methods=['POST'])
def analyze_symptoms():
    """Dedicated ML endpoint for symptom analysis"""
    data = request.json
    symptoms = data.get('symptoms', '')
    
    if not symptoms:
        return jsonify({ 'success': False, 'message': 'No symptoms provided' }), 400
    
    result = symptom_analyzer.analyze_symptoms(symptoms)
    
    if result:
        return jsonify({ 'success': True, 'data': result })
    
    return jsonify({
        'success': False, 
        'message': 'Could not analyze symptoms. Please describe them more specifically.'
    })

if __name__ == '__main__':
    print("🏥 MediCare Python Backend with ML")
    print("=" * 50)
    print("Server running on http://localhost:5000")
    print("ML Symptom Analyzer: Active")
    print("=" * 50)
    app.run(port=5000, debug=True)

