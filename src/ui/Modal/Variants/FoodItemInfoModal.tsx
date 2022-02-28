import React, { FC } from "react"
import styles from "./Modal.module.css"
import Modal from "../Modal"
import NutrientGroups from "../../NutrientGroups/NutrientGroups"
import { useNutrientGroupsModalInteractor } from "../../../application/modal/modalsInteractor"
import { useModalStateStorage } from "../../../services/storeAdapter/modalStorage"


const FoodItemInfoModal: FC = () => {

	const { modals } = useModalStateStorage()
	const { closeNutrientGroupsModal } = useNutrientGroupsModalInteractor()

	const isModalOpen = modals.NutrientGroupsModal.isOpen
	const nutrients = modals.NutrientGroupsModal.nutrients

	if (isModalOpen && nutrients)
		return (
			<Modal closeModal={closeNutrientGroupsModal}>
				<NutrientGroups nutrientGroups={nutrients} />
			</Modal>
		)
	else return null

}

export default FoodItemInfoModal
