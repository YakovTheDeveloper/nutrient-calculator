import React, { FC } from "react"
import styles from "./Modal.module.css"
import Modal from "../Modal"
import NutrientGroups from "../../NutrientGroups/NutrientGroups"
import { useFooditemListInteractor } from "../../../application/modal/modalsInteractor"
import { useModalStateStorage } from "../../../services/storeAdapter/modalStorage"
import { sortFoodList } from "../../../application/sortFoodList/sortFoodList"
import { quickAccessFood } from "../../../quickAccessFood"
import { useSearchTextStorage } from "../../../services/storeAdapter"
import CardSearch from "../../CardSearch/CardSearch"
import CardListWithinCollection from "../../CardList/CardListWithinCollection"



const FoodItemListModal: FC = () => {

	const { modals } = useModalStateStorage()
	const { closeFoodItemListModal } = useFooditemListInteractor()

	const isModalOpen = modals.FoodItemListModal.isOpen
	const collectionItem = modals.FoodItemListModal.collectionItem

	if (isModalOpen && collectionItem)
		return (
			<Modal closeModal={closeFoodItemListModal}>
				<CardSearch/>
				<CardListWithinCollection collectionItem={collectionItem} />
			</Modal>
		)
	else return null

}

export default FoodItemListModal
