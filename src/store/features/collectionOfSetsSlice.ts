import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Collection } from "../../domain/collection/Collection"
import { CollectionItem } from "../../domain/collection/CollectionItem"
import { NutrientGroups } from "../../domain/nutrientGroups"
import { FoodSet } from "../../domain/foodSet"

// export type AddToCollectionInput = {

// 	savedFoodSet: CollectionItem
// }
type CollectionOfSets = {
	collection: Collection
}
const initialState: CollectionOfSets = {
	collection: []
}
export const collectionOfSetsSlice = createSlice({
	name: "collection",
	initialState,
	reducers: {
		addToCollection: (state, action: PayloadAction<CollectionItem>) => {
			state.collection.push(action.payload)
		},
		// deleteFromCollection: (state, action: PayloadAction<Collection>) => {
		// 	const updatedCollection = action.payload
		// 	state.collection = updatedCollection
		// },
		// updateValuesWithinCollection: (state, action: PayloadAction<Collection>) => {
		// 	const updatedCollection = action.payload
		// 	state.collection = updatedCollection
		// },
		// updateNutrientsWithinCollection: (state, action: PayloadAction<Collection>) => {
		// 	const updatedCollection = action.payload
		// 	state.collection = updatedCollection
		// },
		updateCollection: (state, action: PayloadAction<Collection>) => {
			const updatedCollection = action.payload
			state.collection = updatedCollection
		},
	}
})
export const {
	addToCollection,
	updateCollection
	// deleteFromCollection,
	// updateValuesWithinCollection,
	// updateNutrientsWithinCollection
} = collectionOfSetsSlice.actions

export default collectionOfSetsSlice.reducer