import { getAllDiseases } from "../data/diseases";
import { medicinesData } from "../data/medicines";
import { allergiesData } from "../data/allergies";
import { surgeriesData } from "../data/surgeries";

export const suggestions = {
  previousDiseases: getAllDiseases(),
  currentMedications: medicinesData.map(m => m.name),
  allergies: allergiesData,
  pastSurgeries: surgeriesData
};