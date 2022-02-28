import React, { FC, useState, useEffect } from "react"
import styles from "./FoundProduct.module.css"
import { useAddFoodItemToFoodSet } from "../../../application/addFoodItemToFoodSet"
import { useNutrientGroupsModalInteractor } from "../../../application/modal/modalsInteractor"
import { FoodItem } from "../../../domain/foodItem"


type Props = {
	product: FoodItem
}

const FoundProduct: FC<Props> = ({ product }) => {
	const [showInfo, setShowInfo] = useState(false)
	const [fetchedPic, setFetchedPic] = useState<any>("")
	const { addFoodItemToFoodSet } = useAddFoodItemToFoodSet()



	useEffect(() => {
		if (!showInfo) return
		if (fetchedPic) return

		// (async () => {
		// 	fetchPicByTextApi(product.description).then(result => setArr(result))
		// })()

	}, [showInfo])

	const clickHandler = () => {
		// open modal
		console.log("object")
	}

	return (
		<li
			className={styles.listItem}
			onClick={clickHandler}
		>
			{product.foodItemName}

			<button onClick={(e) => {
				console.log(product)
				return null
			}}>
				SAVEtoCONSOLE
			</button>

			<button onClick={() => addFoodItemToFoodSet(product)}>
				Add to my Food Set
			</button>
		</li>
	)
}

export default FoundProduct
