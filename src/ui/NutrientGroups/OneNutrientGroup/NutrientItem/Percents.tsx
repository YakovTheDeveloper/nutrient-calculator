import React, { FC } from "react"
import { NoDailyNormMsg } from "../../../../domain/nutrientValue"
import styles from "./NutrientItem.module.css"

type Props = {
	percent: number | NoDailyNormMsg
}

const Percents: FC<Props> = ({ percent }) => {

	const percentCharacter = <span className={styles.percentSign}>%</span>
	const percentValue = <span className={styles.percentValue}>{percent}</span>

	const showPercents = (
		<span className={styles.percent}>
			{percentValue} {percentCharacter}
		</span>
	)
	const showNoNormText = (
		<span className={styles.noNorm}> no norm </span>
	)

	return (
		<p className={styles.percentsContainer}>
			{
				typeof percent === "number"
					? showPercents
					: showNoNormText
			}
		</p>
	)
}

export default Percents