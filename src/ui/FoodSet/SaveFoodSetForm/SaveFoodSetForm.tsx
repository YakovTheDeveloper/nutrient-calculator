import React, { useEffect, useState } from "react"
import styles from "./SaveFoodSetForm.module.css"
import { CSSTransition } from "react-transition-group"
import { useSaveToCollection } from "../../../application/saveFoodSetToCollection"
import { useAppSelector, useAppDispatch } from "../../../hooks"
import { useFoodSetStorage } from "../../../services/storeAdapter"
import { useTotalNutrientsStorage } from "../../../services/storeAdapter/totalNutrientsStorage"
import { NotificationContainer as Notification } from "../../common/Notification/NotificationContainer"

const SaveFoodSetForm = () => {
	const [foodSetName, setFoodSetName] = useState<string>("")
	const [notifyOnSave, setNotifyOnSave] = useState<boolean>(false)

	const { foodSet } = useFoodSetStorage()
	const { totalNutrients } = useTotalNutrientsStorage()
	const { addToCollection } = useSaveToCollection()


	// useEffect(() => {
	// 	setTimeout(() => { setNotifyOnSave(false) }, 3000)
	// }, [notifyOnSave])


	const saveToCollectionHandler = () => {
		setNotifyOnSave(true)
		setFoodSetName("")
		addToCollection(foodSetName, foodSet, totalNutrients)

	}

	return (
		<>
			<div className={styles.saveCollectionForm}>

				<label className={styles.collectionLabel}>
					Collection name:
				</label>

				<input
					type="text"
					className={styles.foodSetNameInput}
					value={foodSetName}
					onChange={(e) => setFoodSetName(e.target.value)}
				/>

				<button
					className={styles.saveToCollectionBtn}
					onClick={() => saveToCollectionHandler()}
					disabled={foodSet.length === 0}>

					Save to my collection

				</button>
			</div>


			<Notification
				type={"neutral"}
				text={"Collection has been updated!"}
				trigger={notifyOnSave}
				clearTrigger={() => setNotifyOnSave(false)}
			/>

		</>
	)
}

export default SaveFoodSetForm
