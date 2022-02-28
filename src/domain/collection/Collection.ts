import { CollectionItem } from "./CollectionItem"
import { FoodItem } from "../foodItem"
import { FoodSet, updateValueOfFoodItem } from "../foodSet"
import { calcTotalNutrients } from "../totalNutrients"
import { createCollectionItem } from "./CollectionItem"
import { NutrientGroups } from "../nutrientGroups"

export type Collection = CollectionItem[]


export function updateValueOfFoodItemWithinCollection(
	collection: Collection,
	collectionItem: CollectionItem,
	foodItemToUpdate: FoodItem,
	value: number
): Collection {

	const updatedFoodSet = updateValueOfFoodItem(collectionItem.foodSet, foodItemToUpdate, value)
	const IdOfFoodItemToChangeValue = collectionItem.id

	return collection.map(item => {

		if (IdOfFoodItemToChangeValue === item.id) return { ...item, foodSet: updatedFoodSet }

		return item
	})

}

export function updateNutrientsOfFoodItemWithinCollection(
	collection: Collection,
	collectionItem: CollectionItem,
): Collection {

	const updatedNutrients = calcTotalNutrients(collectionItem.foodSet)
	const IdOfFoodItemToChangeNutrients = collectionItem.id

	return collection.map(item => {

		if (IdOfFoodItemToChangeNutrients === item.id)
			return { ...item, nutrients: updatedNutrients }

		return item
	})

}

export function addFoodSetToCollection(
	collection: Collection,
	foodSet: FoodSet,
	name: string,
	nutrientGroups: NutrientGroups
): Collection {
	const newCollectionItem = createCollectionItem(name, foodSet, nutrientGroups)
	return [...collection, newCollectionItem]
}


