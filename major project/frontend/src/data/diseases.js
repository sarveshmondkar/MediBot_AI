// Diseases data with symptoms, descriptions, precautions, medications, workouts, and diets
export const diseasesData = {
  "Fungal infection": {
    symptoms: ["itching", "skin_rash", "nodal_skin_eruptions"],
    description: "Fungal infection is a common skin condition caused by fungi.",
    precautions: ["Bath twice", "Use detol or neem in bathing water", "Keep infected area dry", "Use clean cloths"],
    medications: ["Antifungal Cream", "Fluconazole", "Terbinafine", "Clotrimazole", "Ketoconazole"],
    workouts: ["Avoid sugary foods", "Consume probiotics", "Increase intake of garlic", "Include yogurt in diet", "Limit processed foods", "Stay hydrated", "Consume green tea", "Eat foods rich in zinc", "Include turmeric in diet", "Eat fruits and vegetables"],
    diets: ["Antifungal Diet", "Probiotics", "Garlic", "Coconut oil", "Turmeric"]
  },
  "Allergy": {
    symptoms: ["continuous_sneezing", "shivering", "chills", "watery_from_eyes"],
    description: "Allergy is an immune system reaction to a foreign substance that's not typically harmful to your body.",
    precautions: ["Avoid dust", "Use air purifier", "Stay indoors during high pollen count", "Wash hands frequently"],
    medications: ["Antihistamines", "Decongestants", "Nasal sprays", "Eye drops", "Corticosteroids"],
    workouts: ["Regular exercise", "Yoga", "Meditation for stress management", "Avoid outdoor exercise during peak allergy season"],
    diets: ["Local honey", "Omega-3 rich foods", "Vitamin C rich foods", "Avoid dairy", "Stay hydrated"]
  },
  "GERD": {
    symptoms: ["chest_pain", "acidity", "cough", "throat_irritation"],
    description: "Gastroesophageal reflux disease is a chronic digestive disease where stomach acid flows back into the esophagus.",
    precautions: ["Avoid spicy foods", "Eat smaller meals", "Don't lie down after eating", "Elevate head while sleeping"],
    medications: ["Antacids", "H2 blockers", "Proton pump inhibitors", "Prokinetics"],
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
    medications: ["Metformin", "Insulin", "SGLT2 inhibitors", "GLP-1 receptor agonists"],
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
    medications: ["ACE inhibitors", "ARBs", "Diuretics", "Beta blockers", "Calcium channel blockers"],
    workouts: ["Aerobic exercise", "Walking", "Swimming", "Cycling", "Yoga"],
    diets: ["DASH diet", "Low sodium", "Fruits and vegetables", "Whole grains"]
  },
  "Migraine": {
    symptoms: ["headache", "nausea", "sensitivity_to_light", "visual_disturbances", "dizziness"],
    description: "Migraine is a neurological condition causing intense headaches and other symptoms.",
    precautions: ["Identify triggers", "Manage stress", "Regular sleep schedule", "Avoid bright lights"],
    medications: ["Triptans", "NSAIDs", "Antiemetics", "Preventive medications"],
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
    medications: ["Acetaminophen", "NSAIDs (avoid aspirin)", "ORS", "Platelet transfusion if needed"],
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
    medications: ["Decongestants", "Cough suppressants", "Pain relievers", "Antihistamines"],
    workouts: ["Rest during acute phase", "Light walking when feeling better", "Avoid intense exercise"],
    diets: ["Hot fluids", "Vitamin C", "Chicken soup", "Honey", "Stay hydrated"]
  },
  "Pneumonia": {
    symptoms: ["cough", "high_fever", "chills", "breathlessness", "chest_pain", "fatigue"],
    description: "Pneumonia is an infection that inflames the air sacs in one or both lungs.",
    precautions: ["Get vaccinated", "Practice good hygiene", "Quit smoking", "Stay away from sick people"],
    medications: ["Antibiotics", "Cough medicine", "Fever reducers", "Oxygen therapy if needed"],
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

