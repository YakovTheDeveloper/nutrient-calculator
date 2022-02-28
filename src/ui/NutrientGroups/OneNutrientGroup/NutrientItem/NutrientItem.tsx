import React, { FC } from "react"
import { NutrientData } from "../../../../domain/nutrientGroups"
import { NutrientGroups } from "../../../../domain/nutrientGroups"
import RichNutrientBtn from "../../../CardSearch/Selection/RichNutrientsBtn/RichNutrientBtn"
import { setProgressLineStyle } from "../../../../utils/setProgressLineStyle"
import { NoDailyNormMsg } from "../../../../domain/nutrientValue"
import { useNutrientInfoInteractor } from "../../../../application/modal/modalsInteractor"
import Percents from "./Percents"
import AddCardNotification from "../../../common/Notification/Variants/AddCardNotification"
import NutrientInfoTooltip from "../../../common/Tooltip/Variants/NutrientInfo/NutrientInfoTooltip"
import styles from "./NutrientItem.module.css"

type Props = NutrientData & {
	percent: number | NoDailyNormMsg
	groupName: keyof NutrientGroups
}

const NutrientItem: FC<Props> = ({
	nutrientName,
	groupName,
	value,
	unitName,
	percent
}) => {

	const { openNutrientInfoModal } = useNutrientInfoInteractor()

	return (
		<NutrientInfoTooltip nutrientName={nutrientName}>
			<li
				className={styles.item}
				onClick={() => {
					openNutrientInfoModal(nutrientName)
				}}
				key={nutrientName}
			>
				<p className={styles.name}>
					{nutrientName}
				</p>

				<p className={styles.value}>
					{value} {unitName}
				</p>

				<Percents percent={percent} />

				{
					typeof percent === "number" &&
					<>
						<hr style={{ ...setProgressLineStyle(percent) }} className={styles.progress} />
						<hr className={styles.gray} />
					</>
				}

				<RichNutrientBtn
					nutrient={nutrientName}
					group={groupName}
					btnText={"🔎"}
				/>

			</li>
		</NutrientInfoTooltip>
	)
}

export default NutrientItem