import React, { FC } from "react"
import RichNutrientBtn from "../Selection/RichNutrientsBtn/RichNutrientBtn"
import { defaultEmptyGroups } from "../../../services/fetchFoodAdapter/processData/nutrientGroupsForUser"
import { SearchByNutrient } from "../../../domain/search/search"
import styles from "./FilterTitle.module.css"

type Props = {
	searchNutrient: SearchByNutrient

}
const FilterTitle: FC<Props> = ({ searchNutrient }) => {
	if (searchNutrient)
		return (
			<div
				className={
					searchNutrient.nutrientName
						? `${styles.sortInfoTitle}`
						: `${styles.sortInfoTitle} ${styles.sortInfoTitleEmpty}`
				}
			>
				<p className={styles.titleText}>
					products rich in <b>{searchNutrient.nutrientName}</b>
				</p>
			</div>
		)
	else return null
}

export default FilterTitle


// {
// 	searchNutrient && <div
// 		className={
// 			searchNutrient.nutrientName
// 				? `${styles.sortInfoTitle}`
// 				: `${styles.sortInfoTitle} ${styles.sortInfoTitleEmpty}`
// 		}
// 	>
// 		{
// 			searchNutrient.nutrientName
// 				? <p className={styles.sortByRich}>
// 					products rich in <b>{searchNutrient.nutrientName}</b>
// 				</p>
// 				: null
// 		}



// 	</div>
// }