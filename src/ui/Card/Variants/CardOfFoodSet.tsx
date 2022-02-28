import React, { FC } from "react"
import Card from "../Card"

import { FoodItem } from "../../../domain/foodItem"
import Input from "../../common/Input/Input"
import { useDeleteFoodItem } from "../../../application/deleteFoodItem"
import { useNutrientGroupsModalInteractor } from "../../../application/modal/modalsInteractor"
import CrossButton from "../../common/Button/CrossButton/CrossButton"
import FoodItemQuantityInput from "../../common/Input/FoodItemQuantityInput/FoodItemQuantityInput"
import { useUpdateFoodItemValue } from "../../../application/updateFoodItemValue"

type Props = {
	foodItem: FoodItem
}

const CardOfFoodSet: FC<Props> = ({ foodItem }) => {

	const { deleteFoodItem } = useDeleteFoodItem()
	const { updateFoodItemValue } = useUpdateFoodItemValue()
	const { openNutrientGroupsModal } = useNutrientGroupsModalInteractor()

	const deleteFromFoodSet = (e: React.MouseEvent) => {
		e.preventDefault()
		deleteFoodItem(foodItem)
	}
	const openModal = (e: React.MouseEvent) => {
		e.preventDefault()
		openNutrientGroupsModal(foodItem.nutrientGroups)
	}


	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = +e.target.value
		updateFoodItemValue(foodItem, inputValue)
	}

	return (
		<Card
			foodItem={foodItem}
			rightClickHandler={openModal}
		>
			<FoodItemQuantityInput
				onChange={changeHandler}
				value={foodItem.foodItemValue}
			/>
			<CrossButton onClick={deleteFromFoodSet} />
		</Card>
	)
}

export default CardOfFoodSet


