import React, { useState, useEffect } from "react"
import { FoodItem } from "../../domain/foodItem"
import { useFetchFoodByText } from "../../application/fetchFoodByText"
import { validationSearchApiText } from "../../utils/textValidation/apiSearchTextValidation"
import SearchApi from "./SearchApi"
import { handleEnter } from "../../utils/keyDowns/handleEnter"

const SearchApiContainer = () => {

	const [searchText, setSearchText] = useState("")
	const [url, setUrl] = useState("")
	const [result, setResult] = useState<FoodItem[] | null>([])
	const [loading, setLoading] = useState(false)
	const [alertMessage, setAlertMessage] = useState({
		type: "",
		text: ""
	})

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
		if (!url) return

		(async () => {
			await fetchFoodByText(searchText).then((res: FoodItem[]) => {
				res && setResult(res)
				res.length === 0 && setResult(null)
				setLoading(false)
			})
		})()
		console.log("rerender @")
	}, [url])

	return <SearchApi
		loading={loading}
		searchText={searchText}
		setSearchText={setSearchText}
		handleClick={handleClick}
		alertMessage={alertMessage}
		result={result}
	/>
}

export default SearchApiContainer
