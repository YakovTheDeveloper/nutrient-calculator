import { CollectionStorageService } from "../ports"
import { useCollectionStorage } from "../../services/storeAdapter/collectionStorage"
import { CollectionItem } from "../../domain/collection/CollectionItem"
import { changeCollectionItemName as changeName } from "../../domain/collection/CollectionItem"


export const useChangeCollectionItemName = () => {
	const storage: CollectionStorageService  = useCollectionStorage()

	function changeCollectionItemName(newName: string, collectionItem: CollectionItem) {
		const updatedCollection = changeName(
			storage.collection,
			collectionItem,
			newName
		)
		storage.updateCollection(updatedCollection)
	}
	
	return { changeCollectionItemName }
}

