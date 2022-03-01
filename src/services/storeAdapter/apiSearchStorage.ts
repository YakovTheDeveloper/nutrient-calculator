
import { useAppSelector, useAppDispatch } from "../../hooks"
import { toggleCheck } from "../../store/features/search/apiSearchSlice"
import { CheckboxNames } from "../../application/search/apiSearch/types"

export function useApiSearchStorage() {
	const checkboxesState = useAppSelector((state) => state.apiSearch)
	const dispatch = useAppDispatch()

	const updateCheckboxes = (checkboxName: CheckboxNames) => {
		return dispatch(toggleCheck(checkboxName))
	}

	return {
		checkboxesState,
		updateCheckboxes,
	}
}