import React from "react"
import FoodItemInfoModal from "./Variants/FoodItemInfoModal"
import NutrientInfoModal from "./Variants/NutrientInfoModal"
import FoodItemListModal from "./Variants/FoodItemListModal"

const PossibleModals = () => {
	return (
		<>
			<FoodItemListModal />
			<FoodItemInfoModal />
			<NutrientInfoModal />
		</>
	)
}

export default PossibleModals