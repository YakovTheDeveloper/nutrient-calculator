import { FoodItem } from "./foodItem"

export type FavouriteFoodItems = FoodItem[]

export type FavouriteFoodItemsIds = number[]





export const addToFavourites = (id: number, currentIds: FavouriteFoodItemsIds): FavouriteFoodItemsIds => {
	return !isIdAlreadyInList(id, currentIds)
		? [...currentIds, id]
		: currentIds
}
export const deleteFromFavourites = (idToDelete: number, currentIds: FavouriteFoodItemsIds): FavouriteFoodItemsIds => {
	return currentIds.filter(listId => listId !== idToDelete)
}

export const isIdAlreadyInList = (idToCheck: number, currentIds: FavouriteFoodItemsIds): boolean => {
	return currentIds.some(listId => listId === idToCheck)
}
// export const updateFavouritesIdList = (newIdList: FavouriteFoodItemsIds): FavouriteFoodItemsIds => {
// 	return currentIds.some(listId => listId === idToCheck)
// }




// export const isAnyIdMatchInList = (idList: FavouriteFoodItemsIds, idToMatch: number): boolean => {
// 	return Object.keys(idList)
// 		.some(idOfIdList => +idOfIdList === idToMatch)
// }

export const filterFoodItemsByFavourites = (foodItems: FoodItem[], idList: FavouriteFoodItemsIds = []): FoodItem[] => {
	return foodItems.filter(item => {

		// return isAnyIdMatchInList(idList, item.foodItemId) && item
		return isIdAlreadyInList(item.foodItemId, idList) && item

	})
}



