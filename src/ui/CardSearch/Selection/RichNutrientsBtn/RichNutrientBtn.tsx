import React, { FC, Dispatch, SetStateAction } from "react"
import { OneGroupOfNutrientGroups } from "../../../../domain/nutrientGroups"
import { useSearchTextStorage } from "../../../../services/storeAdapter"

import styles from "./RichNutrientBtn.module.css"

type Props = {
	nutrient: string,
	group: OneGroupOfNutrientGroups
	btnText?: string
}

const RichNutrientBtn: FC<Props> = ({ nutrient, group, btnText }) => {

	const { searchNutrient, setSearchNutrient } = useSearchTextStorage()

	const clickHandler = (e: React.MouseEvent) => {
		e.stopPropagation()
		setSearchNutrient(
			{
				nutrientName: nutrient,
				nutrientGroupName: group
			}
		)
	}

	const selectedNutrientClass = nutrient === searchNutrient?.nutrientName
		? styles.selected
		: {}

	return (
		<p
			className={`${styles.btn} ${selectedNutrientClass}`}
			onClick={clickHandler}
			style={nutrient === searchNutrient?.nutrientName ? { background: "orange", color: "white" } : {}}>

			{
				btnText
					? btnText
					: nutrient.includes("Vitamin") ? nutrient.slice(8) : nutrient
			}

		</p>
	)
}

export default RichNutrientBtn
