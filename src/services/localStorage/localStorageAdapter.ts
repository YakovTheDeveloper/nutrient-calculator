import { FavouriteFoodItemsIds } from "../../domain/favouriteFoodItems"

export function useLocalStorage(){

	const favouritesLocalStorage: FavouriteFoodItemsIds = JSON.parse(localStorage.favourites || "[]")

	const updateLocalStorage = (idList: FavouriteFoodItemsIds) => {
		const stringifiedIdList = JSON.stringify(idList)
		localStorage.setItem("favourites", stringifiedIdList)
	}

	return {
		favouritesLocalStorage,
		updateLocalStorage
	}
}