import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FoodSet } from "../../domain/foodSet"
import { FoodItem } from "../../domain/foodItem"
import { FoodItemIdAndNewValue } from "../../domain/foodItem"


type FoodSetState = {
	FoodSet: FoodItem[]
}

const initialState: FoodSetState = {
	FoodSet: []
}

export const foodSetSlice = createSlice({
	name: "foodSet",
	initialState,
	reducers: {
		addFood: (state, action: PayloadAction<FoodItem>) => {
			const foodItem = action.payload
			state.FoodSet.push(foodItem)

		},

		deleteFood: (state, action: PayloadAction<FoodItem>) => {
			const cardId = action.payload.foodItemId
			const filtered = state.FoodSet.filter(foodItemToDel => {
				return foodItemToDel.foodItemId !== cardId
			})
			state.FoodSet = filtered
		},
		
		changeFoodValue: (state, action: PayloadAction<FoodItem[]>) => {
			state.FoodSet = action.payload
		},
	}
})

export const { addFood, deleteFood, changeFoodValue } = foodSetSlice.actions

export default foodSetSlice.reducer