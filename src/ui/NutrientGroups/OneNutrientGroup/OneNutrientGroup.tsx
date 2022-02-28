import React, { FC } from "react"
import styles from "./OneNutrientGroup.module.css"
import { NutrientGroups } from "../../../domain/nutrientGroups"
import { NutrientGroup as NutrientGroupType } from "../../../domain/nutrientGroups"
import { calcPercentsBasedOnDailyNorms } from "../../../domain/nutrientValue"
import NutrientItem from "./NutrientItem/NutrientItem"

type Props = {
	group: NutrientGroupType
	groupName: keyof NutrientGroups
}

const OneNutrientGroup: FC<Props> = ({ group, groupName }) => {
	return (
		<ul className={styles.group}>
			{
				Object.values(group).map(({ nutrientName, value, unitName }) => {
					const percent = calcPercentsBasedOnDailyNorms(nutrientName, value)
					return (
						<NutrientItem
							key={nutrientName}
							nutrientName={nutrientName}
							value={value}
							unitName={unitName}
							percent={percent}
							groupName={groupName}
						/>
					)
				}
				)
			}
		</ul>
	)
}

export default OneNutrientGroup
