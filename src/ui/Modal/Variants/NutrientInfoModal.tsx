import React, { FC } from "react"
import styles from "./Modal.module.css"
import Modal from "../Modal"
import { useNutrientInfoInteractor } from "../../../application/modal/modalsInteractor"
import { useModalStateStorage } from "../../../services/storeAdapter/modalStorage"


const NutrientInfoModal: FC = () => {

	const { modals } = useModalStateStorage()
	const { closeNutrientInfoModal } = useNutrientInfoInteractor()

	const isModalOpen = modals.NutrientInfoModal.isOpen
	const nutrientName = modals.NutrientInfoModal.nutrientName

	if (isModalOpen && nutrientName)
		return (
			<Modal
				isModalOpen={isModalOpen}
				closeModal={closeNutrientInfoModal}
			>
				<div>
					{nutrientName}
				</div>
			</Modal>
		)
	else return null

}

export default NutrientInfoModal
