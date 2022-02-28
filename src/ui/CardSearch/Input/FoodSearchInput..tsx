import React, { FC } from "react"
import RichNutrientBtn from "../Selection/RichNutrientsBtn/RichNutrientBtn"
import { defaultEmptyGroups } from "../../../services/fetchFoodAdapter/processData/nutrientGroupsForUser"
import { SearchByNutrient } from "../../../domain/search/search"
import Input from "../../common/Input/Input"
import { preventInputChars } from "../../../utils/preventDoingThings/preventInputChars"
import CrossButton from "../../common/Button/CrossButton/CrossButton"
import styles from "./FoodSearchInput.module.css"

type Props = {
	value: string
	changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
	clearSearchText: () => void
}
const FoodSearchInput: FC<Props> = ({ value, changeHandler, clearSearchText }) => {
	return (
		<div className={styles.container}>
			<input
				className={styles.input}
				type="text"
				onChange={changeHandler}
				value={value}
				autoFocus={true}
				onKeyDown={
					(e) => preventInputChars("textSearch", e)
				}
			/>
			<div className={styles.buttonContainer}>
				<CrossButton onClick={clearSearchText} />
			</div>
		</div>
	)
}

export default FoodSearchInput

