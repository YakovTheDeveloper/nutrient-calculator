import { NutrientGroups, NutrientGroup } from "./nutrientGroups"
import { FoodSet } from "./foodSet"
import { addNutrientGroupValuesToTotalGroup } from "./nutrientGroups"

export type NameValuePercent = [
	nutrientName: string,
	nutrientValue: number,
	nutrientPercent: number,
]

export const nutrientsDailyIntake: any = {
	"Protein": 75, "Fats": 84, "Carbs": 310, "Vitamin A": 900, "Vitamin D": 15, "Vitamin E": 14600, "Vitamin K": 120, "Vitamin C": 90000, "Vitamin B1": 1200, "Vitamin B2": 1300, "Vitamin B3": 16000, "Vitamin B4": 500000, "Vitamin B5": 5000, "Vitamin B6": 1300, "Vitamin B9": 400, "Vitamin B12": 2.4, "Calcium": 1000000, "Iron": 10000, "Magnesium": 400000, "Phosphorus": 700000, "Potassium": 4700000, "Sodium": 1300000, "Zinc": 11000, "Copper": 900, "Manganese": 2300, "Selenium": 55, "Fiber": 25
}
export const nutrientsDailyIntakeLowerCase: any = {
	"protein": 75, "fats": 84, "carbs": 310, "vitamin a": 900, "vitamin d": 15, "vitamin e": 14600, "vitamin k": 120, "vitamin c": 90000, "vitamin b1": 1200, "vitamin b2": 1300, "vitamin b3": 16000, "vitamin b4": 500000, "vitamin b5": 5000, "vitamin b6": 1300, "vitamin b9": 400, "vitamin b12": 2.4, "calcium": 1000000, "iron": 10000, "magnesium": 400000, "phosphorus": 700000, "potassium": 4700000, "sodium": 1300000, "zinc": 11000, "copper": 900, "manganese": 2300, "selenium": 55, "fiber": 25
}

export type ITotalNutrients = { "Protein": number, "Fats": number, "Carbs": number, "Vitamin A": number, "Vitamin D": number, "Vitamin E": number, "Vitamin K": number, "Vitamin C": number, "Vitamin B1": number, "Vitamin B2": number, "Vitamin B3": number, "Vitamin B4": number, "Vitamin B5": number, "Vitamin B6": number, "Vitamin B9": number, "Vitamin B12": number, "Calcium": number, "Iron": number, "Magnesium": number, "Phosphorus": number, "Potassium": number, "Sodium": number, "Zinc": number, "Copper": number, "Manganese": number, "Selenium": number, "Fiber": number }

export function calcTotalNutrients(foodSet: FoodSet): NutrientGroups {

	const mainNutrients: NutrientGroup = {}
	const minerals: NutrientGroup = {}
	const vitaminsB: NutrientGroup = {}
	const vitaminsACDEK: NutrientGroup = {}
	const restNutrients: NutrientGroup = {}

	foodSet.forEach(({ nutrientGroups, foodItemValue }) => {

		addNutrientGroupValuesToTotalGroup(mainNutrients, nutrientGroups.mainNutrients, foodItemValue)
		addNutrientGroupValuesToTotalGroup(minerals, nutrientGroups.minerals, foodItemValue)
		addNutrientGroupValuesToTotalGroup(vitaminsB, nutrientGroups.vitaminsB, foodItemValue)
		addNutrientGroupValuesToTotalGroup(vitaminsACDEK, nutrientGroups.vitaminsACDEK, foodItemValue)
		addNutrientGroupValuesToTotalGroup(restNutrients, nutrientGroups.restNutrients, foodItemValue)

	})

	return {
		mainNutrients,
		minerals,
		vitaminsB,
		vitaminsACDEK,
		restNutrients,
	}
}