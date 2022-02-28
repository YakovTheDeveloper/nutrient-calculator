import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FavouriteFoodItemsIds } from "../../domain/favouriteFoodItems"

type FavouritesState = {
	idList: FavouriteFoodItemsIds
}

const initialState: FavouritesState = {
	idList: []
}

export const favouritesSlice = createSlice({
	name: "FavouriteFoodItemsIds",
	initialState,
	reducers: {
		updateIds: (state, action: PayloadAction<FavouriteFoodItemsIds>) => {
			const newIds = action.payload
			state.idList = newIds
		}
	}
})
export const { updateIds } = favouritesSlice.actions
export default favouritesSlice.reducer