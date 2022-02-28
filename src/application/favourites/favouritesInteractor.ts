import { useFavouriteStorage } from "../../services/storeAdapter/favouritesStorage"
import {
	addToFavourites,
	deleteFromFavourites,
	isIdAlreadyInList
} from "../../domain/favouriteFoodItems"
import { useLocalStorage } from "../../services/localStorage/localStorageAdapter"
import { FavouritesStorageService } from "../ports"

export const useAddFoodItemToFavourites = () => {

	const storage: FavouritesStorageService = useFavouriteStorage()

	function addFoodItemToFavourites(id: number) {

		const updatedIds = addToFavourites(id, storage.favourites)
		storage.addToFavourites(updatedIds)
	}

	return { addFoodItemToFavourites }
}


export const useDeleteFoodItemFromFavourites = () => {

	const storage: FavouritesStorageService = useFavouriteStorage()

	function deleteFoodItemFromFavourites(id: number) {
		const updatedIds = deleteFromFavourites(id, storage.favourites)
		storage.deleteFromFavourites(updatedIds)
	}

	return { deleteFoodItemFromFavourites }
}



export const useToggleFoodItemToFavourites = () => {
	const storage: FavouritesStorageService = useFavouriteStorage()
	const { addFoodItemToFavourites } = useAddFoodItemToFavourites()
	const { deleteFoodItemFromFavourites } = useDeleteFoodItemFromFavourites()

	function toggleFoodItemToFavourites(id: number) {
		console.log("storage.favourites", storage.favourites)

		if (isIdAlreadyInList(id, storage.favourites))
			deleteFoodItemFromFavourites(id)

		else addFoodItemToFavourites(id)
	}
	return { toggleFoodItemToFavourites }
}



export const useUpdateLocalStorageWithFavourites = () => {
	const storage: FavouritesStorageService = useFavouriteStorage()
	const { updateLocalStorage } = useLocalStorage()

	function updateLocalStorageWithFavourites() {
		updateLocalStorage(storage.favourites)
	}
	return { updateLocalStorageWithFavourites }
}


export const useUpdateFavouritesWithLocalStorageIds = () => {
	const storage: FavouritesStorageService = useFavouriteStorage()
	const { favouritesLocalStorage } = useLocalStorage()

	function updateFavouritesWithLocalStorageIds() {
		storage.updateFavourites(favouritesLocalStorage)
	}

	return { updateFavouritesWithLocalStorageIds }
}


