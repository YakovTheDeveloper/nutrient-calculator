import React, { useEffect, useState } from "react"
import styles from "./NutrientTable.module.css"
import { useUpdateNutrientTable } from "../../application/updateNutrientTable"
import { useAppSelector } from "../../hooks"
import { useSetSearch } from "../../application/setSearchText"
import { CSSTransition } from "react-transition-group"
import { defaultEmptyGroups } from "../../services/fetchFoodAdapter/processData/nutrientGroupsForUser"
import NutrientGroups from "../NutrientGroups/NutrientGroups"

const NutrientTable = () => {
	const { updateNutrientTable } = useUpdateNutrientTable()
	const [toggleTable, setToggleTable] = useState(false)

	const foodSet = useAppSelector(state => state.foodSet.FoodSet)
	const nutrientTable = useAppSelector(state => state.nutrientTable.groupsWithTotalValues)

	useEffect(() => {
		updateNutrientTable()
		console.log("foodSet", foodSet)
	}, [foodSet])

	return (

		<>
			<button className={styles.toggleBtn} onClick={() => setToggleTable(prev => !prev)}>
				{toggleTable ? "hide nutrients" : "show nutrients"}
			</button>

			<CSSTransition
				in={toggleTable}
				timeout={400}
				classNames={{
					enterActive: styles.nutrientTableActive,
					exitActive: styles.nutrientTableExit,
				}}
				unmountOnExit
			>
				<div className={styles.container}>

					{
						foodSet.length === 0
							? <NutrientGroups nutrientGroups={defaultEmptyGroups} />
							: <NutrientGroups nutrientGroups={nutrientTable} />
					}



					

				</div>
			</CSSTransition>
		</>
	)
}

export default NutrientTable
