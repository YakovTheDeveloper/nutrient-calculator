import React, { FC, useState, useEffect } from "react"
import { useApiSearchFiltering } from "../../../../application/search/apiSearch/searchFiltering"
import { CheckboxNames } from "../../../../application/search/apiSearch/types"
import styles from "./Checkbox.module.css"


type Props = {
	isChecked: boolean,
	checkboxName: CheckboxNames
	checkboxLabel: string
}

const Checkbox: FC<Props> = ({ isChecked, checkboxName, checkboxLabel }) => {

	const { toggleCheckbox } = useApiSearchFiltering()

	const checkHandler = (e: React.ChangeEvent) => {
		toggleCheckbox(checkboxName)
	}

	return (
		<div className={styles.container}>
			<input
				onChange={checkHandler}
				checked={isChecked}
				id={checkboxName}
				name={checkboxName}
				type="checkbox"
			/>
			<label htmlFor={checkboxName}>
				{checkboxLabel}
			</label>
		</div>
	)
}

export default Checkbox

