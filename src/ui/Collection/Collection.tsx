// import { useStore } from "../../services/store"
import React from "react"
import styles from "./Collection.module.css"
import CollectionItem from "./CollectionItem/CollectionItem"
import NutrientGroups from "../NutrientGroups/NutrientGroups"
import { calcTotalNutrients } from "../../domain/totalNutrients"
import { useCollectionStorage } from "../../services/storeAdapter/collectionStorage"

export const Collection = () => {
	const { collection } = useCollectionStorage()





	return (
		<div className={styles.container}>

			<h3 className={styles.title}>
				{collection.length === 0 ? "Collection is empty" : "My collection"}
			</h3>

			<div className={styles.collection}>
				{	
					collection.map(item => (
						<CollectionItem item={item} key={item.id} />
					))
				}
			</div>

		</div>
	)
}


