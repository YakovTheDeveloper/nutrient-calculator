import React, { FC } from "react"

import styles from "./FavouriteButtonTooltip.module.css"

type Props = {
	isFoodItemInFavourites: boolean
	children: any
}

const FavouriteButtonTooltip: FC<Props> = ({ children, isFoodItemInFavourites }) => {


	return (
		<div className={
			`${styles.tooltip} 
			${isFoodItemInFavourites && styles.deleteFromFavourites}`
		}>
			<span className={
				`${styles.tooltiptext} ${isFoodItemInFavourites && styles.deleteFromFavourites}`
			}>
				{
					isFoodItemInFavourites
						? "Delete from favourites"
						: "Add to favourites"
				}
			</span>

			{/* Children are elements hover on which will show tooltip */}
			{children}

		</div>
	)
}

export default FavouriteButtonTooltip