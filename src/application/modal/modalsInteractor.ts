import { useModalStateStorage } from "../../services/storeAdapter/modalStorage"
import { NutrientGroups } from "../../domain/nutrientGroups"
import { ModalService } from "../ports"
import { CollectionItem } from "../../domain/collection/CollectionItem"

export const useNutrientGroupsModalInteractor = () => {
	const storage: ModalService = useModalStateStorage()

	function openNutrientGroupsModal(nutrients: NutrientGroups) {
		storage.openNutrientGroups(nutrients)
	}
	function closeNutrientGroupsModal() {
		storage.closeNutrientGroups()
	}
	return { openNutrientGroupsModal, closeNutrientGroupsModal }
}

export const useNutrientInfoInteractor = () => {
	const storage: ModalService = useModalStateStorage()

	function openNutrientInfoModal(nutrient: string) {
		storage.openNutrientInfo(nutrient)
	}
	function closeNutrientInfoModal() {
		storage.closeNutrientInfo()
	}
	return { openNutrientInfoModal, closeNutrientInfoModal }
}

export const useRegistrationInteractor = () => {
	const storage: ModalService = useModalStateStorage()

	function openRegistrationModal() {
		storage.openRegistration()
	}
	function closeRegistrationModal() {
		storage.closeRegistration()
	}
	return { openRegistrationModal, closeRegistrationModal }
}
export const useFooditemListInteractor = () => {
	const storage: ModalService = useModalStateStorage()

	function openFoodItemListModal(item: CollectionItem) {
		storage.openFoodItemList(item)
	}
	function closeFoodItemListModal() {
		storage.closeFoodItemList()
	}
	return { openFoodItemListModal, closeFoodItemListModal }
}