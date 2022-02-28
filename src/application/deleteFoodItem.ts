import { FoodItem } from "../domain/foodItem"
import { useAppDispatch } from "../hooks"
import { deleteFood } from "../store/features/foodSetSlice"

export const useDeleteFoodItem = () => {

	const dispatch = useAppDispatch()
	function deleteFoodItem(item: FoodItem) {
		dispatch(deleteFood(item))
	}
	return { deleteFoodItem }
}

