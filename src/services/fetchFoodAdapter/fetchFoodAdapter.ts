import axios from "axios"
import { fetchFoodApi } from "../fetchFoodApi"
import { FoodItem } from "../../domain/foodItem"
import { processData } from "./processData/processData"
import { FetchFoodService } from "../../application/ports"

export function useFetchFood(): FetchFoodService {

	async function fetchFood(searchText: string) {

		const foodData = await fetchFoodApi(searchText)
		console.log(foodData)
		if (!foodData) return null
		const arrWithNeededProps = processData(foodData)
		return arrWithNeededProps
	}
	return { fetchFood }
}