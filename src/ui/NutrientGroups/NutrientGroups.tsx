import React, { FC } from "react"
import OneNutrientGroup from "./OneNutrientGroup/OneNutrientGroup"
import { NutrientGroups as NutrientGroupsType } from "../../domain/nutrientGroups"
import styles from "./NutrientGroups.module.css"

type Props = {
	nutrientGroups: NutrientGroupsType
}


const NutrientGroups: FC<Props> = ({ nutrientGroups }) => {

	return (
		<div className={styles.nutrientGroups}>
			{
				Object.entries(nutrientGroups).map((pair: any) => {
					const groupName: keyof NutrientGroupsType = pair[0]
					const group = pair[1]
					return <OneNutrientGroup group={group} groupName={groupName} key={groupName} />
				})
			}
		</div>
	)
	// return (
	// 	<div className={styles.nutrientGroups}>
	// 		<OneNutrientGroup group={nutrientGroups.mainNutrients} groupName={"mainNutrients"} />
	// 		<OneNutrientGroup group={nutrientGroups.minerals} groupName={"minerals"} />
	// 		<OneNutrientGroup group={nutrientGroups.vitaminsB} groupName={"vitaminsB"} />
	// 		<OneNutrientGroup group={nutrientGroups.vitaminsACDEK} groupName={"vitaminsACDEK"} />
	// 		<OneNutrientGroup group={nutrientGroups.restNutrients} groupName={"restNutrients"} />
	// 	</div>
	// )

}

export default NutrientGroups
