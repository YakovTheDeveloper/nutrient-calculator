import { useSearchTextStorage } from "../services/storeAdapter"
import { SearchStorageService } from "./ports"
import { SearchByNutrient } from "../domain/search/search"

export function useSetSearch() {

	const storage: SearchStorageService = useSearchTextStorage()

	function setSearchText(text: string) {
		storage.setSearchText(text)
	}

	function setSearchNutrient(nameAndGroup: SearchByNutrient) {
		storage.setSearchNutrient(nameAndGroup)
	}
	return { setSearchText, setSearchNutrient }
}