import { NutrientGroups } from "./nutrientGroups"

export type FoodItem = {
	foodItemName: string
	foodItemId: number
	nutrientGroups: NutrientGroups
	foodItemValue: number
}

export type FoodItemIdAndNewValue = {
	id: number
	value: number
}