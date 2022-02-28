import React, { FC } from "react"
import { CSSTransition } from "react-transition-group"
import styles from "./NutrientInfoTooltip.module.css"

type Props = {
	nutrientName?: string
	children: any
}

const NutrientInfoTooltip: FC<Props> = ({ children, nutrientName }) => {


	return (
		<div className={styles.tooltip}>
			<span className={styles.tooltiptext}>
				{
					"Click to know about this nutrient"
				}
			</span>

			{/* Children are elements hover on which will show tooltip */}
			{children}
		</div>
	)

}

export default NutrientInfoTooltip