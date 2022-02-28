import { calcTotalNutrients } from "../domain/totalNutrients"
import { useCollectionStorage } from "../services/storeAdapter/collectionStorage"
import { useFoodSetStorage } from "../services/storeAdapter"
import { useTotalNutrientsStorage } from "../services/storeAdapter/totalNutrientsStorage"
import { CollectionItem } from "../domain/collection/CollectionItem"
import { FoodSet } from "../domain/foodSet"
import { Collection } from "../domain/collection/Collection"
import { updateNutrientsOfFoodItemWithinCollection } from "../domain/collection/Collection"

export function useUpdateNutrientTable() {

	const storage = useFoodSetStorage()
	const { updateTotalNutrients } = useTotalNutrientsStorage()

	function updateNutrientTable() {
		const total = calcTotalNutrients(storage.foodSet)
		updateTotalNutrients(total)
	}

	return { updateNutrientTable }
}



export function useUpdateNutrientsWithinCollection() {

	const storage = useCollectionStorage()

	function updateNutrientsWithinCollection(collectionItemToUpdate: CollectionItem) {
		
		const updatedCollection = updateNutrientsOfFoodItemWithinCollection(
			storage.collection,
			collectionItemToUpdate
		)

		storage.updateCollection(updatedCollection)
	}
	return { updateNutrientsWithinCollection }
}

