
import { useAppSelector, useAppDispatch } from "../../hooks"
import {
	updateCollection as updateCollectionAction
} from "../../store/features/collectionOfSetsSlice"
import { Collection } from "../../domain/collection/Collection"
import { CollectionItem } from "../../domain/collection/CollectionItem"
import { CollectionStorageService } from "../../application/ports"

export function useCollectionStorage(): CollectionStorageService {
	const collection = useAppSelector((state) => state.collectionOfSets.collection)
	const dispatch = useAppDispatch()

	// const addToCollection = (payload: CollectionItem) => {
	// 	return dispatch(addToCollectionAction(payload))
	// }
	// const deleteFromCollection = (payload: Collection) => {
	// 	return dispatch(updateCollection(payload))
	// }
	// const updateCollectionItemName = (payload: Collection) => {
	// 	return dispatch(updateCollection(payload))
	// }
	// const updateFoodItemValueWithinCollection = (payload: Collection) => {
	// 	return dispatch(updateCollection(payload))
	// }
	// const updateTotalNutrientsWithinCollection = (payload: Collection) => {
	// 	return dispatch(updateCollection(payload))
	// }

	const updateCollection = (payload: Collection) => {
		return dispatch(updateCollectionAction(payload))
	}


	return {
		collection,
		updateCollection
		// addToCollection,
		// deleteFromCollection,
		// updateFoodItemValueWithinCollection,
		// updateTotalNutrientsWithinCollection,
		// updateCollectionItemName
	}
}