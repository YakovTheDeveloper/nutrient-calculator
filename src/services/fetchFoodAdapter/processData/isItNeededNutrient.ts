export function isItNeededNutrient(nutrientName: string, unitName:string) {
	if (
		nutrientName === "Retinol" ||
		nutrientName === "Vitamin A, IU" ||
		nutrientName === "Carotene, alpha" ||
		nutrientName === "Carotene, beta" ||
		nutrientName === "Vitamin D (D2 + D3)" ||
		nutrientName === "Vitamin E (alpha-tocopherol)" ||
		nutrientName === "Vitamin E, added" ||
		nutrientName === "Vitamin K (phylloquinone)" ||
		nutrientName === "Vitamin K (Dihydrophylloquinone)" ||
		nutrientName === "Vitamin K (Menaquinone-4)" ||
		nutrientName === "Vitamin C, total ascorbic acid" ||
		nutrientName === "Protein" ||
		nutrientName === "Carbohydrate, by difference" ||
		nutrientName === "Fatty acids, total saturated" ||
		nutrientName === "Total lipid (fat)" ||
		nutrientName === "Fiber, total dietary" ||
		(nutrientName === "Energy" && unitName !== "kJ")  ||
		nutrientName === "Calcium, Ca" ||
		nutrientName === "Iron, Fe" ||
		nutrientName === "Magnesium, Mg" ||
		nutrientName === "Phosphorus, P" ||
		nutrientName === "Potassium, K" ||
		nutrientName === "Sodium, Na" ||
		nutrientName === "Zinc, Zn" ||
		nutrientName === "Copper, Cu" ||
		nutrientName === "Manganese, Mn" ||
		nutrientName === "Selenium, Se" ||
		nutrientName === "Thiamin" ||
		nutrientName === "Riboflavin" ||
		nutrientName === "Niacin" ||
		nutrientName === "Choline, total" ||
		nutrientName === "Pantothenic acid" ||
		nutrientName === "Vitamin B-6" ||
		nutrientName === "Folate, total" ||
		nutrientName === "Vitamin B-12" ||
		nutrientName === "Fatty acids, total monounsaturated" ||
		nutrientName === "Fatty acids, total polyunsaturated" 
	) return true
}

