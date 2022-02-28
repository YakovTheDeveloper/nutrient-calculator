export function identifyNutrientGroup(nutrientName: string): string {
	if (nutrientName.includes("B")) return "vitaminsB"

	const vitaminsGroupB = [
		"Thiamin",
		"Riboflavin",
		"Niacin",
		"Choline, total",
		"Pantothenic acid",
		"Vitamin B-6",
		"Folate, total",
		"Vitamin B-12"
	]
	if(vitaminsGroupB.includes(nutrientName)) return "vitaminsB"

	const minerals = [
		"Calcium, Ca",
		"Iron, Fe",
		"Magnesium, Mg",
		"Phosphorus, P",
		"Potassium, K",
		"Sodium, Na",
		"Zinc, Zn",
		"Copper, Cu",
		"Manganese, Mn",
		"Selenium, Se",
	]
	if(minerals.includes(nutrientName)) return "minerals"


	const vitaminsACDEK = [
		"Vitamin A, IU",
		"Vitamin C, total ascorbic acid",
		"Vitamin D (D2 + D3)",
		"Vitamin E (alpha-tocopherol)",
		"Vitamin E, added",
		"Vitamin K (phylloquinone)",
		"Vitamin K (Dihydrophylloquinone)",
		"Vitamin K (Menaquinone-4)",
	]
	if(vitaminsACDEK.includes(nutrientName)) return "vitaminsACDEK"



	if (
		nutrientName === "Energy" ||
		nutrientName === "Protein" ||
		nutrientName === "Carbohydrate, by difference" ||
		nutrientName === "Total lipid (fat)" ||
		nutrientName === "Fiber, total dietary" ||
		nutrientName === "Fatty acids, total saturated" ||
		nutrientName === "Fatty acids, total monounsaturated" ||
		nutrientName === "Fatty acids, total polyunsaturated" 
	) return "mainNutrients"

	else return "restNutrients"
}