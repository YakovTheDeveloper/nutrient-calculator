import React, { FC, useEffect } from "react"
import CardOfCardList from "../Card/Variants/CardOfCardList"
import { quickAccessFood } from "../../quickAccessFood"
import { sortFoodList } from "../../application/sortFoodList/sortFoodList"
import styles from "./CardList.module.css"
import CardOfCardListWithinCollection from "../Card/Variants/CardOfCardListWithinCollection"
import { useSearchTextStorage } from "../../services/storeAdapter"
import { CollectionItem } from "../../domain/collection/CollectionItem"

type Props = {
	collectionItem: CollectionItem
}

const CardListWithinCollection: FC<Props> = ({ collectionItem }) => {
	const { searchText, searchNutrient } = useSearchTextStorage()
	const sortedCards = sortFoodList(quickAccessFood, searchNutrient, searchText)

	return (
		<ul className={styles.container}>
			{
				sortedCards.map(item =>
					<CardOfCardListWithinCollection
						collectionItem={collectionItem}
						foodItem={item}
						key={item.foodItemId}
					/>
				)
			}
		</ul>
	)
}


export default CardListWithinCollection

