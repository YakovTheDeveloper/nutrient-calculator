import React from "react"
import styles from "./FilterPanel.module.css"
import Checkbox from "./Checkbox/Checkbox"
import { useApiSearchStorage } from "../../../services/storeAdapter/apiSearchStorage"

const FilterPanel = () => {

	const { checkboxesState } = useApiSearchStorage()

	return (
		<div className={styles.container}>
			<Checkbox
				isChecked={checkboxesState.raw}
				checkboxName={"raw"}
				checkboxLabel="Raw products"
			/>
			<Checkbox
				isChecked={checkboxesState.withoutBabyfood}
				checkboxName={"withoutBabyfood"}
				checkboxLabel="Without babyfood"
			/>
		</div>
	)
}

export default FilterPanel
