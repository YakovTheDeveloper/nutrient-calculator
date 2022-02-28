import { FoodItem } from "../../../domain/foodItem"
import { isItNeededNutrient } from "./isItNeededNutrient"
import { fixNutrientNames } from "./fixNutrientNames"
import { identifyNutrientGroup } from "./identifyNutrientGroup"
import { NutrientGroups } from "../../../domain/nutrientGroups"
import { sumThenDeleteExtraVitaminK, sumThenDeleteExtraVitaminE } from "./sumThenDeleteExtra"
import { deepCopyObj } from "../../../utils/deepCopyObj"

import { mainNutrientsObj, mineralsObj, vitaminsBObj, vitaminsACDEKObj, restNutrientsObj } from "./dataObjects"

export function processData(foodData: any) {
	const arrFilteredByNutrientLength = foodData.filter((obj: any) => {
		return obj.foodNutrients.length >= 40
		// return obj.foodNutrients.length >= 65
	})


	const arrWithNeededProps = arrFilteredByNutrientLength.map((obj: any): FoodItem => {

		const mainNutrients = deepCopyObj(mainNutrientsObj)
		const minerals = deepCopyObj(mineralsObj)
		const vitaminsB = deepCopyObj(vitaminsBObj)
		const vitaminsACDEK = deepCopyObj(vitaminsACDEKObj)
		const restNutrients = deepCopyObj(restNutrientsObj)
		console.log("foodClass", obj.foodClass)
		obj.foodNutrients.forEach((nutrientObj: any) => {

			const isNeeded = isItNeededNutrient(nutrientObj.nutrientName, nutrientObj.unitName)
			if (!isNeeded) return

			const nutrientGroup = identifyNutrientGroup(nutrientObj.nutrientName)
			const nutrientName = fixNutrientNames(nutrientObj.nutrientName)
			const nutrientObject = {
				nutrientName,
				value: nutrientObj.value,
				unitName: nutrientObj.unitName.toLowerCase()
			}

			if (nutrientGroup === "vitaminsB")
				vitaminsB[nutrientName] = nutrientObject

			if (nutrientGroup === "vitaminsACDEK")
				vitaminsACDEK[nutrientName] = nutrientObject

			if (nutrientGroup === "minerals")
				minerals[nutrientName] = nutrientObject

			if (nutrientGroup === "mainNutrients")
				mainNutrients[nutrientName] = nutrientObject

			if (nutrientGroup === "restNutrients")
				restNutrients[nutrientName] = nutrientObject
		})



		sumThenDeleteExtraVitaminK(vitaminsACDEK)
		sumThenDeleteExtraVitaminE(vitaminsACDEK)

		const nutrientGroups: NutrientGroups = {
			mainNutrients,
			minerals,
			vitaminsB,
			vitaminsACDEK,
			restNutrients
		}

		return {
			foodItemName: obj.description,
			foodItemId: obj.fdcId,
			nutrientGroups: nutrientGroups,
			foodItemValue: 0
		}
	})

	return arrWithNeededProps
}