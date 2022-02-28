import React from "react"
import CardList from "../ui/CardList/CardList"
import CardSearch from "../ui/CardSearch/CardSearch"
import FoodSet from "../ui/FoodSet/FoodSet"
import NutrientTable from "../ui/NutrientTable/NutrientTable"

const FoodSelection = () => {
	return (
		<>
			<CardSearch />
			<CardList />
			<FoodSet />
			<NutrientTable />
		</>
	)
}

export default FoodSelection