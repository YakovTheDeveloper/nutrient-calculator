import React, { FC, useEffect } from "react"
import CardOfCardList from "../Card/Variants/CardOfCardList"
import { quickAccessFood } from "../../quickAccessFood"
import { sortFoodList } from "../../application/sortFoodList/sortFoodList"
import { FoodCard } from "../Card/Card"
import { useSearchTextStorage } from "../../services/storeAdapter"

type Props = {
	Card: React.FC<FoodCard>
}

const CreateItems: FC<Props> = ({ Card }) => {
	const { searchText, searchNutrient } = useSearchTextStorage()
	const sortedCards = sortFoodList(quickAccessFood, searchNutrient, searchText)

	return (
		<>
			{sortedCards.map(item => Card)}
		</>
	)

}


export default CreateItems

