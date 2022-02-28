import React, { FC, useEffect, useState } from "react"
import Card from "../Card"
import { FoodItem } from "../../../domain/foodItem"
import { useAddFoodItemToFoodSet } from "../../../application/addFoodItemToFoodSet"
import { contains } from "../../../domain/foodSet"
import { useFoodSetStorage } from "../../../services/storeAdapter"
import { NotificationContainer } from "../../common/Notification/NotificationContainer"
import { useSearchTextStorage } from "../../../services/storeAdapter"
import { calcPercentsBasedOnDailyNorms } from "../../../domain/nutrientValue"
import { findNutrientOfFoodItemThatCurrentlyInSearch } from "../../../domain/search/search"
import FavouriteButton from "../../common/Button/FavouriteButton/FavouriteButton"
import AddCardNotification from "../../common/Notification/Variants/AddCardNotification"
import { FoodCard } from "../Card"
import { useNutrientGroupsModalInteractor } from "../../../application/modal/modalsInteractor"

// type Props = {
// 	foodItem: FoodItem
// }

const CardOfCardList: FC<FoodCard> = ({ foodItem }) => {


	const { addFoodItemToFoodSet } = useAddFoodItemToFoodSet()
	const { openNutrientGroupsModal } = useNutrientGroupsModalInteractor()
	const { foodSet } = useFoodSetStorage()
	const { searchNutrient } = useSearchTextStorage()

	const [percentsIfSearch, setPercentsIfSearch] = useState<any>("")

	useEffect(() => {
		const nutrient = findNutrientOfFoodItemThatCurrentlyInSearch(searchNutrient, foodItem)
		if (nutrient) {

			const percent = calcPercentsBasedOnDailyNorms(
				nutrient.nutrientName,
				nutrient.value
			)

			setPercentsIfSearch(percent)
		}
	}, [searchNutrient])



	const [cardWasInFoodSet, setCardWasInFoodSet] = useState(false)
	const [showNotification, setShowNotification] = useState(false)



	const leftClickHandler = (e: React.MouseEvent) => {
		setShowNotification(true)

		const isCardInFoodSet = contains(foodSet, foodItem)
		setCardWasInFoodSet(isCardInFoodSet)

		!isCardInFoodSet &&
			addFoodItemToFoodSet(foodItem)

	}

	const rightClickHandler = (e: React.MouseEvent) => {
		e.preventDefault()
		// openNutrientGroupsModal()
		openNutrientGroupsModal(foodItem.nutrientGroups)
	}

	return (
		<Card
			foodItem={foodItem}
			leftClickHandler={leftClickHandler}
			rightClickHandler={rightClickHandler}
		>
			<FavouriteButton foodItemId={foodItem.foodItemId} />

			{
				searchNutrient &&
				<p>
					{percentsIfSearch}% of {searchNutrient.nutrientName}
				</p>
			}


			< AddCardNotification
				trigger={showNotification}
				clearTrigger={() => setShowNotification(false)}
				cardWasInFoodSet={cardWasInFoodSet}
			/>


		</Card>
	)
}

export default CardOfCardList