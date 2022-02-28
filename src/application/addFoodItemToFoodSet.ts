import { FoodItem } from "../domain/foodItem"
import { useFoodSetStorage } from "../services/storeAdapter"
import { useCollectionStorage } from "../services/storeAdapter/collectionStorage"
import { FoodSetStorageService, CollectionStorageService } from "./ports"
import { CollectionItem } from "../domain/collection/CollectionItem"
import { addFoodItemToCollectionFoodSet } from "../domain/collection/CollectionItem"
import { contains } from "../domain/foodSet"


export const useAddFoodItemToFoodSet = () => {
	const mainPageFoodSetStorage: FoodSetStorageService = useFoodSetStorage()
	const collectionFoodSetStorage: CollectionStorageService = useCollectionStorage()

	function addFoodItemToFoodSet(item: FoodItem) {
		const isCardInFoodSet = contains(mainPageFoodSetStorage.foodSet, item)
		if (!isCardInFoodSet) mainPageFoodSetStorage.addToFoodSet(item)
	}

	function addFoodItemToFoodSetWithinCollection(foodTtem: FoodItem, collectionItem: CollectionItem) {
		const collection = collectionFoodSetStorage.collection

		const updatedCollection = addFoodItemToCollectionFoodSet(
			collection,
			collectionItem,
			foodTtem
		)
		// console.log("current", collection, "updated", updatedCollection)
		collectionFoodSetStorage.updateCollection(updatedCollection)
	}
	return { addFoodItemToFoodSet, addFoodItemToFoodSetWithinCollection }
}

