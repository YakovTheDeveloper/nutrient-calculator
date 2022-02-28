import { FoodItem } from "../../domain/foodItem"
import { SearchByNutrient } from "../../domain/search/search"
import { nutrientsDailyNorm } from "../../domain/nutrientValue"

export function sortFoodList(
	foodList: FoodItem[],
	searchNutrient: SearchByNutrient,
	searchText: string
): FoodItem[] {

	return foodList.filter((item: FoodItem) => {
		const cardName = item.foodItemName.toLowerCase()
		const filterText = searchText.toLowerCase()
		if (cardName.includes(filterText)) {

			if (searchNutrient) {

				const nutrientName = searchNutrient.nutrientName
				const groupName = searchNutrient.nutrientGroupName

				const nutrientValue = item.nutrientGroups[groupName][nutrientName].value
				const norm = nutrientsDailyNorm[nutrientName]
				const percentOfNorm = +(nutrientValue / norm * 100).toFixed(1)

				return percentOfNorm > 20 && item
			}
			else return item
		}

	})
}

