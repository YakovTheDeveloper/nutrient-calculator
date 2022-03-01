import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { SearchByNutrient } from "../../../domain/search/search"

type searchState = {
	text: string
	selectionByNutrient: SearchByNutrient
}
const initialState: searchState = {
	text: "",
	selectionByNutrient: null,
}
export const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload
		},
		setNutrientSelection: (state, action: PayloadAction<SearchByNutrient>) => {
			state.selectionByNutrient = action.payload
		}
	}
})
export const { setText, setNutrientSelection } = searchSlice.actions
export default searchSlice.reducer