// Medicines data for the shop
export const medicinesData = [
  // Pain Relief
  {
    id: 1,
    name: "Ibuprofen 400mg",
    category: "Pain Relief",
    description: "NSAID pain reliever and anti-inflammatory",
    uses: "Headache, toothache, back pain, arthritis, menstrual cramps",
    price: 5.99,
    stock: 100,
    image: "💊"
  },
  {
    id: 2,
    name: "Paracetamol 500mg",
    category: "Pain Relief",
    description: "Fever reducer and pain reliever",
    uses: "Fever, headache, muscle pain, cold symptoms",
    price: 3.99,
    stock: 200,
    image: "💊"
  },
  {
    id: 3,
    name: "Aspirin 325mg",
    category: "Pain Relief",
    description: "Pain reliever, fever reducer, anti-inflammatory",
    uses: "Headache, fever, arthritis, heart attack prevention",
    price: 4.49,
    stock: 150,
    image: "💊"
  },
  {
    id: 4,
    name: "Naproxen 250mg",
    category: "Pain Relief",
    description: "Long-lasting NSAID for pain and inflammation",
    uses: "Arthritis, tendonitis, gout, menstrual cramps",
    price: 7.99,
    stock: 80,
    image: "💊"
  },

  // Cold & Flu
  {
    id: 5,
    name: "Cetirizine 10mg",
    category: "Cold & Flu",
    description: "Antihistamine for allergies and cold symptoms",
    uses: "Sneezing, runny nose, itchy eyes, allergies",
    price: 6.49,
    stock: 120,
    image: "🤧"
  },
  {
    id: 6,
    name: "Loratadine 10mg",
    category: "Cold & Flu",
    description: "Non-drowsy antihistamine",
    uses: "Allergic rhinitis, hives, itching",
    price: 5.99,
    stock: 100,
    image: "🤧"
  },
  {
    id: 7,
    name: "Dextromethorphan 15mg",
    category: "Cold & Flu",
    description: "Cough suppressant",
    uses: "Dry cough, irritating cough",
    price: 4.99,
    stock: 90,
    image: "🤧"
  },
  {
    id: 8,
    name: "Phenylephrine 10mg",
    category: "Cold & Flu",
    description: "Decongestant for nasal congestion",
    uses: "Stuffy nose, sinus congestion, cold",
    price: 3.49,
    stock: 110,
    image: "🤧"
  },

  // Allergies
  {
    id: 9,
    name: "Fexofenadine 180mg",
    category: "Allergies",
    description: "Non-drowsy antihistamine for allergies",
    uses: "Seasonal allergies, chronic urticaria",
    price: 8.99,
    stock: 70,
    image: "🤧"
  },
  {
    id: 10,
    name: "Diphenhydramine 25mg",
    category: "Allergies",
    description: "Antihistamine for allergies and insomnia",
    uses: "Allergies, motion sickness, insomnia",
    price: 4.49,
    stock: 130,
    image: "🤧"
  },
  {
    id: 11,
    name: "Montelukast 10mg",
    category: "Allergies",
    description: "Leukotriene receptor antagonist",
    uses: "Asthma, seasonal allergies, exercise-induced bronchoconstriction",
    price: 12.99,
    stock: 60,
    image: "🤧"
  },

  // Vitamins
  {
    id: 12,
    name: "Vitamin C 1000mg",
    category: "Vitamins",
    description: "Immune system support supplement",
    uses: "Immune support, antioxidant, collagen production",
    price: 7.99,
    stock: 200,
    image: "💊"
  },
  {
    id: 13,
    name: "Vitamin D3 2000IU",
    category: "Vitamins",
    description: "Bone health and immune support",
    uses: "Bone health, immune function, mood support",
    price: 9.99,
    stock: 150,
    image: "💊"
  },
  {
    id: 14,
    name: "Multivitamin Complete",
    category: "Vitamins",
    description: "Daily multivitamin for overall health",
    uses: "Energy, immune support, general wellness",
    price: 14.99,
    stock: 100,
    image: "💊"
  },
  {
    id: 15,
    name: "B-Complex",
    category: "Vitamins",
    description: "B vitamin complex for energy metabolism",
    uses: "Energy, nerve function, red blood cell production",
    price: 11.99,
    stock: 80,
    image: "💊"
  },
  {
    id: 16,
    name: "Zinc 50mg",
    category: "Vitamins",
    description: "Immune system and wound healing support",
    uses: "Immune support, wound healing, skin health",
    price: 5.99,
    stock: 120,
    image: "💊"
  },

  // First Aid
  {
    id: 17,
    name: "Bandages Assorted",
    category: "First Aid",
    description: "Assorted adhesive bandages for minor cuts",
    uses: "Minor cuts, scrapes, blisters",
    price: 3.99,
    stock: 300,
    image: "🩹"
  },
  {
    id: 18,
    name: "Antiseptic Cream",
    category: "First Aid",
    description: "Antibiotic cream for wound care",
    uses: "Minor cuts, burns, scrapes, skin infections",
    price: 5.49,
    stock: 150,
    image: "🩹"
  },
  {
    id: 19,
    name: "Hydrogen Peroxide 3%",
    category: "First Aid",
    description: "Antiseptic solution for wound cleaning",
    uses: "Wound disinfection, oral gargle (diluted)",
    price: 2.49,
    stock: 200,
    image: "🧴"
  },
  {
    id: 20,
    name: "Calamine Lotion",
    category: "First Aid",
    description: "Soothing lotion for skin irritation",
    uses: "Itching, rashes, sunburn, insect bites",
    price: 4.99,
    stock: 100,
    image: "🧴"
  },

  // Digestion
  {
    id: 21,
    name: "Omeprazole 20mg",
    category: "Digestion",
    description: "Proton pump inhibitor for acid reflux",
    uses: "Acid reflux, GERD, heartburn, ulcer prevention",
    price: 8.99,
    stock: 90,
    image: "💊"
  },
  {
    id: 22,
    name: "Antacid Tablets",
    category: "Digestion",
    description: "Fast-acting antacid for heartburn",
    uses: "Heartburn, acid indigestion, sour stomach",
    price: 3.49,
    stock: 180,
    image: "💊"
  },
  {
    id: 23,
    name: "Loperamide 2mg",
    category: "Digestion",
    description: "Anti-diarrheal medication",
    uses: "Diarrhea, traveler's diarrhea, IBS with diarrhea",
    price: 5.99,
    stock: 100,
    image: "💊"
  },
  {
    id: 24,
    name: "Psyllium Husk",
    category: "Digestion",
    description: "Fiber supplement for constipation relief",
    uses: "Constipation, IBS, heart health, blood sugar control",
    price: 9.99,
    stock: 70,
    image: "💊"
  },

  // Nausea
  {
    id: 25,
    name: "Ondansetron 4mg",
    category: "Nausea",
    description: "Anti-nausea and anti-vomiting medication",
    uses: "Nausea, vomiting, chemotherapy-induced nausea, motion sickness",
    price: 10.99,
    stock: 60,
    image: "💊"
  },
  {
    id: 26,
    name: "Meclizine 25mg",
    category: "Nausea",
    description: "Antihistamine for motion sickness",
    uses: "Motion sickness, dizziness, vertigo",
    price: 6.49,
    stock: 80,
    image: "💊"
  },
  {
    id: 27,
    name: "Ginger Tablets",
    category: "Nausea",
    description: "Natural ginger supplement for nausea",
    uses: "Morning sickness, motion sickness, digestive discomfort",
    price: 7.99,
    stock: 100,
    image: "💊"
  },

  // Antifungal
  {
    id: 28,
    name: "Clotrimazole Cream 1%",
    category: "Fungal",
    description: "Antifungal cream for skin infections",
    uses: "Athlete's foot, ringworm, jock itch, yeast infections",
    price: 6.99,
    stock: 90,
    image: "🧴"
  },
  {
    id: 29,
    name: "Fluconazole 150mg",
    category: "Fungal",
    description: "Oral antifungal medication",
    uses: "Vaginal yeast infection, oral thrush, systemic fungal infections",
    price: 12.99,
    stock: 50,
    image: "💊"
  },
  {
    id: 30,
    name: "Terbinafine Cream 1%",
    category: "Fungal",
    description: "Antifungal cream for athlete's foot",
    uses: "Athlete's foot, jock itch, ringworm",
    price: 8.49,
    stock: 70,
    image: "🧴"
  }
];

// Get medicine by ID
export const getMedicineById = (id) => {
  return medicinesData.find(medicine => medicine.id === id);
};

// Get medicines by category
export const getMedicinesByCategory = (category) => {
  return medicinesData.filter(medicine => medicine.category === category);
};

// Get all categories
export const getAllCategories = () => {
  return [...new Set(medicinesData.map(medicine => medicine.category))];
};

// Search medicines
export const searchMedicines = (query) => {
  const lowerQuery = query.toLowerCase();
  return medicinesData.filter(medicine => 
    medicine.name.toLowerCase().includes(lowerQuery) ||
    medicine.description.toLowerCase().includes(lowerQuery) ||
    medicine.uses.toLowerCase().includes(lowerQuery)
  );
};

