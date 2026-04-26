import mongoose from 'mongoose';
import { User } from './models/User.js';
import { Medicine } from './models/Medicine.js';
import { HealthTip } from './models/HealthTip.js';
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI ;

const medicinesData = [
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
    uses: "Headache, fever, arthritis, heart protection",
    price: 4.49,
    stock: 150,
    image: "💊"
  },
  {
    id: 4,
    name: "Naproxen 250mg",
    category: "Pain Relief",
    description: "Long-lasting NSAID",
    uses: "Arthritis, tendonitis, gout",
    price: 7.99,
    stock: 80,
    image: "💊"
  },
  {
    id: 5,
    name: "Diclofenac 50mg",
    category: "Pain Relief",
    description: "Anti-inflammatory pain reliever",
    uses: "Joint pain, muscle pain",
    price: 6.49,
    stock: 90,
    image: "💊"
  },
  {
    id: 6,
    name: "Ketorolac 10mg",
    category: "Pain Relief",
    description: "Strong NSAID",
    uses: "Post-surgical pain, severe pain",
    price: 8.49,
    stock: 70,
    image: "💊"
  },
  {
    id: 7,
    name: "Celecoxib 200mg",
    category: "Pain Relief",
    description: "COX-2 inhibitor",
    uses: "Arthritis, joint pain",
    price: 9.99,
    stock: 60,
    image: "💊"
  },
  {
    id: 8,
    name: "Meloxicam 15mg",
    category: "Pain Relief",
    description: "NSAID",
    uses: "Osteoarthritis, rheumatoid arthritis",
    price: 7.49,
    stock: 75,
    image: "💊"
  },
  {
    id: 9,
    name: "Etodolac 400mg",
    category: "Pain Relief",
    description: "Anti-inflammatory",
    uses: "Joint pain, arthritis",
    price: 6.99,
    stock: 85,
    image: "💊"
  },
  {
    id: 10,
    name: "Indomethacin 25mg",
    category: "Pain Relief",
    description: "NSAID",
    uses: "Gout, arthritis",
    price: 7.29,
    stock: 65,
    image: "💊"
  },
  {
    id: 11,
    name: "Piroxicam 20mg",
    category: "Pain Relief",
    description: "NSAID",
    uses: "Arthritis, inflammation",
    price: 6.79,
    stock: 70,
    image: "💊"
  },
  {
    id: 12,
    name: "Tramadol 50mg",
    category: "Pain Relief",
    description: "Opioid pain reliever",
    uses: "Moderate to severe pain",
    price: 10.99,
    stock: 50,
    image: "💊"
  },
  {
    id: 13,
    name: "Codeine 30mg",
    category: "Pain Relief",
    description: "Opioid analgesic",
    uses: "Moderate pain, cough",
    price: 11.49,
    stock: 40,
    image: "💊"
  },
  {
    id: 14,
    name: "Acetaminophen 650mg",
    category: "Pain Relief",
    description: "Pain reliever",
    uses: "Fever, mild pain",
    price: 4.29,
    stock: 120,
    image: "💊"
  },
  {
    id: 15,
    name: "Ibuprofen 600mg",
    category: "Pain Relief",
    description: "Stronger NSAID",
    uses: "Severe pain, inflammation",
    price: 6.49,
    stock: 90,
    image: "💊"
  },
  {
    id: 16,
    name: "Naproxen 500mg",
    category: "Pain Relief",
    description: "Extended pain relief",
    uses: "Back pain, arthritis",
    price: 8.49,
    stock: 70,
    image: "💊"
  },
  {
    id: 17,
    name: "Diclofenac SR 100mg",
    category: "Pain Relief",
    description: "Sustained release NSAID",
    uses: "Chronic pain",
    price: 7.99,
    stock: 60,
    image: "💊"
  },
  {
    id: 18,
    name: "Ketoprofen 100mg",
    category: "Pain Relief",
    description: "NSAID",
    uses: "Inflammation, arthritis",
    price: 7.19,
    stock: 75,
    image: "💊"
  },
  {
    id: 19,
    name: "Flurbiprofen 100mg",
    category: "Pain Relief",
    description: "NSAID",
    uses: "Joint pain",
    price: 6.89,
    stock: 65,
    image: "💊"
  },
  {
    id: 20,
    name: "Sulindac 200mg",
    category: "Pain Relief",
    description: "Anti-inflammatory",
    uses: "Arthritis",
    price: 7.49,
    stock: 60,
    image: "💊"
  },
  {
    id: 21,
    name: "Oxaprozin 600mg",
    category: "Pain Relief",
    description: "NSAID",
    uses: "Joint pain",
    price: 8.99,
    stock: 55,
    image: "💊"
  },
  {
    id: 22,
    name: "Tolmetin 200mg",
    category: "Pain Relief",
    description: "NSAID",
    uses: "Arthritis",
    price: 7.29,
    stock: 50,
    image: "💊"
  },
  {
    id: 23,
    name: "Nimesulide 100mg",
    category: "Pain Relief",
    description: "Anti-inflammatory",
    uses: "Pain, fever",
    price: 5.99,
    stock: 80,
    image: "💊"
  },
  {
    id: 24,
    name: "Aceclofenac 100mg",
    category: "Pain Relief",
    description: "NSAID",
    uses: "Joint pain",
    price: 6.49,
    stock: 75,
    image: "💊"
  },
  {
    id: 25,
    name: "Tenoxicam 20mg",
    category: "Pain Relief",
    description: "NSAID",
    uses: "Inflammation",
    price: 7.99,
    stock: 60,
    image: "💊"
  },
  {
    id: 26,
    name: "Lornoxicam 8mg",
    category: "Pain Relief",
    description: "NSAID",
    uses: "Acute pain",
    price: 8.49,
    stock: 55,
    image: "💊"
  },
  {
    id: 27,
    name: "Dexketoprofen 25mg",
    category: "Pain Relief",
    description: "Fast-acting NSAID",
    uses: "Acute pain",
    price: 7.89,
    stock: 70,
    image: "💊"
  },
  {
    id: 28,
    name: "Etoricoxib 90mg",
    category: "Pain Relief",
    description: "COX-2 inhibitor",
    uses: "Arthritis, pain",
    price: 9.49,
    stock: 65,
    image: "💊"
  },
  {
    id: 29,
    name: "Tapentadol 50mg",
    category: "Pain Relief",
    description: "Opioid analgesic",
    uses: "Severe pain",
    price: 12.99,
    stock: 40,
    image: "💊"
  },
  {
    id: 30,
    name: "Hydrocodone 10mg",
    category: "Pain Relief",
    description: "Opioid pain reliever",
    uses: "Severe pain",
    price: 13.49,
    stock: 35,
    image: "💊"
  },


// Cold & Flu
{
  id: 31,
  name: "Cetirizine 10mg",
  category: "Cold & Flu",
  description: "Antihistamine for allergies and cold symptoms",
  uses: "Sneezing, runny nose, itchy eyes, allergies",
  price: 6.49,
  stock: 120,
  image: "🤧"
},
{
  id: 32,
  name: "Loratadine 10mg",
  category: "Cold & Flu",
  description: "Non-drowsy antihistamine",
  uses: "Allergic rhinitis, hives, itching",
  price: 5.99,
  stock: 100,
  image: "🤧"
},
{
  id: 33,
  name: "Dextromethorphan 15mg",
  category: "Cold & Flu",
  description: "Cough suppressant",
  uses: "Dry cough, irritating cough",
  price: 4.99,
  stock: 90,
  image: "🤧"
},
{
  id: 34,
  name: "Phenylephrine 10mg",
  category: "Cold & Flu",
  description: "Decongestant for nasal congestion",
  uses: "Stuffy nose, sinus congestion, cold",
  price: 3.49,
  stock: 110,
  image: "🤧"
},
{
  id: 35,
  name: "Pseudoephedrine 30mg",
  category: "Cold & Flu",
  description: "Decongestant",
  uses: "Blocked nose, sinus pressure",
  price: 6.99,
  stock: 75,
  image: "🤧"
},
{
  id: 36,
  name: "Chlorpheniramine 4mg",
  category: "Cold & Flu",
  description: "Antihistamine",
  uses: "Cold, allergies",
  price: 4.29,
  stock: 100,
  image: "🤧"
},
{
  id: 37,
  name: "Diphenhydramine 25mg",
  category: "Cold & Flu",
  description: "Sedating antihistamine",
  uses: "Cold, cough, sleep",
  price: 4.49,
  stock: 130,
  image: "🤧"
},
{
  id: 38,
  name: "Guaifenesin 200mg",
  category: "Cold & Flu",
  description: "Expectorant",
  uses: "Chest congestion, mucus",
  price: 5.49,
  stock: 95,
  image: "🤧"
},
{
  id: 39,
  name: "Ambroxol 30mg",
  category: "Cold & Flu",
  description: "Mucolytic agent",
  uses: "Productive cough",
  price: 5.99,
  stock: 85,
  image: "🤧"
},
{
  id: 40,
  name: "Bromhexine 8mg",
  category: "Cold & Flu",
  description: "Mucolytic",
  uses: "Chest congestion",
  price: 4.79,
  stock: 80,
  image: "🤧"
},
{
  id: 41,
  name: "Levocetirizine 5mg",
  category: "Cold & Flu",
  description: "Antihistamine",
  uses: "Sneezing, allergies",
  price: 7.49,
  stock: 85,
  image: "🤧"
},
{
  id: 42,
  name: "Desloratadine 5mg",
  category: "Cold & Flu",
  description: "Allergy medicine",
  uses: "Cold and hay fever",
  price: 9.49,
  stock: 65,
  image: "🤧"
},
{
  id: 43,
  name: "Montelukast 10mg",
  category: "Cold & Flu",
  description: "Anti-allergy medicine",
  uses: "Cold, breathing issues",
  price: 12.99,
  stock: 60,
  image: "🤧"
},
{
  id: 44,
  name: "Oxymetazoline Nasal Spray",
  category: "Cold & Flu",
  description: "Nasal decongestant spray",
  uses: "Blocked nose",
  price: 6.49,
  stock: 70,
  image: "🤧"
},
{
  id: 45,
  name: "Xylometazoline Drops",
  category: "Cold & Flu",
  description: "Nasal drops",
  uses: "Sinus congestion",
  price: 5.99,
  stock: 75,
  image: "🤧"
},
{
  id: 46,
  name: "Menthol Lozenges",
  category: "Cold & Flu",
  description: "Soothing throat lozenges",
  uses: "Sore throat",
  price: 3.99,
  stock: 140,
  image: "🤧"
},
{
  id: 47,
  name: "Paracetamol + Phenylephrine",
  category: "Cold & Flu",
  description: "Combination cold medicine",
  uses: "Cold, fever",
  price: 6.99,
  stock: 110,
  image: "🤧"
},
{
  id: 48,
  name: "Ibuprofen + Pseudoephedrine",
  category: "Cold & Flu",
  description: "Cold relief combo",
  uses: "Pain + congestion",
  price: 7.49,
  stock: 90,
  image: "🤧"
},
{
  id: 49,
  name: "Cough Syrup DM",
  category: "Cold & Flu",
  description: "Cough syrup",
  uses: "Dry cough",
  price: 5.99,
  stock: 100,
  image: "🤧"
},
{
  id: 50,
  name: "Herbal Cold Syrup",
  category: "Cold & Flu",
  description: "Herbal remedy",
  uses: "Cold, cough",
  price: 4.99,
  stock: 120,
  image: "🤧"
},
{
  id: 51,
  name: "Steam Inhaler Capsules",
  category: "Cold & Flu",
  description: "Inhalation therapy",
  uses: "Blocked nose",
  price: 3.99,
  stock: 150,
  image: "🤧"
},
{
  id: 52,
  name: "Saline Nasal Spray",
  category: "Cold & Flu",
  description: "Moisturizing spray",
  uses: "Dry nose",
  price: 4.49,
  stock: 130,
  image: "🤧"
},
{
  id: 53,
  name: "Cold Relief Tablets",
  category: "Cold & Flu",
  description: "Multi-symptom relief",
  uses: "Cold, fever",
  price: 5.49,
  stock: 115,
  image: "🤧"
},
{
  id: 54,
  name: "Flu Relief Capsules",
  category: "Cold & Flu",
  description: "Flu treatment",
  uses: "Flu symptoms",
  price: 6.99,
  stock: 95,
  image: "🤧"
},
{
  id: 55,
  name: "Zinc Lozenges",
  category: "Cold & Flu",
  description: "Immune support",
  uses: "Cold recovery",
  price: 5.99,
  stock: 120,
  image: "🤧"
},
{
  id: 56,
  name: "Vitamin C Cold Tablets",
  category: "Cold & Flu",
  description: "Immune booster",
  uses: "Cold prevention",
  price: 6.49,
  stock: 140,
  image: "🤧"
},
{
  id: 57,
  name: "Cold & Flu Night Tablets",
  category: "Cold & Flu",
  description: "Nighttime relief",
  uses: "Cold, sleep aid",
  price: 7.49,
  stock: 80,
  image: "🤧"
},
{
  id: 58,
  name: "Cold & Flu Day Tablets",
  category: "Cold & Flu",
  description: "Daytime relief",
  uses: "Cold, flu",
  price: 7.29,
  stock: 85,
  image: "🤧"
},
{
  id: 59,
  name: "Eucalyptus Oil Drops",
  category: "Cold & Flu",
  description: "Natural remedy",
  uses: "Cold, congestion",
  price: 4.99,
  stock: 100,
  image: "🤧"
},
{
  id: 60,
  name: "Throat Relief Spray",
  category: "Cold & Flu",
  description: "Soothing spray",
  uses: "Sore throat",
  price: 5.49,
  stock: 90,
  image: "🤧"
},

// Allergies
{
  id: 61,
  name: "Fexofenadine 180mg",
  category: "Allergies",
  description: "Non-drowsy antihistamine for allergies",
  uses: "Seasonal allergies, chronic urticaria",
  price: 8.99,
  stock: 70,
  image: "🤧"
},
{
  id: 62,
  name: "Diphenhydramine 25mg",
  category: "Allergies",
  description: "Antihistamine for allergies and insomnia",
  uses: "Allergies, motion sickness, insomnia",
  price: 4.49,
  stock: 130,
  image: "🤧"
},
{
  id: 63,
  name: "Montelukast 10mg",
  category: "Allergies",
  description: "Leukotriene receptor antagonist",
  uses: "Asthma, seasonal allergies, breathing issues",
  price: 12.99,
  stock: 60,
  image: "🤧"
},
{
  id: 64,
  name: "Cetirizine 10mg",
  category: "Allergies",
  description: "Antihistamine",
  uses: "Sneezing, itching, runny nose",
  price: 6.49,
  stock: 120,
  image: "🤧"
},
{
  id: 65,
  name: "Levocetirizine 5mg",
  category: "Allergies",
  description: "Advanced antihistamine",
  uses: "Allergic rhinitis, hives",
  price: 7.49,
  stock: 90,
  image: "🤧"
},
{
  id: 66,
  name: "Desloratadine 5mg",
  category: "Allergies",
  description: "Non-drowsy antihistamine",
  uses: "Hay fever, skin allergies",
  price: 9.49,
  stock: 65,
  image: "🤧"
},
{
  id: 67,
  name: "Chlorpheniramine 4mg",
  category: "Allergies",
  description: "Antihistamine",
  uses: "Cold, allergies",
  price: 4.29,
  stock: 100,
  image: "🤧"
},
{
  id: 68,
  name: "Hydroxyzine 25mg",
  category: "Allergies",
  description: "Antihistamine with sedative effect",
  uses: "Allergy, anxiety, itching",
  price: 6.99,
  stock: 75,
  image: "🤧"
},
{
  id: 69,
  name: "Bilastine 20mg",
  category: "Allergies",
  description: "Modern antihistamine",
  uses: "Allergic rhinitis",
  price: 10.49,
  stock: 55,
  image: "🤧"
},
{
  id: 70,
  name: "Rupatadine 10mg",
  category: "Allergies",
  description: "Antihistamine",
  uses: "Chronic urticaria",
  price: 9.99,
  stock: 60,
  image: "🤧"
},
{
  id: 71,
  name: "Ketotifen 1mg",
  category: "Allergies",
  description: "Mast cell stabilizer",
  uses: "Allergic asthma",
  price: 8.49,
  stock: 70,
  image: "🤧"
},
{
  id: 72,
  name: "Cromolyn Sodium",
  category: "Allergies",
  description: "Prevents allergic reactions",
  uses: "Asthma, nasal allergies",
  price: 7.99,
  stock: 65,
  image: "🤧"
},
{
  id: 73,
  name: "Fluticasone Nasal Spray",
  category: "Allergies",
  description: "Steroid nasal spray",
  uses: "Nasal congestion, allergies",
  price: 9.49,
  stock: 80,
  image: "🤧"
},
{
  id: 74,
  name: "Mometasone Spray",
  category: "Allergies",
  description: "Corticosteroid spray",
  uses: "Allergic rhinitis",
  price: 10.99,
  stock: 70,
  image: "🤧"
},
{
  id: 75,
  name: "Budesonide Nasal Spray",
  category: "Allergies",
  description: "Steroid spray",
  uses: "Nasal allergy relief",
  price: 9.99,
  stock: 60,
  image: "🤧"
},
{
  id: 76,
  name: "Allergy Relief Tablets",
  category: "Allergies",
  description: "Multi-symptom relief",
  uses: "Allergy symptoms",
  price: 6.49,
  stock: 110,
  image: "🤧"
},
{
  id: 77,
  name: "Anti-Allergy Syrup",
  category: "Allergies",
  description: "Liquid antihistamine",
  uses: "Allergy, itching",
  price: 5.99,
  stock: 120,
  image: "🤧"
},
{
  id: 78,
  name: "Allergy Eye Drops",
  category: "Allergies",
  description: "Ophthalmic solution",
  uses: "Itchy, watery eyes",
  price: 6.99,
  stock: 90,
  image: "🤧"
},
{
  id: 79,
  name: "Olopatadine Eye Drops",
  category: "Allergies",
  description: "Antihistamine eye drops",
  uses: "Eye allergy",
  price: 8.99,
  stock: 80,
  image: "🤧"
},
{
  id: 80,
  name: "Allergy Nasal Drops",
  category: "Allergies",
  description: "Nasal solution",
  uses: "Blocked nose",
  price: 5.49,
  stock: 100,
  image: "🤧"
},
{
  id: 81,
  name: "Immunotherapy Tablets",
  category: "Allergies",
  description: "Allergy treatment therapy",
  uses: "Chronic allergies",
  price: 14.99,
  stock: 40,
  image: "🤧"
},
{
  id: 82,
  name: "Allergy Relief Capsules",
  category: "Allergies",
  description: "Capsule form antihistamine",
  uses: "General allergies",
  price: 7.49,
  stock: 85,
  image: "🤧"
},
{
  id: 83,
  name: "Topical Anti-Allergy Cream",
  category: "Allergies",
  description: "Skin cream",
  uses: "Rashes, itching",
  price: 6.99,
  stock: 95,
  image: "🧴"
},
{
  id: 84,
  name: "Calamine Lotion",
  category: "Allergies",
  description: "Soothing lotion",
  uses: "Skin irritation, itching",
  price: 4.99,
  stock: 100,
  image: "🧴"
},
{
  id: 85,
  name: "Hydrocortisone Cream",
  category: "Allergies",
  description: "Steroid cream",
  uses: "Skin allergies",
  price: 5.99,
  stock: 85,
  image: "🧴"
},
{
  id: 86,
  name: "Allergy Patch Test Kit",
  category: "Allergies",
  description: "Diagnostic kit",
  uses: "Allergy testing",
  price: 19.99,
  stock: 30,
  image: "🧪"
},
{
  id: 87,
  name: "Allergy Relief Spray",
  category: "Allergies",
  description: "Quick relief spray",
  uses: "Allergy symptoms",
  price: 6.49,
  stock: 75,
  image: "🤧"
},
{
  id: 88,
  name: "Nasal Saline Allergy Spray",
  category: "Allergies",
  description: "Moisturizing spray",
  uses: "Nasal dryness",
  price: 4.49,
  stock: 100,
  image: "🤧"
},
{
  id: 89,
  name: "Allergy Relief Lozenges",
  category: "Allergies",
  description: "Soothing lozenges",
  uses: "Throat irritation",
  price: 3.99,
  stock: 120,
  image: "🤧"
},
{
  id: 90,
  name: "Herbal Anti-Allergy Tablets",
  category: "Allergies",
  description: "Natural remedy",
  uses: "Allergy relief",
  price: 5.49,
  stock: 110,
  image: "🌿"
},

// Vitamins
{
  id: 91,
  name: "Vitamin C 1000mg",
  category: "Vitamins",
  description: "Immune system support supplement",
  uses: "Immune support, antioxidant, collagen production",
  price: 7.99,
  stock: 200,
  image: "💊"
},
{
  id: 92,
  name: "Vitamin D3 2000IU",
  category: "Vitamins",
  description: "Bone health and immune support",
  uses: "Bone strength, immunity",
  price: 9.99,
  stock: 150,
  image: "💊"
},
{
  id: 93,
  name: "Multivitamin Complete",
  category: "Vitamins",
  description: "Daily multivitamin",
  uses: "General health, energy",
  price: 14.99,
  stock: 100,
  image: "💊"
},
{
  id: 94,
  name: "B-Complex Tablets",
  category: "Vitamins",
  description: "Vitamin B complex",
  uses: "Energy metabolism, nerve health",
  price: 11.99,
  stock: 80,
  image: "💊"
},
{
  id: 95,
  name: "Zinc 50mg",
  category: "Vitamins",
  description: "Immune booster",
  uses: "Wound healing, immunity",
  price: 5.99,
  stock: 120,
  image: "💊"
},
{
  id: 96,
  name: "Iron Tablets 65mg",
  category: "Vitamins",
  description: "Iron supplement",
  uses: "Anemia, low hemoglobin",
  price: 6.49,
  stock: 90,
  image: "💊"
},
{
  id: 97,
  name: "Calcium 500mg",
  category: "Vitamins",
  description: "Bone support supplement",
  uses: "Bone strength, teeth health",
  price: 7.49,
  stock: 110,
  image: "💊"
},
{
  id: 98,
  name: "Magnesium 400mg",
  category: "Vitamins",
  description: "Mineral supplement",
  uses: "Muscle function, relaxation",
  price: 8.49,
  stock: 85,
  image: "💊"
},
{
  id: 99,
  name: "Vitamin B12 1000mcg",
  category: "Vitamins",
  description: "Energy vitamin",
  uses: "Nerve health, energy",
  price: 9.49,
  stock: 95,
  image: "💊"
},
{
  id: 100,
  name: "Folic Acid 5mg",
  category: "Vitamins",
  description: "Prenatal vitamin",
  uses: "Pregnancy support",
  price: 4.99,
  stock: 100,
  image: "💊"
},
{
  id: 101,
  name: "Vitamin E 400IU",
  category: "Vitamins",
  description: "Antioxidant",
  uses: "Skin health, immunity",
  price: 6.99,
  stock: 75,
  image: "💊"
},
{
  id: 102,
  name: "Biotin 5000mcg",
  category: "Vitamins",
  description: "Hair & skin vitamin",
  uses: "Hair growth, nails",
  price: 8.99,
  stock: 80,
  image: "💊"
},
{
  id: 103,
  name: "Omega-3 Fish Oil",
  category: "Vitamins",
  description: "Heart health supplement",
  uses: "Heart, brain health",
  price: 12.99,
  stock: 70,
  image: "💊"
},
{
  id: 104,
  name: "Vitamin K2",
  category: "Vitamins",
  description: "Bone health vitamin",
  uses: "Calcium absorption",
  price: 10.49,
  stock: 65,
  image: "💊"
},
{
  id: 105,
  name: "Vitamin A 10000IU",
  category: "Vitamins",
  description: "Vision support",
  uses: "Eye health",
  price: 7.99,
  stock: 90,
  image: "💊"
},
{
  id: 106,
  name: "Multivitamin Gummies",
  category: "Vitamins",
  description: "Chewable vitamins",
  uses: "General health",
  price: 11.49,
  stock: 85,
  image: "💊"
},
{
  id: 107,
  name: "Electrolyte Tablets",
  category: "Vitamins",
  description: "Hydration support",
  uses: "Dehydration",
  price: 6.99,
  stock: 100,
  image: "💊"
},
{
  id: 108,
  name: "Vitamin B6 50mg",
  category: "Vitamins",
  description: "Nerve support",
  uses: "Brain health",
  price: 5.49,
  stock: 95,
  image: "💊"
},
{
  id: 109,
  name: "Vitamin C Effervescent",
  category: "Vitamins",
  description: "Dissolvable tablets",
  uses: "Immunity boost",
  price: 8.49,
  stock: 90,
  image: "💊"
},
{
  id: 110,
  name: "Calcium + Vitamin D",
  category: "Vitamins",
  description: "Bone supplement",
  uses: "Bone strength",
  price: 9.49,
  stock: 85,
  image: "💊"
},
{
  id: 111,
  name: "Zinc + Vitamin C",
  category: "Vitamins",
  description: "Immune combo",
  uses: "Cold prevention",
  price: 7.99,
  stock: 100,
  image: "💊"
},
{
  id: 112,
  name: "Iron + Folic Acid",
  category: "Vitamins",
  description: "Blood health",
  uses: "Anemia",
  price: 6.99,
  stock: 95,
  image: "💊"
},
{
  id: 113,
  name: "Omega 3-6-9 Capsules",
  category: "Vitamins",
  description: "Fatty acid supplement",
  uses: "Heart health",
  price: 13.49,
  stock: 70,
  image: "💊"
},
{
  id: 114,
  name: "Hair Skin Nails Formula",
  category: "Vitamins",
  description: "Beauty supplement",
  uses: "Hair, skin",
  price: 12.49,
  stock: 75,
  image: "💊"
},
{
  id: 115,
  name: "Energy Multivitamin",
  category: "Vitamins",
  description: "Energy booster",
  uses: "Fatigue",
  price: 10.99,
  stock: 80,
  image: "💊"
},
{
  id: 116,
  name: "Vitamin D3 Drops",
  category: "Vitamins",
  description: "Liquid supplement",
  uses: "Bone health",
  price: 9.49,
  stock: 60,
  image: "💧"
},
{
  id: 117,
  name: "Probiotic Capsules",
  category: "Vitamins",
  description: "Gut health supplement",
  uses: "Digestion",
  price: 11.99,
  stock: 70,
  image: "💊"
},
{
  id: 118,
  name: "Vitamin C Syrup",
  category: "Vitamins",
  description: "Liquid vitamin",
  uses: "Immunity",
  price: 5.99,
  stock: 100,
  image: "💊"
},
{
  id: 119,
  name: "Calcium Chewable Tablets",
  category: "Vitamins",
  description: "Chewable calcium",
  uses: "Bone support",
  price: 7.49,
  stock: 90,
  image: "💊"
},
{
  id: 120,
  name: "Daily Health Multivitamin",
  category: "Vitamins",
  description: "Complete daily supplement",
  uses: "Overall health",
  price: 13.99,
  stock: 85,
  image: "💊"
},

 // First Aid
{
  id: 121,
  name: "Bandages Assorted",
  category: "First Aid",
  description: "Assorted adhesive bandages for minor cuts",
  uses: "Minor cuts, scrapes, blisters",
  price: 3.99,
  stock: 300,
  image: "🩹"
},
{
  id: 122,
  name: "Sterile Gauze Pads",
  category: "First Aid",
  description: "Sterile pads for wound dressing",
  uses: "Wounds, cuts, dressing",
  price: 4.49,
  stock: 250,
  image: "🩹"
},
{
  id: 123,
  name: "Antiseptic Liquid",
  category: "First Aid",
  description: "Kills germs and prevents infection",
  uses: "Wound cleaning",
  price: 5.99,
  stock: 200,
  image: "🧴"
},
{
  id: 124,
  name: "Hydrogen Peroxide",
  category: "First Aid",
  description: "Disinfectant solution",
  uses: "Cleaning wounds",
  price: 3.49,
  stock: 180,
  image: "🧴"
},
{
  id: 125,
  name: "Cotton Rolls",
  category: "First Aid",
  description: "Soft cotton for medical use",
  uses: "Cleaning, dressing wounds",
  price: 2.99,
  stock: 300,
  image: "🩹"
},
{
  id: 126,
  name: "Medical Adhesive Tape",
  category: "First Aid",
  description: "Tape for securing bandages",
  uses: "Wound dressing",
  price: 2.49,
  stock: 220,
  image: "🩹"
},
{
  id: 127,
  name: "Antibiotic Ointment",
  category: "First Aid",
  description: "Prevents infection in wounds",
  uses: "Cuts, burns",
  price: 6.49,
  stock: 150,
  image: "🧴"
},
{
  id: 128,
  name: "Burn Relief Gel",
  category: "First Aid",
  description: "Soothes burns",
  uses: "Minor burns",
  price: 5.99,
  stock: 130,
  image: "🧴"
},
{
  id: 129,
  name: "Ice Pack",
  category: "First Aid",
  description: "Cold therapy pack",
  uses: "Swelling, injuries",
  price: 4.99,
  stock: 140,
  image: "❄️"
},
{
  id: 130,
  name: "Hot Water Bag",
  category: "First Aid",
  description: "Heat therapy",
  uses: "Pain relief",
  price: 6.99,
  stock: 100,
  image: "🔥"
},
{
  id: 131,
  name: "Elastic Bandage",
  category: "First Aid",
  description: "Stretchable support bandage",
  uses: "Sprains, injuries",
  price: 5.49,
  stock: 120,
  image: "🩹"
},
{
  id: 132,
  name: "First Aid Kit Basic",
  category: "First Aid",
  description: "Basic emergency kit",
  uses: "Home emergencies",
  price: 15.99,
  stock: 80,
  image: "🧰"
},
{
  id: 133,
  name: "Alcohol Swabs",
  category: "First Aid",
  description: "Disinfectant wipes",
  uses: "Cleaning skin",
  price: 3.99,
  stock: 200,
  image: "🧻"
},
{
  id: 134,
  name: "Thermometer Digital",
  category: "First Aid",
  description: "Measures body temperature",
  uses: "Fever check",
  price: 9.99,
  stock: 90,
  image: "🌡️"
},
{
  id: 135,
  name: "Scissors Medical",
  category: "First Aid",
  description: "Cutting medical supplies",
  uses: "Bandages, gauze",
  price: 4.99,
  stock: 100,
  image: "✂️"
},
{
  id: 136,
  name: "Tweezers",
  category: "First Aid",
  description: "Precision tool",
  uses: "Remove splinters",
  price: 3.49,
  stock: 120,
  image: "🔧"
},
{
  id: 137,
  name: "Disposable Gloves",
  category: "First Aid",
  description: "Protective gloves",
  uses: "Hygiene, safety",
  price: 5.99,
  stock: 150,
  image: "🧤"
},
{
  id: 138,
  name: "CPR Face Shield",
  category: "First Aid",
  description: "Emergency breathing barrier",
  uses: "CPR",
  price: 6.49,
  stock: 60,
  image: "🩺"
},
{
  id: 139,
  name: "Eye Wash Solution",
  category: "First Aid",
  description: "Cleans eyes",
  uses: "Dust, irritation",
  price: 5.49,
  stock: 80,
  image: "👁️"
},
{
  id: 140,
  name: "Saline Solution",
  category: "First Aid",
  description: "Sterile saline",
  uses: "Wound cleaning",
  price: 4.99,
  stock: 100,
  image: "💧"
},
{
  id: 141,
  name: "Hand Sanitizer",
  category: "First Aid",
  description: "Kills germs",
  uses: "Hand hygiene",
  price: 3.99,
  stock: 250,
  image: "🧴"
},
{
  id: 142,
  name: "Face Masks",
  category: "First Aid",
  description: "Protective masks",
  uses: "Infection prevention",
  price: 6.99,
  stock: 200,
  image: "😷"
},
{
  id: 143,
  name: "Instant Cold Pack",
  category: "First Aid",
  description: "Quick cold relief",
  uses: "Injury swelling",
  price: 5.49,
  stock: 120,
  image: "❄️"
},
{
  id: 144,
  name: "Wound Closure Strips",
  category: "First Aid",
  description: "Skin closure strips",
  uses: "Small cuts",
  price: 4.49,
  stock: 90,
  image: "🩹"
},
{
  id: 145,
  name: "Burn Dressing",
  category: "First Aid",
  description: "Sterile burn dressing",
  uses: "Burn treatment",
  price: 7.99,
  stock: 70,
  image: "🩹"
},
{
  id: 146,
  name: "Pain Relief Spray",
  category: "First Aid",
  description: "Topical spray",
  uses: "Muscle pain",
  price: 6.49,
  stock: 85,
  image: "🧴"
},
{
  id: 147,
  name: "Antiseptic Cream",
  category: "First Aid",
  description: "Prevents infection",
  uses: "Cuts, wounds",
  price: 5.99,
  stock: 110,
  image: "🧴"
},
{
  id: 148,
  name: "Cotton Swabs",
  category: "First Aid",
  description: "Multipurpose swabs",
  uses: "Cleaning",
  price: 2.99,
  stock: 300,
  image: "🧻"
},
{
  id: 149,
  name: "First Aid Manual",
  category: "First Aid",
  description: "Guide for emergencies",
  uses: "Learning first aid",
  price: 8.99,
  stock: 50,
  image: "📘"
},
{
  id: 150,
  name: "Emergency Blanket",
  category: "First Aid",
  description: "Thermal blanket",
  uses: "Emergency warmth",
  price: 9.49,
  stock: 60,
  image: "🧣"
},
  // Digestion
 // Digestion
{
  id: 151,
  name: "Omeprazole 20mg",
  category: "Digestion",
  description: "Proton pump inhibitor for acid reflux",
  uses: "Acid reflux, GERD, heartburn, ulcer prevention",
  price: 8.99,
  stock: 90,
  image: "💊"
},
{
  id: 152,
  name: "Pantoprazole 40mg",
  category: "Digestion",
  description: "Proton pump inhibitor",
  uses: "Acidity, GERD",
  price: 9.49,
  stock: 85,
  image: "💊"
},
{
  id: 153,
  name: "Esomeprazole 20mg",
  category: "Digestion",
  description: "Acid reducer",
  uses: "Heartburn, ulcers",
  price: 10.49,
  stock: 70,
  image: "💊"
},
{
  id: 154,
  name: "Ranitidine 150mg",
  category: "Digestion",
  description: "H2 blocker",
  uses: "Acid reflux, indigestion",
  price: 5.99,
  stock: 100,
  image: "💊"
},
{
  id: 155,
  name: "Famotidine 20mg",
  category: "Digestion",
  description: "Acid reducer",
  uses: "Heartburn, ulcers",
  price: 6.49,
  stock: 95,
  image: "💊"
},
{
  id: 156,
  name: "Antacid Tablets",
  category: "Digestion",
  description: "Quick relief for acidity",
  uses: "Heartburn, indigestion",
  price: 3.49,
  stock: 180,
  image: "💊"
},
{
  id: 157,
  name: "Gelusil Suspension",
  category: "Digestion",
  description: "Liquid antacid",
  uses: "Acidity, gas",
  price: 4.99,
  stock: 150,
  image: "💊"
},
{
  id: 158,
  name: "Simethicone 80mg",
  category: "Digestion",
  description: "Anti-gas medicine",
  uses: "Bloating, gas",
  price: 5.49,
  stock: 120,
  image: "💊"
},
{
  id: 159,
  name: "Activated Charcoal",
  category: "Digestion",
  description: "Absorbs toxins",
  uses: "Food poisoning, gas",
  price: 6.99,
  stock: 80,
  image: "💊"
},
{
  id: 160,
  name: "Loperamide 2mg",
  category: "Digestion",
  description: "Anti-diarrheal",
  uses: "Diarrhea",
  price: 5.99,
  stock: 100,
  image: "💊"
},
{
  id: 161,
  name: "ORS Powder",
  category: "Digestion",
  description: "Oral rehydration salts",
  uses: "Dehydration, diarrhea",
  price: 3.99,
  stock: 200,
  image: "💧"
},
{
  id: 162,
  name: "Domperidone 10mg",
  category: "Digestion",
  description: "Anti-nausea medicine",
  uses: "Vomiting, indigestion",
  price: 6.49,
  stock: 85,
  image: "💊"
},
{
  id: 163,
  name: "Metoclopramide 10mg",
  category: "Digestion",
  description: "Prokinetic agent",
  uses: "Nausea, gastric issues",
  price: 6.99,
  stock: 75,
  image: "💊"
},
{
  id: 164,
  name: "Psyllium Husk",
  category: "Digestion",
  description: "Fiber supplement",
  uses: "Constipation",
  price: 9.99,
  stock: 70,
  image: "💊"
},
{
  id: 165,
  name: "Lactulose Syrup",
  category: "Digestion",
  description: "Laxative",
  uses: "Constipation",
  price: 7.49,
  stock: 80,
  image: "💊"
},
{
  id: 166,
  name: "Bisacodyl Tablets",
  category: "Digestion",
  description: "Stimulant laxative",
  uses: "Constipation",
  price: 4.99,
  stock: 120,
  image: "💊"
},
{
  id: 167,
  name: "Senna Tablets",
  category: "Digestion",
  description: "Herbal laxative",
  uses: "Constipation",
  price: 5.49,
  stock: 110,
  image: "🌿"
},
{
  id: 168,
  name: "Probiotic Capsules",
  category: "Digestion",
  description: "Gut health supplement",
  uses: "Digestion, gut flora",
  price: 11.99,
  stock: 70,
  image: "💊"
},
{
  id: 169,
  name: "Digestive Enzyme Tablets",
  category: "Digestion",
  description: "Enzyme supplement",
  uses: "Indigestion",
  price: 8.49,
  stock: 90,
  image: "💊"
},
{
  id: 170,
  name: "Pancreatin Capsules",
  category: "Digestion",
  description: "Digestive enzyme",
  uses: "Digestive disorders",
  price: 9.99,
  stock: 60,
  image: "💊"
},
{
  id: 171,
  name: "Rifaximin 550mg",
  category: "Digestion",
  description: "Antibiotic for gut infections",
  uses: "Traveler’s diarrhea",
  price: 14.99,
  stock: 50,
  image: "💊"
},
{
  id: 172,
  name: "Bismuth Subsalicylate",
  category: "Digestion",
  description: "Anti-diarrheal and antacid",
  uses: "Upset stomach",
  price: 6.99,
  stock: 85,
  image: "💊"
},
{
  id: 173,
  name: "Ginger Capsules",
  category: "Digestion",
  description: "Herbal supplement",
  uses: "Nausea, digestion",
  price: 5.99,
  stock: 100,
  image: "🌿"
},
{
  id: 174,
  name: "Peppermint Oil Capsules",
  category: "Digestion",
  description: "Natural digestive aid",
  uses: "IBS, bloating",
  price: 7.99,
  stock: 75,
  image: "🌿"
},
{
  id: 175,
  name: "Aloe Vera Juice",
  category: "Digestion",
  description: "Herbal digestive tonic",
  uses: "Digestion, gut health",
  price: 6.49,
  stock: 90,
  image: "🌿"
},
{
  id: 176,
  name: "Charcoal Tablets",
  category: "Digestion",
  description: "Detox support",
  uses: "Gas, toxins",
  price: 5.49,
  stock: 80,
  image: "💊"
},
{
  id: 177,
  name: "Electrolyte Solution",
  category: "Digestion",
  description: "Hydration support",
  uses: "Dehydration",
  price: 4.99,
  stock: 120,
  image: "💧"
},
{
  id: 178,
  name: "Sucralfate 1g",
  category: "Digestion",
  description: "Ulcer protective agent",
  uses: "Stomach ulcers",
  price: 8.99,
  stock: 65,
  image: "💊"
},
{
  id: 179,
  name: "Magnesium Hydroxide",
  category: "Digestion",
  description: "Antacid and laxative",
  uses: "Acidity, constipation",
  price: 5.99,
  stock: 95,
  image: "💊"
},
{
  id: 180,
  name: "Herbal Digestive Tablets",
  category: "Digestion",
  description: "Natural digestive aid",
  uses: "Indigestion",
  price: 4.49,
  stock: 110,
  image: "🌿"
},

// Nausea
{
  id: 181,
  name: "Ondansetron 4mg",
  category: "Nausea",
  description: "Anti-nausea and anti-vomiting medication",
  uses: "Nausea, vomiting, chemotherapy-induced nausea, motion sickness",
  price: 10.99,
  stock: 60,
  image: "💊"
},
{
  id: 182,
  name: "Domperidone 10mg",
  category: "Nausea",
  description: "Dopamine antagonist",
  uses: "Nausea, vomiting, bloating",
  price: 6.49,
  stock: 85,
  image: "💊"
},
{
  id: 183,
  name: "Metoclopramide 10mg",
  category: "Nausea",
  description: "Prokinetic and antiemetic",
  uses: "Nausea, gastric disorders",
  price: 6.99,
  stock: 75,
  image: "💊"
},
{
  id: 184,
  name: "Dimenhydrinate 50mg",
  category: "Nausea",
  description: "Motion sickness medication",
  uses: "Motion sickness, dizziness",
  price: 5.99,
  stock: 90,
  image: "💊"
},
{
  id: 185,
  name: "Meclizine 25mg",
  category: "Nausea",
  description: "Antihistamine",
  uses: "Motion sickness, vertigo",
  price: 6.49,
  stock: 80,
  image: "💊"
},
{
  id: 186,
  name: "Promethazine 25mg",
  category: "Nausea",
  description: "Antiemetic and antihistamine",
  uses: "Nausea, allergy",
  price: 7.49,
  stock: 70,
  image: "💊"
},
{
  id: 187,
  name: "Prochlorperazine 5mg",
  category: "Nausea",
  description: "Antiemetic",
  uses: "Severe nausea",
  price: 8.49,
  stock: 60,
  image: "💊"
},
{
  id: 188,
  name: "Ginger Capsules",
  category: "Nausea",
  description: "Herbal remedy",
  uses: "Nausea, digestion",
  price: 5.99,
  stock: 100,
  image: "🌿"
},
{
  id: 189,
  name: "Peppermint Oil Capsules",
  category: "Nausea",
  description: "Natural anti-nausea aid",
  uses: "Indigestion, nausea",
  price: 7.99,
  stock: 75,
  image: "🌿"
},
{
  id: 190,
  name: "ORS Solution",
  category: "Nausea",
  description: "Hydration solution",
  uses: "Dehydration, vomiting",
  price: 3.99,
  stock: 200,
  image: "💧"
},
{
  id: 191,
  name: "Electrolyte Powder",
  category: "Nausea",
  description: "Rehydration support",
  uses: "Fluid loss",
  price: 4.99,
  stock: 150,
  image: "💧"
},
{
  id: 192,
  name: "Nausea Relief Syrup",
  category: "Nausea",
  description: "Liquid antiemetic",
  uses: "Vomiting, nausea",
  price: 5.99,
  stock: 120,
  image: "💊"
},
{
  id: 193,
  name: "Motion Sickness Patches",
  category: "Nausea",
  description: "Transdermal patches",
  uses: "Travel sickness",
  price: 9.99,
  stock: 65,
  image: "🩹"
},
{
  id: 194,
  name: "Scopolamine Patch",
  category: "Nausea",
  description: "Motion sickness patch",
  uses: "Travel nausea",
  price: 12.99,
  stock: 50,
  image: "🩹"
},
{
  id: 195,
  name: "Vitamin B6 Tablets",
  category: "Nausea",
  description: "Supports nausea relief",
  uses: "Pregnancy nausea",
  price: 6.49,
  stock: 90,
  image: "💊"
},
{
  id: 196,
  name: "Activated Charcoal Tablets",
  category: "Nausea",
  description: "Absorbs toxins",
  uses: "Food poisoning",
  price: 6.99,
  stock: 80,
  image: "💊"
},
{
  id: 197,
  name: "Digestive Relief Tablets",
  category: "Nausea",
  description: "Soothing digestive aid",
  uses: "Upset stomach",
  price: 5.49,
  stock: 110,
  image: "💊"
},
{
  id: 198,
  name: "Herbal Anti-Nausea Tea",
  category: "Nausea",
  description: "Natural remedy",
  uses: "Nausea relief",
  price: 4.99,
  stock: 100,
  image: "🌿"
},
{
  id: 199,
  name: "Anti-Nausea Lozenges",
  category: "Nausea",
  description: "Soothing lozenges",
  uses: "Travel sickness",
  price: 3.99,
  stock: 130,
  image: "💊"
},
{
  id: 200,
  name: "Nausea Relief Spray",
  category: "Nausea",
  description: "Fast-acting spray",
  uses: "Instant nausea relief",
  price: 6.99,
  stock: 85,
  image: "💊"
},

// Fungal / Antifungal
{
  id: 201,
  name: "Clotrimazole Cream 1%",
  category: "Fungal",
  description: "Antifungal cream for skin infections",
  uses: "Athlete's foot, ringworm, jock itch, yeast infections",
  price: 6.99,
  stock: 90,
  image: "🧴"
},
{
  id: 202,
  name: "Miconazole Cream 2%",
  category: "Fungal",
  description: "Topical antifungal",
  uses: "Skin infections, yeast infections",
  price: 7.49,
  stock: 80,
  image: "🧴"
},
{
  id: 203,
  name: "Ketoconazole Cream 2%",
  category: "Fungal",
  description: "Broad-spectrum antifungal",
  uses: "Dandruff, fungal infections",
  price: 8.99,
  stock: 75,
  image: "🧴"
},
{
  id: 204,
  name: "Terbinafine Cream 1%",
  category: "Fungal",
  description: "Antifungal agent",
  uses: "Athlete’s foot, ringworm",
  price: 9.49,
  stock: 70,
  image: "🧴"
},
{
  id: 205,
  name: "Fluconazole 150mg",
  category: "Fungal",
  description: "Oral antifungal tablet",
  uses: "Yeast infections",
  price: 10.99,
  stock: 60,
  image: "💊"
},
{
  id: 206,
  name: "Itraconazole 100mg",
  category: "Fungal",
  description: "Systemic antifungal",
  uses: "Severe fungal infections",
  price: 12.49,
  stock: 50,
  image: "💊"
},
{
  id: 207,
  name: "Nystatin Oral Suspension",
  category: "Fungal",
  description: "Antifungal liquid",
  uses: "Oral thrush",
  price: 8.49,
  stock: 65,
  image: "💊"
},
{
  id: 208,
  name: "Amphotericin B",
  category: "Fungal",
  description: "Strong antifungal",
  uses: "Serious fungal infections",
  price: 15.99,
  stock: 40,
  image: "💊"
},
{
  id: 209,
  name: "Griseofulvin 500mg",
  category: "Fungal",
  description: "Antifungal tablet",
  uses: "Skin and nail infections",
  price: 9.99,
  stock: 55,
  image: "💊"
},
{
  id: 210,
  name: "Ciclopirox Cream",
  category: "Fungal",
  description: "Topical antifungal",
  uses: "Skin infections",
  price: 7.99,
  stock: 70,
  image: "🧴"
},
{
  id: 211,
  name: "Tolnaftate Spray",
  category: "Fungal",
  description: "Antifungal spray",
  uses: "Athlete’s foot",
  price: 6.99,
  stock: 85,
  image: "🧴"
},
{
  id: 212,
  name: "Econazole Cream",
  category: "Fungal",
  description: "Antifungal cream",
  uses: "Skin fungal infections",
  price: 7.49,
  stock: 80,
  image: "🧴"
},
{
  id: 213,
  name: "Butenafine Cream",
  category: "Fungal",
  description: "Topical antifungal",
  uses: "Ringworm, athlete’s foot",
  price: 8.49,
  stock: 75,
  image: "🧴"
},
{
  id: 214,
  name: "Luliconazole Cream",
  category: "Fungal",
  description: "Advanced antifungal",
  uses: "Skin infections",
  price: 9.99,
  stock: 60,
  image: "🧴"
},
{
  id: 215,
  name: "Naftifine Gel",
  category: "Fungal",
  description: "Topical antifungal gel",
  uses: "Athlete’s foot",
  price: 8.99,
  stock: 65,
  image: "🧴"
},
{
  id: 216,
  name: "Selenium Sulfide Shampoo",
  category: "Fungal",
  description: "Antifungal shampoo",
  uses: "Dandruff, scalp infection",
  price: 7.99,
  stock: 90,
  image: "🧴"
},
{
  id: 217,
  name: "Coal Tar Shampoo",
  category: "Fungal",
  description: "Scalp treatment",
  uses: "Dandruff, fungal scalp",
  price: 6.99,
  stock: 85,
  image: "🧴"
},
{
  id: 218,
  name: "Zinc Pyrithione Shampoo",
  category: "Fungal",
  description: "Anti-dandruff shampoo",
  uses: "Fungal scalp infections",
  price: 6.49,
  stock: 95,
  image: "🧴"
},
{
  id: 219,
  name: "Antifungal Powder",
  category: "Fungal",
  description: "Topical powder",
  uses: "Sweat-related fungal infections",
  price: 5.99,
  stock: 100,
  image: "🧴"
},
{
  id: 220,
  name: "Antifungal Soap",
  category: "Fungal",
  description: "Medicated soap",
  uses: "Skin hygiene, infections",
  price: 4.99,
  stock: 110,
  image: "🧼"
},

];

const healthTips = [
  { title: 'Stay Hydrated', content: 'Drink at least 8 glasses of water daily to maintain good health.', category: 'General' },
  { title: 'Get Enough Sleep', content: 'Aim for 7-9 hours of sleep per night for optimal health.', category: 'General' },
  { title: 'Exercise Regularly', content: '30 minutes of moderate exercise daily can improve your health.', category: 'Fitness' },
  { title: 'Eat Balanced Diet', content: 'Include fruits, vegetables, and whole grains in your diet.', category: 'Nutrition' },
  { title: 'Wash Hands Frequently', content: 'Proper hand hygiene prevents many infections.', category: 'Hygiene' },
  { title: 'Manage Stress', content: 'Practice meditation or deep breathing to reduce stress levels.', category: 'Mental Health' },
  { title: 'Regular Check-ups', content: 'Visit your doctor for regular health screenings.', category: 'Prevention' },
  { title: 'Limit Sugar Intake', content: 'Reduce consumption of sugary foods and drinks.', category: 'Nutrition' },
];

export const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Medicine.deleteMany({});
    await HealthTip.deleteMany({});
    console.log('Cleared existing data');

    // Seed medicines
    await Medicine.insertMany(medicinesData);
    console.log('Seeded medicines');

    // Seed health tips
    await HealthTip.insertMany(healthTips);
    console.log('Seeded health tips');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
