import React, { useState, useEffect, FC } from "react"
import styles from "./SearchApi.module.css"
import FoundProduct from "./FoundProduct/FoundProduct"
import Alert from "../common/Alert/Alert"
import { doesProductIncludeSearchText } from "../../utils/doesProductIncludeSearchText"
import FoodSearchInput from "../CardSearch/Input/FoodSearchInput."
import { FoodItem } from "../../domain/foodItem"
import ProductList from "../common/ProductList/ProductList"
import LoadingContainer from "../common/Loading/LoadingContainer"
import FilterPanel from "./FilterPanel/FilterPanel"

type Props = {
	children?: React.ReactChild
	loading: boolean
	searchText: string
	setSearchText: React.Dispatch<React.SetStateAction<string>>
	handleClick: (e: React.FormEvent) => void
	alertMessage: {
		type: string;
		text: string;
	}
	result: FoodItem[] | null
}

const SearchApi: FC<Props> = ({
	children,
	loading,
	searchText,
	setSearchText,
	handleClick,
	alertMessage,
	result,
}) => {

	// if (loading) return <div>Loading...</div>

	return (

		<div>

			<h3>
				{
					!result && "No results"
				}
			</h3>
			{/* {
				!result && <div>No results</div>
			} */}

			<FilterPanel />

			<FoodSearchInput
				value={searchText}
				changeHandler={(e) => setSearchText(e.target.value)}
				clearSearchText={() => setSearchText("")}
				actionOnEnterKey={(e) => handleClick(e)}
				hasSearchButton={true}
				searchHandler={(e) => handleClick(e)}
			/>




			{
				alertMessage.type &&
				<Alert type={alertMessage.type} text={alertMessage.text} />
			}
			
			<LoadingContainer loading={loading}>
				<ProductList column={true}>
					{
						result?.map(product =>
							<FoundProduct
								key={product.foodItemId}
								product={product}
							/>)
					}
				</ProductList>
			</LoadingContainer>




			{/* {
				result && result.map((product: FoodItem) => {
					if (!doesProductIncludeSearchText(product.foodItemName, searchText)) return
					return (
						<ul key={Math.random().toString(36) + Date.now()} className={styles.productList}>
							<FoundProduct product={product} />
						</ul>
					)
				})
			} */}

		</div >
	)
}

export default SearchApi
