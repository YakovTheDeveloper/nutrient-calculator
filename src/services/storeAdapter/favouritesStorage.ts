import { FavouriteFoodItemsIds } from "../../domain/favouriteFoodItems"
import { FavouritesStorageService } from "../../application/ports"

import { useAppSelector, useAppDispatch } from "../../hooks"
import { updateIds } from "../../store/features/favouritesSlice"

export function useFavouriteStorage(): FavouritesStorageService {
	const favourites = useAppSelector((state) => state.favourites.idList)
	const dispatch = useAppDispatch()

	const addToFavourites = (payload: FavouriteFoodItemsIds) => {
		return dispatch(updateIds(payload))
	}

	const deleteFromFavourites = (payload: FavouriteFoodItemsIds) => {
		return dispatch(updateIds(payload))
	}

	const updateFavourites = (payload: FavouriteFoodItemsIds) => {
		return dispatch(updateIds(payload))
	}

	return {
		favourites,
		addToFavourites,
		deleteFromFavourites,
		updateFavourites
	}

}
// import { FavouriteFoodItemsIds } from "../../domain/favouriteFoodItems"


// export function useFavouriteStorage() {

// 	const favourites: FavouriteFoodItemsIds = JSON.parse(localStorage.getItem("favourites") || "{}")

// 	const addToFavourites = (id: number, foodItemName: string) => {

// 		const favourites: FavouriteFoodItemsIds = JSON.parse(localStorage.getItem("favourites") || "{}")


// 		if (localStorage.getItem("favourites") === null) {
// 			localStorage.setItem("favourites", "{}")
// 		}

// 		const stringifiedNewObj = JSON.stringify(
// 			{ ...favourites, [id]: "id" }
// 		)
// 		localStorage.setItem("favourites", stringifiedNewObj)

// 	}


// 	const deleteFromFavourites = (id: number) => {

// 		delete favourites[id]

// 		localStorage.setItem("favourites", JSON.stringify(favourites))


// 	}

// 	return {
// 		favourites,
// 		addToFavourites,
// 		deleteFromFavourites
// 	}

// }