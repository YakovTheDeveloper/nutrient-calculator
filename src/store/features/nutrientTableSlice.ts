import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { NutrientGroups } from "../../domain/nutrientGroups"
import {
	mainNutrientsObj,
	mineralsObj,
	restNutrientsObj,
	vitaminsACDEKObj,
	vitaminsBObj
} from "../../services/fetchFoodAdapter/processData/nutrientGroupsForUser"
import { ITotalNutrients } from "../../domain/totalNutrients"

type totalNutrientsState = {
	groupsWithTotalValues: NutrientGroups
}
const initialState: totalNutrientsState = {
	groupsWithTotalValues: {
		mainNutrients: mainNutrientsObj,
		minerals: mineralsObj,
		vitaminsB: restNutrientsObj,
		vitaminsACDEK: vitaminsACDEKObj,
		restNutrients: vitaminsBObj
	}
}
export const nutrientTableSlice = createSlice({
	name: "nutrientTable",
	initialState,
	reducers: {
		updateTotal: (state, action: PayloadAction<NutrientGroups>) => {
			const groups = action.payload
			state.groupsWithTotalValues = groups
		}
	}
})
export const { updateTotal } = nutrientTableSlice.actions
export default nutrientTableSlice.reducer