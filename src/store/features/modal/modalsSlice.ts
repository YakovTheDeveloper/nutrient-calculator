import { ModalsState } from "../../../application/modal/modalTypes"
import { NutrientGroups } from "../../../domain/nutrientGroups"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { CollectionItem } from "../../../domain/collection/CollectionItem"




const initialState: ModalsState = {
	NutrientGroupsModal: {
		isOpen: false,
		nutrients: null
	},
	NutrientInfoModal: {
		isOpen: false,
		nutrientName: null
	},
	RegistrationModal: {
		isOpen: false,
	},
	FoodItemListModal: {
		isOpen: false,
		collectionItem: null
	}
}

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		openNutrientGroupsModal: (state, action: PayloadAction<NutrientGroups>) => {
			state.NutrientGroupsModal.isOpen = true
			state.NutrientGroupsModal.nutrients = action.payload
		},
		closeNutrientGroupsModal: (state) => {
			state.NutrientGroupsModal.isOpen = false
		},

		openRegistrationModal: (state) => {
			state.RegistrationModal.isOpen = true
		},
		closeRegistrationModal: (state) => {
			state.RegistrationModal.isOpen = false
		},

		openNutrientInfoModal: (state, action: PayloadAction<string>) => {
			state.NutrientInfoModal.isOpen = true
			state.NutrientInfoModal.nutrientName = action.payload
		},
		closeNutrientInfoModal: (state) => {
			state.NutrientInfoModal.isOpen = false
		},

		openFoodItemListModal: (state, action: PayloadAction<CollectionItem>) => {
			state.FoodItemListModal.isOpen = true
			state.FoodItemListModal.collectionItem = action.payload
		},
		closeFoodItemListModal: (state) => {
			state.FoodItemListModal.isOpen = false
		},

	}
})
export const {
	openNutrientGroupsModal,
	closeNutrientGroupsModal,
	openRegistrationModal,
	closeRegistrationModal,
	openNutrientInfoModal,
	closeNutrientInfoModal,
	openFoodItemListModal,
	closeFoodItemListModal
} = modalSlice.actions

export default modalSlice.reducer