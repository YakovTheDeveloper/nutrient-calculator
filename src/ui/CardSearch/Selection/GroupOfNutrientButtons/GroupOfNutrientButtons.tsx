import React, { FC, Dispatch, SetStateAction } from "react"
import { OneGroupOfNutrientGroups } from "../../../../domain/nutrientGroups"
import { NutrientGroup } from "../../../../domain/nutrientGroups"
import RichNutrientBtn from "../RichNutrientsBtn/RichNutrientBtn"
import { useSearchTextStorage } from "../../../../services/storeAdapter"

import styles from "./GroupOfNutrientButtons.module.css"

type Props = {
	group: NutrientGroup
	groupName: OneGroupOfNutrientGroups
}

const GroupOfNutrientButtons: FC<Props> = ({ group, groupName }) => {
	return (
		<div>

			{Object.keys(group).map(nutrientName =>
				<RichNutrientBtn
					nutrient={nutrientName}
					group={groupName}
					btnText={nutrientName}
					key={nutrientName} />
			)}

		</div>
	)
}

export default GroupOfNutrientButtons
