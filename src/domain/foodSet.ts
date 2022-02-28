import { FoodItem } from "./foodItem"

export type FoodSet = FoodItem[]

export function contains(foodSet: FoodSet, foodItemToCheck: FoodItem): boolean {

	return foodSet.some(({ foodItemId }) => foodItemId === foodItemToCheck.foodItemId)

}

export function addFoodItem(foodSet: FoodSet, foodItemToAdd: FoodItem): FoodSet {

	return !contains(foodSet, foodItemToAdd) ? [...foodSet, foodItemToAdd] : foodSet

}

export function deleteFromFoodSet(foodSet: FoodSet, foodItemToDelete: FoodItem): FoodSet {

	return foodSet.filter(({ foodItemId }) => foodItemId !== foodItemToDelete.foodItemId)

}

export function updateValueOfFoodItem(
	foodSet: FoodSet,
	foodItemToUpdate: FoodItem,
	inputValue: number
): FoodSet {

	return foodSet.map(setItem => {
		if (setItem.foodItemId === foodItemToUpdate.foodItemId) return { ...setItem, foodItemValue: inputValue }
		return setItem
	})
}









