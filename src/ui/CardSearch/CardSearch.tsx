import React, { useEffect, useState, FC, Dispatch, SetStateAction } from "react"
// import { useStore } from "../../services/store"
import RichNutrientBtn from "./Selection/RichNutrientsBtn/RichNutrientBtn"
import styles from "./CardSearch.module.css"
import Selection from "./Selection/Selection"
import Input from "../common/Input/Input"
import FilterTitle from "./FilterTitle/FilterTitle"
import FoodSearchInput from "./Input/FoodSearchInput."
import ClearFilterButton from "./ClearFilterButton/ClearFilterButton"
import { useSearchTextStorage } from "../../services/storeAdapter"

type Props = {
	hz?: any
}

const CardSearch: FC<Props> = () => {

	const {
		searchText,
		setSearchText,
		setSearchNutrient,
		searchNutrient
	} = useSearchTextStorage()


	const clearSearch = (e: React.MouseEvent) => {
		e.stopPropagation()
		e.preventDefault()

		setSearchText("")
		setSearchNutrient(null)
	}

	return (
		<form className={styles.container}>
			<Selection />
			<ClearFilterButton clearSearch={clearSearch} />
			<h3>Search by product name</h3>
			<FoodSearchInput
				value={searchText}
				changeHandler={(e) => setSearchText(e.target.value)}
				clearSearchText={() => setSearchText("")
				}
			/>
			<FilterTitle searchNutrient={searchNutrient} />
		</form>
	)
}

export default CardSearch
