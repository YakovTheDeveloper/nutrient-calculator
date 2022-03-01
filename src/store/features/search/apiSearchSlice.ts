import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Checkboxes } from "../../../application/search/apiSearch/types"
import { SearchByNutrient } from "../../../domain/search/search"

const initialState: Checkboxes = {
	withoutBabyfood: true,
	raw: false
}
export const apiSearchSlice = createSlice({
	name: "apiSearchSlice",
	initialState,
	reducers: {
		toggleCheck: (state, action: PayloadAction<keyof Checkboxes>) => {
			state[action.payload] = !state[action.payload]
		},

	}
})
export const { toggleCheck } = apiSearchSlice.actions
export default apiSearchSlice.reducer