import React, { useState, useEffect, FC } from "react"
import styles from "./SearchApi.module.css"
import FoundProduct from "./FoundProduct/FoundProduct"
import Alert from "../common/Alert/Alert"
import { doesProductIncludeSearchText } from "../../utils/doesProductIncludeSearchText"
import { FoodItem } from "../../domain/foodItem"

type Props = {
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
	loading,
	searchText,
	setSearchText,
	handleClick,
	alertMessage,
	result,
}) => {

	if (loading) return <div>Loading...</div>

	return (

		<div>

			{
				!result && <div>No results</div>
			}
			<input
				type="text"
				onChange={(e) => setSearchText(e.target.value)}
				onKeyDown={(e) => e.key === "Enter" && handleClick(e)}
				value={searchText}
			/>
			<button
				type="button"
				onClick={(e) =>
					handleClick(e)
				}
			> Search
			</button>

			{
				alertMessage.type &&
				<Alert type={alertMessage.type} text={alertMessage.text} />
			}

			{
				result && result.map((product: FoodItem) => {
					if (!doesProductIncludeSearchText(product.foodItemName, searchText)) return
					return (
						<ul key={Math.random().toString(36) + Date.now()} className={styles.productList}>
							<FoundProduct product={product} />
						</ul>
					)
				})
			}

		</div >
	)
}

export default SearchApi
