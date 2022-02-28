import React, { useEffect } from "react"
import CardOfCardList from "../Card/Variants/CardOfCardList"
import { quickAccessFood } from "../../quickAccessFood"
import { sortFoodList } from "../../application/sortFoodList/sortFoodList"
import styles from "./CardList.module.css"
import { useSearchTextStorage } from "../../services/storeAdapter"

const CardList = () => {
	const { searchText, searchNutrient } = useSearchTextStorage()
	const sortedCards = sortFoodList(quickAccessFood, searchNutrient, searchText)

	return (
		<ul className={styles.container}>
			{
				sortedCards.map(item =>
					<CardOfCardList
						foodItem={item}
						key={item.foodItemId}
					/>
				)
			}
		</ul>
	)
}


export default CardList

