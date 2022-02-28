import { NutrientGroup } from "../../../domain/nutrientGroups"
import { NutrientGroups } from "../../../domain/nutrientGroups"

export const mainNutrientsObj: NutrientGroup = {
	"Energy": {
		nutrientName: "Energy",
		value: 0,
		unitName: "kcal"
	},
	"Protein": {
		nutrientName: "Protein",
		value: 0,
		unitName: "g"
	},
	"Total lipid (fat)": {
		nutrientName: "Total lipid (fat)",
		value: 0,
		unitName: "g"
	},
	"Carbohydrate": {
		nutrientName: "Carbohydrate",
		value: 0,
		unitName: "g"
	},
	"Fiber": {
		nutrientName: "Fiber",
		value: 0,
		unitName: "g"
	},
	"Fatty acids, saturated": {
		nutrientName: "Fatty acids, saturated",
		value: 0,
		unitName: "g"
	},
	"Fatty acids, monounsaturated": {
		nutrientName: "Fatty acids, monounsaturated",
		value: 0,
		unitName: "g"
	},
	"Fatty acids, polyunsaturated": {
		nutrientName: "Fatty acids, polyunsaturated",
		value: 0,
		unitName: "g"
	},
}


export const mineralsObj: NutrientGroup = {
	"Calcium, Ca": {
		nutrientName: "Calcium, Ca",
		value: 0,
		unitName: "mg"
	},
	"Iron, Fe": {
		nutrientName: "Iron, Fe",
		value: 0,
		unitName: "mg"
	},
	"Magnesium, Mg": {
		nutrientName: "Magnesium, Mg",
		value: 0,
		unitName: "mg"
	},
	"Phosphorus, P": {
		nutrientName: "Phosphorus, P",
		value: 0,
		unitName: "mg"
	},
	"Potassium, K": {
		nutrientName: "Potassium, K",
		value: 0,
		unitName: "mg"
	},
	"Sodium, Na": {
		nutrientName: "Sodium, Na",
		value: 0,
		unitName: "mg"
	},
	"Zinc, Zn": {
		nutrientName: "Zinc, Zn",
		value: 0,
		unitName: "mg"
	},
	"Copper, Cu": {
		nutrientName: "Copper, Cu",
		value: 0,
		unitName: "mg"
	},
	"Manganese, Mn": {
		nutrientName: "Manganese, Mn",
		value: 0,
		unitName: "mg"
	},
	"Selenium, Se": {
		nutrientName: "Selenium, Se",
		value: 0,
		unitName: "ug"
	},
}
export const vitaminsBObj: NutrientGroup = {
	"B1, Thiamin": {
		nutrientName: "B1, Thiamin",
		value: 0,
		unitName: "kcal"
	},
	"B2, Riboflavin": {
		nutrientName: "B2, Riboflavin",
		value: 0,
		unitName: "g"
	},
	"B3, Niacin": {
		nutrientName: "B3, Niacin",
		value: 0,
		unitName: "g"
	},
	"B4, Choline": {
		nutrientName: "B4, Choline",
		value: 0,
		unitName: "g"
	},
	"B5, Pantothenic acid": {
		nutrientName: "B5, Pantothenic acid",
		value: 0,
		unitName: "g"
	},
	"B6, Pyridoxine": {
		nutrientName: "B6, Pyridoxine",
		value: 0,
		unitName: "g"
	},
	"B9, Folate": {
		nutrientName: "B9, Folate",
		value: 0,
		unitName: "ug"
	},
	"B12, Cobalamin": {
		nutrientName: "B12, Cobalamin",
		value: 0,
		unitName: "ug"
	},
}
export const vitaminsACDEKObj: NutrientGroup = {
	"Vitamin A": {
		nutrientName: "Vitamin A",
		value: 0,
		unitName: "iu"
	},
	"Vitamin C": {
		nutrientName: "Vitamin C",
		value: 0,
		unitName: "mg"
	},
	"Vitamin D (D2 + D3)": {
		nutrientName: "Vitamin D (D2 + D3)",
		value: 0,
		unitName: "ug"
	},
	"Vitamin E": {
		nutrientName: "Vitamin E",
		value: 0,
		unitName: "mg"
	},
	"Vitamin K": {
		nutrientName: "Vitamin K",
		value: 0,
		unitName: "ug"
	},
}
export const restNutrientsObj: NutrientGroup = {
	"Retinol": {
		nutrientName: "Retinol",
		value: 0,
		unitName: "ug"
	},
	"Carotene, beta": {
		nutrientName: "Carotene, beta",
		value: 0,
		unitName: "ug"
	},
	"Carotene, alpha": {
		nutrientName: "Carotene, alpha",
		value: 0,
		unitName: "ug"
	},
}

export const defaultEmptyGroups: NutrientGroups = {
	mainNutrients: mainNutrientsObj,
	minerals: mineralsObj,
	vitaminsB: vitaminsBObj,
	vitaminsACDEK: vitaminsACDEKObj,
	restNutrients: restNutrientsObj
}
