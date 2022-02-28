import { OneGroupOfNutrientGroups } from "../nutrientGroups"
import { FoodItem } from "../foodItem"
import { NutrientData } from "../nutrientGroups"

export type SearchByNutrient = {
	nutrientName: string
	nutrientGroupName: OneGroupOfNutrientGroups
} | null


export function findNutrientOfFoodItemThatCurrentlyInSearch(
	searchObject: SearchByNutrient,
	foodItem: FoodItem
): NutrientData | null {
	if (searchObject === null) return null

	const identifiedGroup = foodItem.nutrientGroups[searchObject.nutrientGroupName]
	const identifiedNutrient = identifiedGroup[searchObject.nutrientName]

	return identifiedNutrient
}