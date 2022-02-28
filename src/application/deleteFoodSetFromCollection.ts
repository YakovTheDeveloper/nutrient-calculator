import { CollectionItem } from "../domain/collection/CollectionItem"
import { useCollectionStorage } from "../services/storeAdapter/collectionStorage"
import { CollectionStorageService } from "./ports"

export function useDeleteFoodSetFromCollection() {

	const storage: CollectionStorageService = useCollectionStorage()

	function deleteFoodSetFromCollection(savedFoodSet: CollectionItem) {
		
		const foodSetToDeleteId = savedFoodSet.id
		const updatedCollection = storage.collection.filter(savedFoodSet => {
			return savedFoodSet.id !== foodSetToDeleteId
		})
		storage.updateCollection(updatedCollection)
	}
	return { deleteFoodSetFromCollection }
}