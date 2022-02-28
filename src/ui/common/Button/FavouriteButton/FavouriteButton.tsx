import React, { FC, useEffect, useState } from "react"
import { useToggleFoodItemToFavourites } from "../../../../application/favourites/favouritesInteractor"
import { useFavouriteStorage } from "../../../../services/storeAdapter/favouritesStorage"
import { isIdAlreadyInList } from "../../../../domain/favouriteFoodItems"
import { useUpdateLocalStorageWithFavourites } from "../../../../application/favourites/favouritesInteractor"
import FavouriteButtonTooltip from "../../Tooltip/Variants/FavouriteButton/FavouriteBtnTooltip"
import styles from "./FavouriteButton.module.css"

type Props = {
	foodItemId: number
}

const FavouriteButton: FC<Props> = ({ foodItemId }) => {

	const { favourites } = useFavouriteStorage()
	const { toggleFoodItemToFavourites } = useToggleFoodItemToFavourites()
	const { updateLocalStorageWithFavourites } = useUpdateLocalStorageWithFavourites()

	useEffect(() => {
		updateLocalStorageWithFavourites()
	}, [favourites])


	const idInList = isIdAlreadyInList(foodItemId, favourites)


	return (
		<FavouriteButtonTooltip isFoodItemInFavourites={idInList}>
			<button
				className={styles.btn}
				onClick={(e) => {
					toggleFoodItemToFavourites(foodItemId)
					e.stopPropagation()
				}}
			>
				{
					idInList
						? "🌠"
						: "⭐"
				}
			</button>
		</FavouriteButtonTooltip>
	)
	// return (
	// 	<div className={
	// 		`${styles.tooltip} 
	// 		${idInList && styles.deleteFromFavourites}`
	// 	}>
	// 		<span className={
	// 			`${styles.tooltiptext} ${idInList && styles.deleteFromFavourites}`
	// 		}>
	// 			{
	// 				idInList
	// 					? "Delete from favourites"
	// 					: "Add to favourites"
	// 			}
	// 		</span>

	// 		<button
	// 			className={styles.btn}
	// 			onClick={(e) => {
	// 				toggleFoodItemToFavourites(foodItemId)
	// 				e.stopPropagation()
	// 			}}
	// 		>
	// 			{
	// 				idInList
	// 					? "🌠"
	// 					: "⭐"
	// 			}
	// 		</button>
	// 	</div>
	// )
}

export default FavouriteButton