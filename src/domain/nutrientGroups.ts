import { multiplyNutrientAndItemValues } from "./nutrientValue"

// export type NutrientGroups = {
// 	mainNutrients: NutrientGroup
// 	minerals: NutrientGroup
// 	vitaminsB: NutrientGroup
// 	vitaminsACDEK: NutrientGroup
// 	restNutrients: NutrientGroup
// }

export type OneGroupOfNutrientGroups = keyof NutrientGroups


export type NutrientGroups = {
	[groupName in "mainNutrients"
	| "minerals"
	| "vitaminsB"
	| "vitaminsACDEK"
	| "restNutrients"]: NutrientGroup
}


// | "minerals"
// | "vitaminsB"
// | "vitaminsACDEK"
// | "restNutrients"

export type NutrientGroup = {
	[key: string]: NutrientData
}


export type NutrientData = {
	nutrientName: string
	value: number
	unitName: string
}


export function addNutrientGroupValuesToTotalGroup(
	totalSumGroup: NutrientGroup,
	foodItemGroup: NutrientGroup,
	foodItemValue: number
): void {

	for (const [nutrientName, nutrientData] of Object.entries(foodItemGroup)) {

		const nutrientMultipliedValue = multiplyNutrientAndItemValues(nutrientData.value, foodItemValue)

		const existingValue = totalSumGroup[nutrientName]
			? totalSumGroup[nutrientName].value
			: false

		const accumulatedValue = existingValue
			? +(existingValue + nutrientMultipliedValue).toFixed(2)
			: nutrientMultipliedValue

		totalSumGroup[nutrientName] = {
			nutrientName,
			value: accumulatedValue,
			unitName: nutrientData.unitName
		}
	}
}