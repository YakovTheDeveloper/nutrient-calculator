import { FoodSet } from "../foodSet"
import { NutrientGroups } from "../nutrientGroups"
import { Collection } from "./Collection"
import { FoodItem } from "../foodItem"
import { contains } from "../foodSet"
import { deepCopyObj } from "../../utils/deepCopyObj"


export type CollectionItem = {
	name: string
	id: number,
	foodSet: FoodSet
	nutrients: NutrientGroups
}


export const createCollectionItem = (
	name = "New collection",
	foodSet: FoodSet,
	nutrientGroups: NutrientGroups
): CollectionItem => {

	return {
		name: name,
		id: Math.random() + Date.now(),
		foodSet: deepCopyObj(foodSet),
		nutrients: deepCopyObj(nutrientGroups)
	}
}

export const changeCollectionItemName = (
	collection: Collection,
	collectionItem: CollectionItem,
	newName: string
): Collection => {

	const IdOfFoodItemToChangeName = collectionItem.id

	return collection.map(item => {

		if (IdOfFoodItemToChangeName === item.id)
			return { ...item, name: newName }

		return item
	})
}


export function addFoodItemToCollectionFoodSet(
	collection: Collection,
	collectionItem: CollectionItem,
	foodItem: FoodItem,
): Collection {

	const isCardInFoodSet = contains(collectionItem.foodSet, foodItem)
	if (isCardInFoodSet) return collection
	console.log("isCardInFoodSet", isCardInFoodSet)

	const updatedCollection: Collection = collection.map(item => {
		if (item.id !== collectionItem.id) return item
		if (contains(item.foodSet, foodItem)) return item

		const foodSetWithAddedItem = {
			...item,
			foodSet: [...item.foodSet, foodItem]
		}
		return foodSetWithAddedItem
	})
	return updatedCollection
}

// export function findCollectionItemIndexById(collection: Collection, collectionItemId: number) {
// 	return collection.findIndex(item => item.id === collectionItemId)
// }

