import {
	FoodSetStorageService,
	SearchStorageService,
	CollectionStorageService
} from "../application/ports"
import { NutrientGroups } from "../domain/nutrientGroups"

import { Collection } from "../domain/collection/Collection"
import { CollectionItem } from "../domain/collection/CollectionItem"
import { useAppSelector, useAppDispatch } from "../hooks"
import { addFood, changeFoodValue } from "../store/features/foodSetSlice"
import { setText, setNutrientSelection } from "../store/features/searchSlice"

import { FoodItem } from "../domain/foodItem"
import { SearchByNutrient } from "../domain/search/search"
import {
	addToCollection as addToCollectionAction,
	updateCollection
} from "../store/features/collectionOfSetsSlice"

// import { FoodItemIdAndNewValue } from "../domain/foodItem"

// import { AddToCollectionInput } from "../store/features/collectionOfSetsSlice"
import { FoodSet } from "../domain/foodSet"


export function useFoodSetStorage(): FoodSetStorageService {
	const foodSet = useAppSelector((state) => state.foodSet.FoodSet)
	const dispatch = useAppDispatch()

	const addToFoodSet = (payload: FoodItem) => {
		return dispatch(addFood(payload))
	}

	const updateFoodItemValue = (payload: FoodItem[]) => {
		return dispatch(changeFoodValue(payload))
	}


	return { foodSet, addToFoodSet, updateFoodItemValue }
}

export function useSearchTextStorage(): SearchStorageService {
	const searchText = useAppSelector((state) => state.searchText.text)
	const searchNutrient = useAppSelector((state) => state.searchText.selectionByNutrient)

	const dispatch = useAppDispatch()

	const setSearchText = (payload: string) => {
		return dispatch((setText(payload)))
	}
	const setSearchNutrient = (payload: SearchByNutrient) => {
		return dispatch(setNutrientSelection(payload))
	}

	return {
		searchText,
		setSearchText,
		searchNutrient,
		setSearchNutrient
	}
}



// export function useCollectionStorage(): CollectionStorageService {
// 	const collection = useAppSelector((state) => state.collectionOfSets.collection)
// 	const dispatch = useAppDispatch()

// 	const addToCollection = (payload: CollectionItem) => {
// 		return dispatch(addToCollectionAction(payload))
// 	}
// 	const deleteFromCollection = (payload: Collection) => {
// 		return dispatch(updateCollection(payload))
// 	}
// 	const updateCollectionItemName = (payload: Collection) => {
// 		return dispatch(updateCollection(payload))
// 	}
// 	const updateFoodItemValueWithinCollection = (payload: Collection) => {
// 		return dispatch(updateCollection(payload))
// 	}
// 	const updateTotalNutrientsWithinCollection = (payload: Collection) => {
// 		return dispatch(updateCollection(payload))
// 	}


// 	return {
// 		collection,
// 		addToCollection,
// 		deleteFromCollection,
// 		updateFoodItemValueWithinCollection,
// 		updateTotalNutrientsWithinCollection,
// 		updateCollectionItemName
// 	}
// }
