import React, { FC, useEffect, useState } from "react"
import styles from "./CollectionItem.module.css"
import { CollectionItem as CollectionItemType } from "../../../domain/collection/CollectionItem"
import { useDeleteFoodSetFromCollection } from "../../../application/deleteFoodSetFromCollection"
import CardOfFoodSetWithinCollection from "../../Card/Variants/CardOfFoodSetWithinCollection"
import { useFooditemListInteractor } from "../../../application/modal/modalsInteractor"
import NutrientGroups from "../../NutrientGroups/NutrientGroups"
import Title from "./Title/Title"

type Props = {
	item: CollectionItemType
}

const CollectionItem: FC<Props> = ({ item }) => {

	const { deleteFoodSetFromCollection } = useDeleteFoodSetFromCollection()
	const { openFoodItemListModal } = useFooditemListInteractor()
	const [toggleProducts, setToggleProducts] = useState(false)


	// useEffect(() => {

	// 	updateNutrientsWithinCollection(item)

	// }, [toggleProducts])


	return (
		// refactor item name to new comp
		<div className={styles.collectionItem} key={item.id}>

			<Title item={item} />

			<NutrientGroups nutrientGroups={item.nutrients} />

			<button
				className={styles.deleteBtn}
				onClick={() => deleteFoodSetFromCollection(item)}>

				Remove

			</button>

			<button onClick={() => setToggleProducts(prev => !prev)}>
				{toggleProducts ? "Hide" : "Show"} products & values
			</button>

			{toggleProducts &&
				<ul>
					{item.foodSet.map(foodItem => {
						return (

							<CardOfFoodSetWithinCollection
								foodItem={foodItem}
								collectionItem={item}
								key={foodItem.foodItemId}
							/>
						)
					})}
				</ul>}

			<button onClick={() => openFoodItemListModal(item)}>
					Add another products
			</button>

		</div>
	)
}

export default CollectionItem
