// Diseases data with symptoms, descriptions, precautions, medications, workouts, and diets
export const diseasesData = {
  "Fungal infection": {
    symptoms: ["itching", "skin_rash", "nodal_skin_eruptions"],
    description: "Fungal infection is a common skin condition caused by fungi.",
    precautions: ["Bath twice", "Use detol or neem in bathing water", "Keep infected area dry", "Use clean cloths"],
    medications: ["Clotrimazole Cream 1%","Fluconazole 150mg","Terbinafine Cream 1%","Ketoconazole Cream 2%"],
    workouts: ["Avoid sugary foods", "Consume probiotics", "Increase intake of garlic", "Include yogurt in diet", "Limit processed foods", "Stay hydrated", "Consume green tea", "Eat foods rich in zinc", "Include turmeric in diet", "Eat fruits and vegetables"],
    diets: ["Antifungal Diet", "Probiotics", "Garlic", "Coconut oil", "Turmeric"]
  },
  "Allergy": {
    symptoms: ["continuous_sneezing", "shivering", "chills", "watery_from_eyes"],
    description: "Allergy is an immune system reaction to a foreign substance that's not typically harmful to your body.",
    precautions: ["Avoid dust", "Use air purifier", "Stay indoors during high pollen count", "Wash hands frequently"],
    medications: ["Cetirizine 10mg","Loratadine 10mg","Fexofenadine 180mg","Fluticasone Nasal Spray","Hydrocortisone Cream"],
    workouts: ["Regular exercise", "Yoga", "Meditation for stress management", "Avoid outdoor exercise during peak allergy season"],
    diets: ["Local honey", "Omega-3 rich foods", "Vitamin C rich foods", "Avoid dairy", "Stay hydrated"]
  },
  "GERD": {
    symptoms: ["chest_pain", "acidity", "cough", "throat_irritation"],
    description: "Gastroesophageal reflux disease is a chronic digestive disease where stomach acid flows back into the esophagus.",
    precautions: ["Avoid spicy foods", "Eat smaller meals", "Don't lie down after eating", "Elevate head while sleeping"],
    medications: ["Omeprazole 20mg","Pantoprazole 40mg","Antacid Tablets","Famotidine 20mg"],
    workouts: ["Walking", "Light cycling", "Swimming", "Avoid intense exercises after meals"],
    diets: ["Low-fat foods", "Ginger", "Oatmeal", "Avoid citrus and tomatoes"]
  },
  "Chronic cholestasis": {
    symptoms: ["yellowish_skin", "dark_urine", "yellow_urine", "yellowing_of_eyes"],
    description: "Chronic cholestasis is a condition where bile flow from the liver is impaired.",
    precautions: ["Avoid alcohol", "Take prescribed medications", "Follow low-fat diet", "Regular check-ups"],
    medications: ["Ursodiol", "Cholestyramine", "Vitamin supplements", "Liver support supplements"],
    workouts: ["Light walking", "Gentle stretching", "Yoga", "Avoid heavy lifting"],
    diets: ["Low-fat diet", "High-protein foods", "Avoid alcohol", " Plenty of fluids"]
  },
  "Drug Reaction": {
    symptoms: ["skin_rash", "itching", "blister", "red_spots_over_body"],
    description: "Drug reaction is an immune system response to certain medications.",
    precautions: ["Stop the suspected drug", "Consult doctor immediately", "Keep a record of medications", "Avoid self-medication"],
    medications: ["Antihistamines", "Corticosteroids", "Epinephrine for severe cases", "Topical corticosteroids"],
    workouts: ["Rest until symptoms subside", "Light walking when feeling better", "Avoid strenuous exercise"],
    diets: ["Stay hydrated", "Light meals", "Avoid alcohol", "Follow doctor's dietary advice"]
  },
  "Peptic ulcer diseae": {
    symptoms: ["stomach_pain", "acidity", "vomiting", "burning_micturition"],
    description: "Peptic ulcer is an open sore in the lining of the stomach or small intestine.",
    precautions: ["Avoid NSAIDs", "Limit alcohol", "Quit smoking", "Manage stress"],
    medications: ["Proton pump inhibitors", "H2 blockers", "Antibiotics for H. pylori", "Antacids"],
    workouts: ["Gentle exercise", "Walking", "Yoga", "Avoid intense workouts"],
    diets: ["Avoid spicy foods", "Eat small frequent meals", "Limit caffeine", "No alcohol"]
  },
  "AIDS": {
    symptoms: ["red_spots_over_body", "high_fever", "swollen_lymph_nodes", "malaise"],
    description: "Acquired immunodeficiency syndrome is a chronic potentially life-threatening condition caused by HIV.",
    precautions: ["Practice safe sex", "Don't share needles", "Regular testing", "Early medical intervention"],
    medications: ["Antiretroviral therapy (ART)", "HIV medications", "Pre-exposure prophylaxis"],
    workouts: ["Regular exercise", "Cardio", "Strength training", "As advised by doctor"],
    diets: ["Balanced nutrition", "High-protein foods", "Vitamin supplements", "Stay hydrated"]
  },
  "Diabetes": {
    symptoms: ["fatigue", "weight_loss", "restlessness", "lethargy", "irregular_sugar_level"],
    description: "Diabetes is a chronic disease that occurs when the pancreas doesn't produce enough insulin.",
    precautions: ["Monitor blood sugar", "Take medications regularly", "Maintain healthy diet", "Regular exercise"],
    medications: ["Metformin 500mg","Insulin Injection","Glimepiride 2mg"],
    workouts: ["Regular cardio", "Walking", "Swimming", "Cycling", "Strength training"],
    diets: ["Low-carb foods", "High fiber", "Avoid sugary foods", "Regular meal timing"]
  },
  "Gastroenteritis": {
    symptoms: ["vomiting", "diarrhoea", "stomach_pain", "dehydration", "mild_fever"],
    description: "Gastroenteritis is inflammation of the stomach and intestines, commonly caused by infections.",
    precautions: ["Stay hydrated", "Wash hands frequently", "Avoid contaminated food/water", "Rest"],
    medications: ["Oral rehydration solutions", "Antiemetics", "Antidiarrheals", "Antibiotics if bacterial"],
    workouts: ["Rest during acute phase", "Light walking when recovered", "Gradual return to exercise"],
    diets: ["BRAT diet", "Clear fluids", "Bananas", "Rice", "Avoid dairy"]
  },
  "Bronchial Asthma": {
    symptoms: ["cough", "breathlessness", "chest_pain", "wheezing", "phlegm"],
    description: "Bronchial asthma is a chronic condition where airways become inflamed and narrow.",
    precautions: ["Avoid triggers", "Take controller medications", "Keep inhaler nearby", "Regular check-ups"],
    medications: ["Inhaled corticosteroids", "Bronchodilators", "Leukotriene modifiers", "Oral corticosteroids"],
    workouts: ["Swimming", "Walking", "Cycling", "Yoga", "Avoid cold air exercise"],
    diets: ["Omega-3 rich foods", "Vitamin D", "Fruits and vegetables", "Avoid sulfites"]
  },
  "Hypertension": {
    symptoms: ["headache", "chest_pain", "dizziness", "shortness_of_breath", "nosebleed"],
    description: "Hypertension is high blood pressure that can lead to serious health problems.",
    precautions: ["Reduce salt intake", "Manage stress", "Regular exercise", "Limit alcohol"],
    medications: ["Amlodipine 5mg","Losartan 50mg","Atenolol 50mg"],
    workouts: ["Aerobic exercise", "Walking", "Swimming", "Cycling", "Yoga"],
    diets: ["DASH diet", "Low sodium", "Fruits and vegetables", "Whole grains"]
  },
  "Migraine": {
    symptoms: ["headache", "nausea", "sensitivity_to_light", "visual_disturbances", "dizziness"],
    description: "Migraine is a neurological condition causing intense headaches and other symptoms.",
    precautions: ["Identify triggers", "Manage stress", "Regular sleep schedule", "Avoid bright lights"],
    medications: ["Ibuprofen 400mg","Paracetamol 500mg","Aspirin 325mg","Ondansetron 4mg"],
    workouts: ["Regular exercise", "Yoga", "Meditation", "Avoid intense exercise during attack"],
    diets: ["Regular meals", "Avoid caffeine", "Stay hydrated", "Limit processed foods"]
  },
  "Cervical spondylosis": {
    symptoms: ["neck_pain", "stiff_neck", "dizziness", "pain_in_anal_region"],
    description: "Cervical spondylosis is age-related wear affecting the spinal disks in the neck.",
    precautions: ["Maintain good posture", "Avoid neck strain", "Regular neck exercises", "Use ergonomic chair"],
    medications: ["NSAIDs", "Muscle relaxants", "Corticosteroid injections", "Topical pain relievers"],
    workouts: ["Neck stretches", "Gentle yoga", "Swimming", "Walking", "Physical therapy exercises"],
    diets: ["Anti-inflammatory foods", "Omega-3", "Calcium rich foods", "Vitamin D"]
  },
  "Paralysis (brain hemorrhage)": {
    symptoms: ["weakness_of_one_body_side", "loss_of_balance", "unsteadiness", "altered_sensorium"],
    description: "Paralysis due to brain hemorrhage is loss of muscle function caused by bleeding in the brain.",
    precautions: ["Immediate medical attention", "Control blood pressure", "Avoid strenuous activities", "Regular therapy"],
    medications: ["Blood thinners", "Blood pressure medications", "Steroids", "Rehabilitation medications"],
    workouts: ["Physical therapy", "Occupational therapy", "Assisted exercises", "Gradual strengthening"],
    diets: ["Balanced diet", "High protein", "Easy to swallow foods", "Adequate hydration"]
  },
  "Jaundice": {
    symptoms: ["yellowish_skin", "yellowing_of_eyes", "dark_urine", "yellow_urine", "fatigue"],
    description: "Jaundice is a condition where skin and eyes turn yellow due to high bilirubin levels.",
    precautions: ["Avoid alcohol", "Take prescribed medications", "Rest adequately", "Regular monitoring"],
    medications: ["Liver support supplements", "Phototherapy", "Cholestyramine", "Vitamin K"],
    workouts: ["Light exercise", "Walking", "Gentle yoga", "Avoid strenuous activities"],
    diets: ["High protein", "Low fat", "Plenty of fluids", "Avoid alcohol"]
  },
  "Malaria": {
    symptoms: ["high_fever", "chills", "sweating", "headache", "nausea", "muscle_pain"],
    description: "Malaria is a life-threatening parasitic disease transmitted by mosquitoes.",
    precautions: ["Use mosquito nets", "Wear protective clothing", "Use insect repellent", "Take prophylactic drugs"],
    medications: ["Antimalarial drugs", "Chloroquine", "Artemisinin", "Primaquine"],
    workouts: ["Rest during acute phase", "Light activities when recovering", "Gradual return to exercise"],
    diets: ["High calorie foods", "Fluids", "Easily digestible foods", "Iron-rich foods"]
  },
  "Chicken pox": {
    symptoms: ["itching", "skin_rash", "red_spots_over_body", "blister", "fatigue", "mild_fever"],
    description: "Chickenpox is a highly contagious infection caused by the varicella-zoster virus.",
    precautions: ["Avoid scratching", "Stay home until blisters heal", "Keep affected area clean", "Avoid contact with others"],
    medications: ["Antihistamines", "Calamine lotion", "Acetaminophen", "Acyclovir"],
    workouts: ["Rest during acute phase", "Light activities when feeling better", "Avoid scratching"],
    diets: ["Soft foods", "Stay hydrated", "Avoid salty foods", "Cool foods"]
  },
  "Dengue": {
    symptoms: ["high_fever", "headache", "joint_pain", "muscle_pain", "rash", "fatigue"],
    description: "Dengue is a mosquito-borne viral infection causing severe flu-like symptoms.",
    precautions: ["Avoid mosquitoes", "Use mosquito nets", "Wear protective clothing", "Rest adequately"],
    medications: ["Paracetamol 500mg","ORS Solution"],
    workouts: ["Complete rest", "Light walking when recovering", "Gradual return to activity"],
    diets: ["Fluids", "Papaya leaf extract", "Vitamin C rich foods", "High protein"]
  },
  "Typhoid": {
    symptoms: ["high_fever", "headache", "abdominal_pain", "constipation", "diarrhoea", "weakness"],
    description: "Typhoid is a bacterial infection caused by Salmonella typhi, spread through contaminated food/water.",
    precautions: ["Drink safe water", "Eat properly cooked food", "Wash hands frequently", "Get vaccinated"],
    medications: ["Antibiotics (Azithromycin, Ciprofloxacin)", "Paracetamol for fever", "ORS"],
    workouts: ["Rest during illness", "Light activities during recovery", "Gradual return to normal"],
    diets: ["High calorie foods", "Fluids", "Easily digestible foods", "Avoid raw vegetables"]
  },
  "Hepatitis A": {
    symptoms: ["fatigue", "nausea", "abdominal_pain", "yellowish_skin", "loss_of_appetite"],
    description: "Hepatitis A is a highly contagious liver infection caused by the hepatitis A virus.",
    precautions: ["Get vaccinated", "Practice good hygiene", "Avoid contaminated food/water", "Rest"],
    medications: ["No specific treatment", "Supportive care", "Liver support", "Rest"],
    workouts: ["Rest", "Light exercise when recovered", "Avoid alcohol", "Gradual return"],
    diets: ["Healthy diet", "Plenty of fluids", "Low fat foods", "Avoid alcohol"]
  },
  "Hepatitis B": {
    symptoms: ["fatigue", "jaundice", "abdominal_pain", "dark_urine", "joint_pain"],
    description: "Hepatitis B is a serious liver infection caused by the hepatitis B virus.",
    precautions: ["Get vaccinated", "Avoid alcohol", "Practice safe sex", "Don't share needles"],
    medications: ["Antiviral drugs", "Interferon", "Liver medications", "Supportive care"],
    workouts: ["Moderate exercise", "Avoid overexertion", "Listen to your body", "Regular gentle exercise"],
    diets: ["Balanced diet", "High protein", "Low sodium", "Avoid alcohol"]
  },
  "Hepatitis C": {
    symptoms: ["fatigue", "jaundice", "abdominal_pain", "loss_of_appetite", "dark_urine"],
    description: "Hepatitis C is a blood-borne virus that causes liver inflammation and damage.",
    precautions: ["Avoid alcohol", "Don't share needles", "Get tested", "Follow treatment plan"],
    medications: ["Antiviral drugs", "Direct-acting antivirals", "Liver support medications"],
    workouts: ["Regular moderate exercise", "Avoid strenuous activities", "Listen to your body"],
    diets: ["Healthy balanced diet", "Avoid alcohol", "Low sodium", "Plenty of fluids"]
  },
  "Hepatitis D": {
    symptoms: ["fatigue", "jaundice", "abdominal_pain", "dark_urine", "joint_pain"],
    description: "Hepatitis D is a serious liver disease caused by the hepatitis D virus.",
    precautions: ["Get vaccinated for Hepatitis B", "Avoid alcohol", "Regular monitoring", "Follow treatment"],
    medications: ["Interferon alpha", "Antiviral drugs", "Liver support medications"],
    workouts: ["Moderate exercise", "Avoid alcohol", "Rest when needed", "Regular gentle activity"],
    diets: ["Balanced diet", "Avoid alcohol", "Low fat", "High protein"]
  },
  "Hepatitis E": {
    symptoms: ["fatigue", "jaundice", "nausea", "abdominal_pain", "fever"],
    description: "Hepatitis E is a typically acute liver disease caused by the hepatitis E virus.",
    precautions: ["Drink safe water", "Practice good hygiene", "Avoid undercooked pork", "Rest adequately"],
    medications: ["No specific treatment", "Supportive care", "Ribavirin in severe cases", "Rest"],
    workouts: ["Rest during acute phase", "Light walking when recovering", "Avoid strenuous exercise"],
    diets: ["Healthy diet", "Fluids", "Low fat foods", "Avoid alcohol"]
  },
  "Alcoholic hepatitis": {
    symptoms: ["jaundice", "abdominal_pain", "nausea", "vomiting", "fatigue"],
    description: "Alcoholic hepatitis is inflammation of the liver caused by excessive alcohol consumption.",
    precautions: ["Stop drinking alcohol", "Follow a healthy diet", "Rest", "Medical supervision"],
    medications: ["Corticosteroids", "Nutritional support", "Liver medications", "Treatment for withdrawal"],
    workouts: ["Rest during acute phase", "Light exercise when recovering", "Avoid alcohol completely"],
    diets: ["High protein", "Low fat", "Vitamin supplements", "Avoid alcohol completely"]
  },
  "Tuberculosis": {
    symptoms: ["cough", "coughing_up_blood", "chest_pain", "fatigue", "weight_loss", "night_sweats"],
    description: "Tuberculosis is a bacterial infection that primarily affects the lungs.",
    precautions: ["Cover mouth when coughing", "Good ventilation", "Take medications regularly", "Isolation during infectious phase"],
    medications: ["Isoniazid", "Rifampin", "Ethambutol", "Pyrazinamide", "Combination therapy"],
    workouts: ["Rest during active disease", "Light walking", "Gradual increase in activity", "Avoid strenuous exercise"],
    diets: ["High calorie diet", "Protein rich foods", "Vitamins", "Stay hydrated"]
  },
  "Common Cold": {
    symptoms: ["runny_nose", "sneezing", "congestion", "sore_throat", "cough", "mild_fever"],
    description: "Common cold is a viral infection of the upper respiratory tract.",
    precautions: ["Wash hands frequently", "Avoid close contact with sick people", "Stay hydrated", "Rest"],
    medications: ["Paracetamol 500mg","Cetirizine 10mg","Phenylephrine 10mg","Cough Syrup DM"],
    workouts: ["Rest during acute phase", "Light walking when feeling better", "Avoid intense exercise"],
    diets: ["Hot fluids", "Vitamin C", "Chicken soup", "Honey", "Stay hydrated"]
  },
  "Pneumonia": {
    symptoms: ["cough", "high_fever", "chills", "breathlessness", "chest_pain", "fatigue"],
    description: "Pneumonia is an infection that inflames the air sacs in one or both lungs.",
    precautions: ["Get vaccinated", "Practice good hygiene", "Quit smoking", "Stay away from sick people"],
    medications: ["Amoxicillin 500mg","Azithromycin 500mg","Paracetamol 500mg"],
    workouts: ["Rest during acute phase", "Deep breathing exercises", "Gradual walking", "Pulmonary rehabilitation"],
    diets: ["High calorie foods", "Fluids", "Protein rich foods", "Easily digestible"]
  },
  "Dimorphic hemmorhoids(piles)": {
    symptoms: ["pain_in_anal_region", "constipation", "bloody_stool", "irritation_in_anus"],
    description: "Hemorrhoids are swollen veins in the lower rectum or anus.",
    precautions: ["Avoid straining", "Eat fiber-rich foods", "Stay hydrated", "Don't sit for long periods"],
    medications: ["Over-the-counter creams", "Suppositories", "Pain relievers", "Stool softeners"],
    workouts: ["Regular walking", "Kegel exercises", "Avoid heavy lifting", "Light cardio"],
    diets: ["High fiber", "Plenty of water", "Avoid spicy foods", "Regular meals"]
  },
  "Heart attack": {
    symptoms: ["chest_pain", "breathlessness", "pain_in_left_arm", "nausea", "sweating", "dizziness"],
    description: "A heart attack occurs when blood flow to part of the heart muscle is blocked.",
    precautions: ["Maintain healthy weight", "Exercise regularly", "Manage stress", "Don't smoke", "Control blood pressure"],
    medications: ["Aspirin", "Clot busters", "Blood thinners", "Beta blockers", "Statins"],
    workouts: ["Cardiac rehabilitation", "Walking", "Light cycling", "As prescribed by doctor"],
    diets: ["Heart healthy diet", "Low sodium", "Low fat", "Fruits and vegetables"]
  },
  "Varicose veins": {
    symptoms: ["swollen_legs", "painful_walking", "prominent_veins_on_calf", "cramps"],
    description: "Varicose veins are enlarged, twisted veins that usually appear in the legs.",
    precautions: ["Avoid prolonged standing", "Elevate legs", "Wear compression socks", "Exercise regularly"],
    medications: ["Pain relievers", "Venotonics", "Anti-inflammatory drugs"],
    workouts: ["Walking", "Swimming", "Cycling", "Leg exercises", "Avoid standing long"],
    diets: ["High fiber", "Low salt", "Maintain healthy weight", "Flavonoid-rich foods"]
  },
  "Hypothyroidism": {
    symptoms: ["fatigue", "weight_gain", "cold_intolerance", "constipation", "dry_skin", "hair_loss"],
    description: "Hypothyroidism is a condition where the thyroid gland doesn't produce enough thyroid hormone.",
    precautions: ["Take medications regularly", "Regular thyroid tests", "Manage stress", "Healthy diet"],
    medications: ["Levothyroxine", "Liothyronine", "Combination therapy"],
    workouts: ["Regular exercise", "Cardio", "Strength training", "Yoga"],
    diets: ["Iodine rich foods", "Selenium", "Zinc", "Avoid goitrogens"]
  },
  "Hyperthyroidism": {
    symptoms: ["weight_loss", "rapid_heart_rate", "nervousness", "tremor", "heat_intolerance", "sweating"],
    description: "Hyperthyroidism is a condition where the thyroid gland produces too much thyroid hormone.",
    precautions: ["Take medications as prescribed", "Regular monitoring", "Manage stress", "Avoid caffeine"],
    medications: ["Antithyroid drugs", "Beta blockers", "Radioactive iodine", "Surgery if needed"],
    workouts: ["Light exercise", "Yoga", "Avoid intense cardio", "Walking"],
    diets: ["Calorie rich", "High protein", "Calcium rich", "Avoid caffeine"]
  },
  "Hypoglycemia": {
    symptoms: ["shakiness", "dizziness", "sweating", "hunger", "confusion", "fast_heart_rate"],
    description: "Hypoglycemia is a condition where blood sugar levels drop below normal.",
    precautions: ["Eat regular meals", "Monitor blood sugar", "Carry glucose tablets", "Know warning signs"],
    medications: ["Glucose tablets", "Glucagon", "Diabetes medications adjustment"],
    workouts: ["Check blood sugar before exercise", "Eat carbs before exercise", "Carry snacks"],
    diets: ["Regular meals", "Complex carbs", "Protein with carbs", "Avoid skipping meals"]
  },
  "Osteoarthristis": {
    symptoms: ["joint_pain", "stiffness", "swelling_joints", "decreased_range_of_motion"],
    description: "Osteoarthritis is a degenerative joint disease where the protective cartilage wears down.",
    precautions: ["Maintain healthy weight", "Exercise regularly", "Protect joints", "Avoid overuse"],
    medications: ["Pain relievers", "NSAIDs", "Corticosteroid injections", "Hyaluronic acid injections"],
    workouts: ["Low impact exercise", "Swimming", "Cycling", "Strength training", "Physical therapy"],
    diets: ["Anti-inflammatory foods", "Omega-3", "Calcium", "Vitamin D"]
  },
  "Arthritis": {
    symptoms: ["joint_pain", "swelling_joints", "stiffness", "redness", "warmth_in_joints"],
    description: "Arthritis is inflammation of one or more joints causing pain and stiffness.",
    precautions: ["Stay active", "Maintain healthy weight", "Protect joints", "Follow treatment plan"],
    medications: ["NSAIDs", "DMARDs", "Biologics", "Corticosteroids", "Pain relievers"],
    workouts: ["Regular gentle exercise", "Swimming", "Walking", "Range of motion exercises", "Yoga"],
    diets: ["Anti-inflammatory diet", "Omega-3 rich foods", "Fruits and vegetables", "Avoid processed foods"]
  },
  "(vertigo) Paroymsal Positional Vertigo": {
    symptoms: ["dizziness", "spinning_movements", "loss_of_balance", "nausea", "nystagmus"],
    description: "Vertigo is a sensation of feeling off-balance, often caused by inner ear problems.",
    precautions: ["Move slowly when changing positions", "Avoid sudden movements", "Sit down when dizzy", "Use handrails"],
    medications: ["Antihistamines", "Anticholinergics", "Anti-nausea drugs", "Vestibular suppressants"],
    workouts: ["Balance exercises", "Epley maneuver", "Vestibular rehabilitation", "Tai chi"],
    diets: ["Stay hydrated", "Limit salt", "Avoid caffeine", "Regular meals"]
  },
  "Acne": {
    symptoms: ["skin_rash", "pimples", "blackheads", "pus_filled_pimples", "scarring"],
    description: "Acne is a common skin condition where hair follicles become clogged with oil and dead skin cells.",
    precautions: ["Keep face clean", "Avoid touching face", "Don't pop pimples", "Use non-comedogenic products"],
    medications: ["Benzoyl peroxide", "Salicylic acid", "Retinoids", "Antibiotics", "Isotretinoin"],
    workouts: ["Regular exercise", "Shower after workout", "Wear breathable clothes", "Avoid touching face"],
    diets: ["Low glycemic foods", "Avoid dairy if triggering", "Omega-3", "Stay hydrated"]
  },
  "Urinary tract infection": {
    symptoms: ["burning_micturition", "bladder_discomfort", "foul_smell_of_urine", "continuous_feel_of_urine", "painful_walking"],
    description: "UTI is an infection in any part of the urinary system, most commonly in the bladder.",
    precautions: ["Drink plenty of water", "Urinate after sex", "Wipe front to back", "Avoid irritants"],
    medications: ["Antibiotics", "Pain relievers", "Urinary analgesics"],
    workouts: ["Regular exercise", "Avoid cycling if painful", "Kegel exercises", "Walking"],
    diets: ["Plenty of fluids", "Cranberry juice", "Probiotics", "Avoid caffeine and alcohol"]
  },
  "Psoriasis": {
    symptoms: ["red_sore_around_nose", "silver_like_dusting", "skin_peeling", "small_dents_in_nails", "inflammatory_nails"],
    description: "Psoriasis is a skin disease that causes red, itchy scaly patches.",
    precautions: ["Moisturize regularly", "Avoid triggers", "Reduce stress", "Follow treatment plan"],
    medications: ["Topical corticosteroids", "Vitamin D analogues", "Phototherapy", "Systemic medications"],
    workouts: ["Regular exercise", "Swimming", "Yoga for stress", "Avoid skin trauma"],
    diets: ["Anti-inflammatory foods", "Omega-3", "Vitamin D", "Avoid alcohol"]
  },
  "Impetigo": {
    symptoms: ["red_sore_around_nose", "yellow_crust_ooze", "blister", "pus_filled_pimples", "swollen_lymph_nodes"],
    description: "Impetigo is a highly contagious skin infection causing red sores and blisters.",
    precautions: ["Keep affected area clean", "Don't scratch", "Wash hands often", "Avoid contact with others"],
    medications: ["Topical antibiotics", "Oral antibiotics", "Antiseptics", "Ointments"],
    workouts: ["Rest during acute phase", "Light activities when feeling better", "Avoid scratching"],
    diets: ["High protein", "Vitamin C", "Stay hydrated", "Nutrient rich foods"]
  },
  "Anemia": {
    symptoms: ["fatigue", "weakness", "pale_skin", "shortness_of_breath", "dizziness"],
    description: "Anemia is a condition where you lack enough healthy red blood cells to carry oxygen.",
    precautions: ["Eat iron-rich foods", "Take supplements", "Regular check-ups", "Avoid skipping meals"],
    medications: ["Iron supplements", "Vitamin B12", "Folic acid"],
    workouts: ["Light exercise", "Walking", "Avoid overexertion"],
    diets: ["Iron-rich foods", "Leafy greens", "Red meat", "Beans"]
  },

  "Depression": {
    symptoms: ["sadness", "loss_of_interest", "fatigue", "sleep_disturbance", "hopelessness"],
    description: "Depression is a mental health disorder affecting mood and daily activities.",
    precautions: ["Seek counseling", "Stay connected", "Maintain routine", "Avoid isolation"],
    medications: ["Antidepressants", "SSRIs", "Therapy"],
    workouts: ["Yoga", "Meditation", "Walking", "Exercise regularly"],
    diets: ["Balanced diet", "Omega-3", "Avoid alcohol"]
  },

  "Anxiety": {
    symptoms: ["nervousness", "restlessness", "rapid_heart_rate", "sweating", "difficulty_concentrating"],
    description: "Anxiety is a mental health condition involving excessive worry.",
    precautions: ["Practice relaxation", "Avoid caffeine", "Regular sleep", "Stress management"],
    medications: ["Anxiolytics", "SSRIs", "Beta blockers"],
    workouts: ["Meditation", "Yoga", "Breathing exercises"],
    diets: ["Healthy diet", "Avoid caffeine", "Stay hydrated"]
  },

  "Obesity": {
    symptoms: ["weight_gain", "fatigue", "breathlessness", "joint_pain"],
    description: "Obesity is excessive body fat increasing health risks.",
    precautions: ["Balanced diet", "Exercise regularly", "Monitor weight", "Avoid junk food"],
    medications: ["Weight loss medications", "Appetite suppressants"],
    workouts: ["Cardio", "Walking", "Strength training"],
    diets: ["Low calorie diet", "High fiber", "Avoid sugar"]
  },

  "Insomnia": {
    symptoms: ["difficulty_sleeping", "fatigue", "irritability", "lack_of_focus"],
    description: "Insomnia is difficulty falling or staying asleep.",
    precautions: ["Maintain sleep schedule", "Avoid screens at night", "Reduce caffeine"],
    medications: ["Sleep aids", "Melatonin"],
    workouts: ["Yoga", "Light stretching"],
    diets: ["Avoid caffeine", "Warm milk", "Light dinner"]
  },

  "Kidney Stones": {
    symptoms: ["severe_pain", "blood_in_urine", "nausea", "frequent_urination"],
    description: "Kidney stones are hard deposits formed in kidneys.",
    precautions: ["Drink water", "Reduce salt", "Avoid oxalate foods"],
    medications: ["Pain relievers", "Alpha blockers"],
    workouts: ["Light activity", "Walking"],
    diets: ["Hydration", "Low salt", "Balanced diet"]
  },

  "Appendicitis": {
    symptoms: ["abdominal_pain", "nausea", "vomiting", "fever"],
    description: "Appendicitis is inflammation of the appendix requiring urgent care.",
    precautions: ["Immediate medical care", "Avoid self-medication"],
    medications: ["Antibiotics", "Pain relief"],
    workouts: ["Rest"],
    diets: ["Liquid diet", "Light food"]
  },

  "Food Poisoning": {
    symptoms: ["vomiting", "diarrhoea", "stomach_pain", "fever"],
    description: "Food poisoning is caused by contaminated food.",
    precautions: ["Eat fresh food", "Wash hands", "Avoid street food"],
    medications: ["ORS", "Antibiotics (if needed)", "Antiemetics"],
    workouts: ["Rest"],
    diets: ["Fluids", "Light food", "BRAT diet"]
  },

  "COVID-19": {
    symptoms: ["fever", "cough", "fatigue", "loss_of_taste", "breathlessness"],
    description: "COVID-19 is a viral respiratory illness caused by SARS-CoV-2.",
    precautions: ["Wear mask", "Sanitize hands", "Social distancing", "Vaccination"],
    medications: ["Antivirals", "Paracetamol", "Oxygen therapy"],
    workouts: ["Rest", "Breathing exercises"],
    diets: ["High protein", "Fluids", "Vitamin C"]
  },

  "Sinusitis": {
    symptoms: ["headache", "facial_pain", "congestion", "runny_nose"],
    description: "Sinusitis is inflammation of sinuses causing pain and congestion.",
    precautions: ["Steam inhalation", "Avoid cold exposure", "Stay hydrated"],
    medications: ["Decongestants", "Antibiotics", "Pain relievers"],
    workouts: ["Light exercise"],
    diets: ["Warm fluids", "Hydration"]
  },
  // ===== Batch 2 Diseases =====

  "Stroke": {
    symptoms: ["weakness", "slurred_speech", "loss_of_balance", "vision_problems"],
    description: "Stroke occurs when blood supply to part of the brain is interrupted.",
    precautions: ["Control blood pressure", "Avoid smoking", "Exercise regularly", "Healthy diet"],
    medications: ["Blood thinners", "Clot busters", "Antiplatelets"],
    workouts: ["Rehabilitation exercises", "Walking", "Physical therapy"],
    diets: ["Low salt", "Heart healthy diet", "Fruits and vegetables"]
  },

  "Parkinson’s Disease": {
    symptoms: ["tremor", "slow_movement", "stiffness", "balance_problems"],
    description: "Parkinson’s is a progressive nervous system disorder affecting movement.",
    precautions: ["Regular medication", "Exercise", "Avoid stress"],
    medications: ["Levodopa", "Dopamine agonists"],
    workouts: ["Yoga", "Walking", "Balance training"],
    diets: ["High fiber", "Hydration", "Balanced diet"]
  },

  "Epilepsy": {
    symptoms: ["seizures", "confusion", "loss_of_awareness"],
    description: "Epilepsy is a neurological disorder causing recurrent seizures.",
    precautions: ["Take medications regularly", "Avoid triggers", "Proper sleep"],
    medications: ["Antiepileptics"],
    workouts: ["Light exercise", "Supervised activities"],
    diets: ["Ketogenic diet", "Balanced nutrition"]
  },

  "Cancer": {
    symptoms: ["weight_loss", "fatigue", "lumps", "persistent_pain"],
    description: "Cancer is uncontrolled growth of abnormal cells.",
    precautions: ["Avoid tobacco", "Healthy lifestyle", "Regular screening"],
    medications: ["Chemotherapy", "Radiation", "Targeted therapy"],
    workouts: ["Light exercise", "Rehabilitation"],
    diets: ["High protein", "Nutrient rich foods"]
  },

  "Breast Cancer": {
    symptoms: ["breast_lump", "change_in_shape", "pain"],
    description: "Breast cancer is cancer that forms in breast cells.",
    precautions: ["Regular screening", "Healthy lifestyle"],
    medications: ["Hormonal therapy", "Chemotherapy"],
    workouts: ["Light exercise"],
    diets: ["Balanced diet"]
  },

  "Lung Cancer": {
    symptoms: ["chronic_cough", "chest_pain", "weight_loss", "breathlessness"],
    description: "Lung cancer affects lung tissues and is often linked to smoking.",
    precautions: ["Avoid smoking", "Regular checkups"],
    medications: ["Chemotherapy", "Radiation"],
    workouts: ["Breathing exercises"],
    diets: ["High protein"]
  },

  "Skin Cancer": {
    symptoms: ["skin_changes", "moles", "lesions"],
    description: "Skin cancer develops in skin cells due to UV exposure.",
    precautions: ["Use sunscreen", "Avoid sun exposure"],
    medications: ["Topical therapy", "Surgery"],
    workouts: ["Normal activity"],
    diets: ["Healthy diet"]
  },

  "Alzheimer’s Disease": {
    symptoms: ["memory_loss", "confusion", "difficulty_thinking"],
    description: "Alzheimer’s is a progressive brain disorder affecting memory.",
    precautions: ["Mental exercises", "Healthy lifestyle"],
    medications: ["Cognitive enhancers"],
    workouts: ["Walking", "Mental exercises"],
    diets: ["Brain healthy foods"]
  },

  "Autism": {
    symptoms: ["social_difficulty", "communication_issues", "repetitive_behavior"],
    description: "Autism is a developmental disorder affecting communication.",
    precautions: ["Early therapy", "Supportive care"],
    medications: ["Behavior therapy"],
    workouts: ["Routine activities"],
    diets: ["Balanced diet"]
  },

  "ADHD": {
    symptoms: ["inattention", "hyperactivity", "impulsiveness"],
    description: "ADHD affects attention and behavior.",
    precautions: ["Structured routine", "Behavior therapy"],
    medications: ["Stimulants", "Non-stimulants"],
    workouts: ["Physical activity"],
    diets: ["Balanced diet"]
  },

  "Chronic Kidney Disease": {
    symptoms: ["fatigue", "swelling", "urination_changes"],
    description: "CKD is gradual loss of kidney function.",
    precautions: ["Control diabetes", "Monitor BP"],
    medications: ["ACE inhibitors"],
    workouts: ["Light exercise"],
    diets: ["Low protein", "Low sodium"]
  },

  "Liver Cirrhosis": {
    symptoms: ["jaundice", "swelling", "fatigue"],
    description: "Cirrhosis is scarring of the liver.",
    precautions: ["Avoid alcohol", "Healthy diet"],
    medications: ["Diuretics", "Liver meds"],
    workouts: ["Light activity"],
    diets: ["Low salt"]
  },

  "Gallstones": {
    symptoms: ["abdominal_pain", "nausea", "vomiting"],
    description: "Gallstones are hardened deposits in gallbladder.",
    precautions: ["Healthy diet", "Avoid fatty food"],
    medications: ["Pain relievers"],
    workouts: ["Light exercise"],
    diets: ["Low fat diet"]
  },

  "Pancreatitis": {
    symptoms: ["abdominal_pain", "nausea", "fever"],
    description: "Pancreatitis is inflammation of pancreas.",
    precautions: ["Avoid alcohol", "Healthy diet"],
    medications: ["Pain relief", "Enzymes"],
    workouts: ["Rest"],
    diets: ["Low fat"]
  },

  "Irritable Bowel Syndrome": {
    symptoms: ["bloating", "abdominal_pain", "diarrhoea", "constipation"],
    description: "IBS affects large intestine causing discomfort.",
    precautions: ["Stress management", "Diet control"],
    medications: ["Antispasmodics"],
    workouts: ["Yoga", "Walking"],
    diets: ["Low FODMAP diet"]
  },

  "Sleep Apnea": {
    symptoms: ["snoring", "daytime_sleepiness", "breathing_pauses"],
    description: "Sleep apnea causes breathing interruptions during sleep.",
    precautions: ["Weight loss", "Sleep on side"],
    medications: ["CPAP therapy"],
    workouts: ["Exercise"],
    diets: ["Healthy diet"]
  },

  "Cholesterol (High)": {
    symptoms: ["chest_pain", "fatigue"],
    description: "High cholesterol increases heart disease risk.",
    precautions: ["Exercise", "Healthy diet"],
    medications: ["Statins"],
    workouts: ["Cardio"],
    diets: ["Low fat diet"]
  },

  "Gout": {
    symptoms: ["joint_pain", "swelling", "redness"],
    description: "Gout is a form of arthritis caused by uric acid buildup.",
    precautions: ["Avoid alcohol", "Healthy diet"],
    medications: ["NSAIDs", "Colchicine"],
    workouts: ["Light exercise"],
    diets: ["Low purine diet"]
  },
  // ===== Batch 3 Diseases =====

  "Chickenpox": {
    symptoms: ["rash", "fever", "itching", "fatigue"],
    description: "Chickenpox is a viral infection causing itchy blisters.",
    precautions: ["Avoid scratching", "Isolation", "Maintain hygiene"],
    medications: ["Antihistamines", "Calamine lotion"],
    workouts: ["Rest"],
    diets: ["Soft foods", "Fluids"]
  },

  "Measles": {
    symptoms: ["rash", "fever", "cough", "runny_nose"],
    description: "Measles is a highly contagious viral disease.",
    precautions: ["Vaccination", "Isolation"],
    medications: ["Vitamin A", "Supportive care"],
    workouts: ["Rest"],
    diets: ["Fluids", "Nutritious diet"]
  },

  "Bronchitis": {
    symptoms: ["cough", "mucus", "fatigue", "shortness_of_breath"],
    description: "Bronchitis is inflammation of bronchial tubes.",
    precautions: ["Avoid smoke", "Stay hydrated"],
    medications: ["Cough syrups", "Bronchodilators"],
    workouts: ["Breathing exercises"],
    diets: ["Warm fluids"]
  },

  "Asthma": {
    symptoms: ["wheezing", "breathlessness", "chest_tightness"],
    description: "Asthma is a chronic respiratory disease.",
    precautions: ["Avoid triggers", "Use inhaler"],
    medications: ["Bronchodilators", "Steroids"],
    workouts: ["Breathing exercises"],
    diets: ["Healthy diet"]
  },

  "Allergic Rhinitis": {
    symptoms: ["sneezing", "runny_nose", "itchy_eyes"],
    description: "Allergic rhinitis is caused by allergens.",
    precautions: ["Avoid allergens"],
    medications: ["Antihistamines"],
    workouts: ["Yoga"],
    diets: ["Healthy diet"]
  },

  "Eczema": {
    symptoms: ["itching", "dry_skin", "redness"],
    description: "Eczema is a skin condition causing irritation.",
    precautions: ["Avoid irritants", "Moisturize"],
    medications: ["Steroid creams"],
    workouts: ["Normal activity"],
    diets: ["Healthy diet"]
  },

  "Osteoporosis": {
    symptoms: ["bone_weakness", "fractures", "back_pain"],
    description: "Osteoporosis weakens bones.",
    precautions: ["Calcium intake", "Exercise"],
    medications: ["Calcium", "Vitamin D"],
    workouts: ["Weight training"],
    diets: ["Calcium rich foods"]
  },

  "Varicose Veins": {
    symptoms: ["swelling", "pain", "visible_veins"],
    description: "Varicose veins are enlarged veins.",
    precautions: ["Avoid standing long", "Exercise"],
    medications: ["Compression therapy"],
    workouts: ["Walking"],
    diets: ["Healthy diet"]
  },

  "Thyroid (Hypothyroidism)": {
    symptoms: ["fatigue", "weight_gain", "cold_intolerance"],
    description: "Underactive thyroid gland.",
    precautions: ["Regular medication"],
    medications: ["Levothyroxine"],
    workouts: ["Exercise"],
    diets: ["Iodine rich foods"]
  },

  "Thyroid (Hyperthyroidism)": {
    symptoms: ["weight_loss", "rapid_heartbeat", "anxiety"],
    description: "Overactive thyroid gland.",
    precautions: ["Monitor thyroid levels"],
    medications: ["Antithyroid drugs"],
    workouts: ["Light exercise"],
    diets: ["Balanced diet"]
  },

  "PCOS": {
    symptoms: ["irregular_periods", "weight_gain", "acne"],
    description: "PCOS affects hormonal balance in women.",
    precautions: ["Exercise", "Healthy lifestyle"],
    medications: ["Hormonal therapy"],
    workouts: ["Cardio", "Yoga"],
    diets: ["Low carb diet"]
  },

  "Endometriosis": {
    symptoms: ["pelvic_pain", "heavy_periods", "infertility"],
    description: "Endometriosis is abnormal tissue growth outside uterus.",
    precautions: ["Medical care"],
    medications: ["Pain relievers", "Hormones"],
    workouts: ["Light exercise"],
    diets: ["Anti-inflammatory diet"]
  }
};

// Get disease by name
export const getDiseaseInfo = (diseaseName) => {
  return diseasesData[diseaseName] || null;
};

// Get all disease names
export const getAllDiseases = () => {
  return Object.keys(diseasesData);
};

