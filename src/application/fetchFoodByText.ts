import { useFetchFood } from "../services/fetchFoodAdapter/fetchFoodAdapter"
import { FetchFoodService } from "./ports"

export function useFetchFoodByText() {
	// const { fetchFood } = useFetchFood()
	const fetchFoodList: FetchFoodService = useFetchFood()
	const fetchFoodByText = async (searchText: string) => {
		return await fetchFoodList.fetchFood(searchText)
	}

	return { fetchFoodByText }
}