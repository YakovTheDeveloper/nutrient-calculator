import React, { FC, useState } from "react"
import { FoodItem } from "../../domain/foodItem"
import { CSSTransition } from "react-transition-group"
import styles from "./Card.module.css"

export interface FoodCard {
	foodItem: FoodItem
}

type Props = {
	children?: React.ReactNode
	rightClickHandler?: (e: React.MouseEvent) => void
	leftClickHandler?: (e: React.MouseEvent) => void
} & FoodCard

const Card: FC<Props> = ({
	foodItem,
	children,
	rightClickHandler,
	leftClickHandler
}) => {
	return (
		<li
			className={styles.card}
			onClick={leftClickHandler}
			onContextMenu={rightClickHandler}
			key={foodItem.foodItemId}
		>
			{children}
			<p className={styles.name}>
				{foodItem.foodItemName}
			</p>
		</li>
	)
}

export default Card