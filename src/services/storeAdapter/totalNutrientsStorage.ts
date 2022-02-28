import { useAppSelector, useAppDispatch } from "../../hooks"
import { TotalNutrientsService } from "../../application/ports"
import { updateTotal } from "../../store/features/nutrientTableSlice"
import { NutrientGroups } from "../../domain/nutrientGroups"

export function useTotalNutrientsStorage(): TotalNutrientsService {

	const totalNutrients = useAppSelector((state) => state.nutrientTable.groupsWithTotalValues)
	const dispatch = useAppDispatch()

	const updateTotalNutrients = (payload: NutrientGroups) => {
		return dispatch(updateTotal(payload))
	}

	return {
		totalNutrients,
		updateTotalNutrients
	}
}


