import { FoodSet } from "../domain/foodSet"
import { useCollectionStorage } from "../services/storeAdapter/collectionStorage"
import { CollectionStorageService } from "./ports"
import { createCollectionItem } from "../domain/collection/CollectionItem"
import { addFoodSetToCollection } from "../domain/collection/Collection"
import { NutrientGroups } from "../domain/nutrientGroups"

export function useSaveToCollection() {

	const storage: CollectionStorageService = useCollectionStorage()

	function addToCollection(
		foodSetName = "",
		foodSet: FoodSet,
		totalNutrients: NutrientGroups
	) {
		const updatedCollection = addFoodSetToCollection(
			storage.collection,
			foodSet,
			foodSetName,
			totalNutrients
		)
		storage.updateCollection(updatedCollection)
	}
	return { addToCollection }
}