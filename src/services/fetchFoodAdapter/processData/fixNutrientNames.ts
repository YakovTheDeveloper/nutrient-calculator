export function fixNutrientNames(nutrientName: string): string {

	if (nutrientName === "Fiber, total dietary") return "Fiber"
	if (nutrientName === "Carbohydrate, by difference") return "Carbohydrate"

	if (nutrientName === "Vitamin C, total ascorbic acid") return "Vitamin C"
	if (nutrientName === "Vitamin A, IU") return "Vitamin A"

	if (nutrientName === "Thiamin") return "B1, Thiamin"
	if (nutrientName === "Riboflavin") return "B2, Riboflavin"
	if (nutrientName === "Niacin") return "B3, Niacin"
	if (nutrientName === "Choline, total") return "B4, Choline"
	if (nutrientName === "Pantothenic acid") return "B5, Pantothenic acid"
	if (nutrientName === "Vitamin B-6") return "B6, Pyridoxine"
	if (nutrientName === "Folate, total") return "B9, Folate"
	if (nutrientName === "Vitamin B-12") return "B12, Cobalamin"

	if (nutrientName === "Fatty acids, total monounsaturated") return "Fatty acids, monounsaturated"
	if (nutrientName === "Fatty acids, total saturated") return "Fatty acids, saturated"
	if (nutrientName === "Fatty acids, total polyunsaturated") return "Fatty acids, polyunsaturated"

	else return nutrientName
}
