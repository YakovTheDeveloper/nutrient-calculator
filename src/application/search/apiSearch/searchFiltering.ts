import { createTotalStringOfFilterWords } from "./helpers"
import { CheckboxNames } from "./types"
import { useApiSearchStorage } from "../../../services/storeAdapter/apiSearchStorage"


export function useApiSearchFiltering() {

	const storage = useApiSearchStorage()

	function toggleCheckbox(checkboxName: CheckboxNames) {
		console.log("storage.checkboxesState", storage.checkboxesState)
		storage.updateCheckboxes(checkboxName)
	}

	function getFilterWordsString() {
		return createTotalStringOfFilterWords(storage.checkboxesState)
	}


	return { toggleCheckbox, getFilterWordsString }
}