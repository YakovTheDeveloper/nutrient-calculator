import React from "react"
import RichNutrientBtn from "../Selection/RichNutrientsBtn/RichNutrientBtn"
import { defaultEmptyGroups } from "../../../services/fetchFoodAdapter/processData/nutrientGroupsForUser"
import { objectEntries } from "../../../utils/typesHelpers/objectEntries"
import GroupOfNutrientButtons from "./GroupOfNutrientButtons/GroupOfNutrientButtons"
import styles from "./Selection.module.css"


const Selection = () => {
	return (
		<div className={styles.container}>
			<h3 >Search products rich in:</h3>
			{
				objectEntries(defaultEmptyGroups).map(keyValuePair => {
					const group = keyValuePair[1]
					const groupName = keyValuePair[0]

					return (
						<GroupOfNutrientButtons
							key={groupName}
							group={group}
							groupName={groupName}
						/>
					)
				})
			}
		</div>
	)
}

export default Selection