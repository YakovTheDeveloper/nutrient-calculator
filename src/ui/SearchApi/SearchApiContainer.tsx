import React, { useState, useEffect } from "react"
import { FoodItem } from "../../domain/foodItem"
import { useFetchFoodByText } from "../../application/fetchFoodByText"
import { validationSearchApiText } from "../../utils/textValidation/apiSearchTextValidation"
import SearchApi from "./SearchApi"
import { handleEnter } from "../../utils/keyDowns/handleEnter"
import { useApiSearchFiltering } from "../../application/search/apiSearch/searchFiltering"
import FilterPanel from "./FilterPanel/FilterPanel"
import { useApiSearchStorage } from "../../services/storeAdapter/apiSearchStorage"


const SearchApiContainer = () => {

	const [searchText, setSearchText] = useState("")
	const [url, setUrl] = useState("")
	const [result, setResult] = useState<FoodItem[] | null>([])
	const [loading, setLoading] = useState(false)
	const [alertMessage, setAlertMessage] = useState({
		type: "",
		text: ""
	})
	const { getFilterWordsString, toggleCheckbox } = useApiSearchFiltering()
	const { checkboxesState } = useApiSearchStorage()
	const { fetchFoodByText } = useFetchFoodByText()


	const handleClick = async (e: React.FormEvent) => {
		e.preventDefault()
		const validationResultMessage = validationSearchApiText(searchText)

		if (validationResultMessage !== "ok") {
			setAlertMessage({
				type: "danger",
				text: `${validationResultMessage}`
			})
			return

		} else {
			setAlertMessage({
				type: "",
				text: ""
			})
		}
		setLoading(true)
		setUrl(searchText)
	}

	useEffect(() => {
		console.log("getFilterWordsString", getFilterWordsString())

	}, [checkboxesState])

	useEffect(() => {
		if (!url) return
		else {

			const filteredSearchText = searchText + getFilterWordsString();

			(async () => {
				await fetchFoodByText(filteredSearchText).then((res: FoodItem[]) => {
					res && setResult(res)
					res.length === 0 && setResult(null)
					setLoading(false)
				})
			})()
		}
	}, [url])

	return (
		<SearchApi
			loading={loading}
			searchText={searchText}
			setSearchText={setSearchText}
			handleClick={handleClick}
			alertMessage={alertMessage}
			result={result}
		>
			<FilterPanel />
		</SearchApi>
	)
}

export default SearchApiContainer
