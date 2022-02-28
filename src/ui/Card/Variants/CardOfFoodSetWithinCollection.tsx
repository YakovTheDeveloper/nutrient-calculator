import React, { FC, useEffect } from "react"
import Card from "../Card"
import Input from "../../common/Input/Input"
import { FoodItem } from "../../../domain/foodItem"
import {
	useUpdateFoodItemValueWithinCollection
} from "../../../application/updateFoodItemValue"
import { useUpdateNutrientsWithinCollection } from "../../../application/updateNutrientTable"
import { CollectionItem } from "../../../domain/collection/CollectionItem"
import { useNutrientGroupsModalInteractor } from "../../../application/modal/modalsInteractor"
import { useCollectionStorage } from "../../../services/storeAdapter/collectionStorage"

type Props = {
	foodItem: FoodItem
	collectionItem: CollectionItem
}

const CardOfFoodSetWithinCollection: FC<Props> = (
	{
		foodItem,
		collectionItem
	}
) => {


	// const { openModal } = useToggleModal()
	const { updateFoodItemValueWithinCollection } = useUpdateFoodItemValueWithinCollection()
	const { updateNutrientsWithinCollection } = useUpdateNutrientsWithinCollection()

	const rightClickHandler = (e: React.MouseEvent) => {
		e.preventDefault()

	}

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = +e.target.value

		updateFoodItemValueWithinCollection(
			collectionItem,
			foodItem,
			inputValue
		)


	}

	useEffect(() => {
		updateNutrientsWithinCollection(collectionItem)
		console.log(foodItem.foodItemValue)
	}, [foodItem.foodItemValue])


	return (
		<Card
			foodItem={foodItem}
			rightClickHandler={rightClickHandler}
		>
			<Input
				type="number"
				onChange={changeHandler}
				value={Number(foodItem.foodItemValue).toString()}
			/>
		</Card>
	)
}

export default CardOfFoodSetWithinCollection


