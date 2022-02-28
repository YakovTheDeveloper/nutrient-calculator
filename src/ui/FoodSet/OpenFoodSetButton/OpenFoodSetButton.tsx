import React, { FC } from "react"
import { CSSTransition } from "react-transition-group"
import styles from "./OpenFoodSetButton.module.css"

type Props = {
	trigger: any
	isFoodSetOpen: any
	toggleFoodSet: any

}
const OpenFoodSetButton: FC<Props> = ({ trigger, isFoodSetOpen, toggleFoodSet }) => {
	return (
		<CSSTransition
			in={trigger}
			timeout={{ enter: 700 }}
			// onEnter={() => setTimeout(() => setAnimateProductsBtn(false), 700)}
			classNames={{
				enterActive: styles.toggleBtnActive,
			}}
		>
			<button
				className={styles.toggleBtn}
				onClick={toggleFoodSet}
			>
				{isFoodSetOpen ? "hide my products" : "show my products"}
			</button>

		</CSSTransition>
	)
}

export default OpenFoodSetButton