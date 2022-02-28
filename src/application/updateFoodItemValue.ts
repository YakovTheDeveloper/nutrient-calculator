import { FoodItem } from "../domain/foodItem"
// import { useStore } from "../services/store"
import { useFoodSetStorage } from "../services/storeAdapter"
import { updateValueOfFoodItem } from "../domain/foodSet"
import { useCollectionStorage } from "../services/storeAdapter/collectionStorage"
import { FoodSetStorageService, CollectionStorageService } from "./ports"
import { CollectionItem } from "../domain/collection/CollectionItem"
import { updateValueOfFoodItemWithinCollection } from "../domain/collection/Collection"

export function useUpdateFoodItemValue() {

	const storage: FoodSetStorageService = useFoodSetStorage()

	function updateFoodItemValue(foodItemToUpdate: FoodItem, value: number) {
		
		const updatedFoodSet = updateValueOfFoodItem(storage.foodSet, foodItemToUpdate, value)
		storage.updateFoodItemValue(updatedFoodSet)

	}
	return { updateFoodItemValue }
}



export function useUpdateFoodItemValueWithinCollection() {

	const storage: CollectionStorageService = useCollectionStorage()

	function updateFoodItemValueWithinCollection(collectionItem: CollectionItem, foodItemToUpdate: FoodItem, value: number) {
		

		const updatedCollection = updateValueOfFoodItemWithinCollection(
			storage.collection,
			collectionItem,
			foodItemToUpdate,
			value
		)
		
		storage.updateCollection(updatedCollection)
		console.log("Collection", storage.collection)

	}
	return { updateFoodItemValueWithinCollection }
}

