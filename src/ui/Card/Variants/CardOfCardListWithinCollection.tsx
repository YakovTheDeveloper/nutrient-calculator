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
import { useCollectionStorage } from "../../../services/storeAdapter/collectionStorage"
import { CollectionItem } from "../../../domain/collection/CollectionItem"

type Props = {
	collectionItem: CollectionItem
	foodItem: FoodItem
} & FoodCard

const CardOfCardListWithinCollection: FC<Props> = ({ foodItem, collectionItem }) => {


	const { addFoodItemToFoodSetWithinCollection } = useAddFoodItemToFoodSet()
	const { collection } = useCollectionStorage()
	const { openNutrientGroupsModal } = useNutrientGroupsModalInteractor()
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

	const leftClickHandler = () => {
		setShowNotification(true)

		const isCardInFoodSet = contains(collectionItem.foodSet, foodItem)
		setCardWasInFoodSet(isCardInFoodSet)

		addFoodItemToFoodSetWithinCollection(foodItem, collectionItem)
	}

	useEffect(() => {
		const isCardInFoodSet = contains(collectionItem.foodSet, foodItem)
		console.log("isCardInFoodSet AGAIN", isCardInFoodSet)
		console.log("rerender")
		console.log("cardWasInFoodSet", cardWasInFoodSet)

	}, [collection])


	const rightClickHandler = (e: React.MouseEvent) => {
		e.preventDefault()
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

export default CardOfCardListWithinCollection