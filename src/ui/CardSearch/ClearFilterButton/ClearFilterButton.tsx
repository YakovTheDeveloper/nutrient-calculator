import React, { FC } from "react"
import RichNutrientBtn from "../Selection/RichNutrientsBtn/RichNutrientBtn"
import { defaultEmptyGroups } from "../../../services/fetchFoodAdapter/processData/nutrientGroupsForUser"
import { SearchByNutrient } from "../../../domain/search/search"
import styles from "./ClearFilterButton.module.css"

type Props = {
	clearSearch: (e: React.MouseEvent) => void

}
const ClearFilterButton: FC<Props> = ({ clearSearch }) => {
	return (
		<button
			className={styles.btn}
			onClick={clearSearch}
		>
			Clear all filters
		</button>
	)
}

export default ClearFilterButton


