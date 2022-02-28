import { FoodSet } from "../domain/foodSet"
import { FoodItem } from "../domain/foodItem"
import { SearchByNutrient } from "../domain/search/search"
import { Collection } from "../domain/collection/Collection"
import { CollectionItem } from "../domain/collection/CollectionItem"
import { NutrientGroups } from "../domain/nutrientGroups"
import { FavouriteFoodItemsIds } from "../domain/favouriteFoodItems"
import { ModalsState } from "./modal/modalTypes"

// import { FoodItemIdAndNewValue } from "../domain/foodItem"


export interface FoodSetStorageService {
	foodSet: FoodSet
	addToFoodSet(item: FoodItem): void
	updateFoodItemValue(foodSet: FoodItem[]): void
}

export interface SearchStorageService {
	searchText: string
	setSearchText: (inputText: string) => void
	searchNutrient: SearchByNutrient
	setSearchNutrient: (nameAndGroup: SearchByNutrient) => void
}

export interface CollectionStorageService {
	collection: Collection
	updateCollection:(updatedCollection: Collection) => void
	// addToCollection: (payload: CollectionItem) => void
	// deleteFromCollection: (updatedCollection: Collection) => void
	// updateCollectionItemName: (updatedCollection: Collection) => void
	// updateFoodItemValueWithinCollection: (updatedCollection: Collection) => void
	// updateTotalNutrientsWithinCollection: (updatedCollection: Collection) => void
}

export interface FavouritesStorageService {
	favourites: FavouriteFoodItemsIds
	addToFavourites: (newIds: FavouriteFoodItemsIds) => void
	deleteFromFavourites: (newIds: FavouriteFoodItemsIds) => void
	updateFavourites: (newIds: FavouriteFoodItemsIds) => void

}

export interface FetchFoodService {
	fetchFood: (searchText: string) => Promise<FoodItem[]>

}

export interface ModalService {
	modals: ModalsState

	openNutrientGroups: (nutrients: NutrientGroups) => void
	closeNutrientGroups: () => void

	openRegistration: () => void
	closeRegistration: () => void

	openNutrientInfo: (nutrientName: string) => void
	closeNutrientInfo: () => void

	// refactor need: not only collection item but either food set
	openFoodItemList: (item: CollectionItem) => void
	closeFoodItemList: () => void
}

export interface TotalNutrientsService {
	totalNutrients: NutrientGroups
	updateTotalNutrients: (totalNutrients: NutrientGroups) => void
}

export type ModalNutrientGroups = {
	type: "NutrientGroups"
	payload: {
		title: string
		groups: NutrientGroups
	}
}
export type ModalCollections = {
	type: "Text"
	payload: string
}




