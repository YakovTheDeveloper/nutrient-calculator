import { ModalService } from "../../application/ports"
import { useAppSelector, useAppDispatch } from "../../hooks"
import { NutrientGroups } from "../../domain/nutrientGroups"
import {
	openNutrientGroupsModal,
	closeNutrientGroupsModal,
	openNutrientInfoModal,
	closeNutrientInfoModal,
	openRegistrationModal,
	closeRegistrationModal,
	openFoodItemListModal,
	closeFoodItemListModal
} from "../../store/features/modal/modalsSlice"
import { CollectionItem } from "../../domain/collection/CollectionItem"

export function useModalStateStorage(): ModalService {
	const dispatch = useAppDispatch()
	const modals = useAppSelector((state) => state.modals)


	const openNutrientGroups = (nutrients: NutrientGroups) => {
		dispatch(openNutrientGroupsModal(nutrients))
	}
	const closeNutrientGroups = () => {
		dispatch(closeNutrientGroupsModal())
	}

	const openNutrientInfo = (nutrientName: string) => {
		dispatch(openNutrientInfoModal(nutrientName))
	}
	const closeNutrientInfo = () => {
		dispatch(closeNutrientInfoModal())
	}

	const openRegistration = () => {
		dispatch(openRegistrationModal())
	}
	const closeRegistration = () => {
		dispatch(closeRegistrationModal())
	}
	const openFoodItemList = (item: CollectionItem) => {
		dispatch(openFoodItemListModal(item))
	}
	const closeFoodItemList = () => {
		dispatch(closeFoodItemListModal())
	}

	return {
		modals,
		openNutrientGroups,
		closeNutrientGroups,
		openNutrientInfo,
		closeNutrientInfo,
		openRegistration,
		closeRegistration,
		openFoodItemList,
		closeFoodItemList
	}
}