import { NutrientGroups } from "../../domain/nutrientGroups"
import { CollectionItem } from "../../domain/collection/CollectionItem"

export type Modal = {
	isOpen: boolean
}

export type NutrientGroupsModal = {
	nutrients: NutrientGroups | null
} & Modal

export type RegistrationModal = {} & Modal

export type NutrientInfoModal = {
	nutrientName: string | null
} & Modal

export type FoodItemListModal = {
	collectionItem: CollectionItem | null
} & Modal


export type ModalsState = {
	NutrientGroupsModal: NutrientGroupsModal
	NutrientInfoModal: NutrientInfoModal
	RegistrationModal: RegistrationModal
	FoodItemListModal: FoodItemListModal
}

