export function multiplyNutrientAndItemValues(nutrientValue: number, itemValue: number): number {
	return +(nutrientValue / 100 * itemValue).toFixed(2)
}

export type NoDailyNormMsg = "No daily norm for that nutrient"

export function calcPercentsBasedOnDailyNorms(
	nutrientName: string,
	nutrientValue: number
): number | NoDailyNormMsg {
	
	const normValue = nutrientsDailyNorm[nutrientName]
	if (!normValue) return "No daily norm for that nutrient"

	const percent = +(nutrientValue / normValue * 100).toFixed()
	return percent
}

export const nutrientsDailyNorm: any = {
	"Protein": 75,
	"Total lipid (fat)": 84,
	"Carbohydrate": 310,
	"Energy": 2300,
	"Fiber": 25,
	"Vitamin A": 900,
	"Vitamin C": 90,
	"Vitamin D (D2 + D3)": 15,
	"Vitamin E": 14.6,
	"Vitamin K": 120,
	"B1, Thiamin": 1.2,
	"B2, Riboflavin": 1.3,
	"B3, Niacin": 16,
	"B4, Choline": 500,
	"B5, Pantothenic acid": 5,
	"B6, Pyridoxine": 1.3,
	"B9, Folate": 400,
	"B12, Cobalamin": 2.4,
	"Calcium, Ca": 1000,
	"Iron, Fe": 10,
	"Magnesium, Mg": 400,
	"Phosphorus, P": 700,
	"Potassium, K": 4700,
	"Sodium, Na": 1300,
	"Zinc, Zn": 11,
	"Copper, Cu": 0.9,
	"Manganese, Mn": 2.3,
	"Selenium, Se": 55,
	"Carotene, alpha": 5000,
	"Carotene, beta": 5000,
}
