import React, { FC, useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import styles from "./FoodSet.module.css"
import { FoodItem } from "../../domain/foodItem"
import CardOfFoodSet from "../Card/Variants/CardOfFoodSet"
import { useFoodSetStorage } from "../../services/storeAdapter"
import OpenFoodSetButton from "./OpenFoodSetButton/OpenFoodSetButton"
import SaveFoodSetForm from "./SaveFoodSetForm/SaveFoodSetForm"

const FoodSet: FC = () => {

	const { foodSet } = useFoodSetStorage()
	const [isFoodSetOpen, setIsFoodSetOpen] = useState<boolean>(false)
	const [animateProductsBtn, setAnimateProductsBtn] = useState(false)


	//  Error: Can't perform a React state update on an unmounted component
	// useEffect(() => {
	// 	setAnimateProductsBtn(true)
	// }, [foodSet.length])

	return (

		<>
			<CSSTransition
				in={isFoodSetOpen}
				timeout={{ enter: 500, exit: 800 }}
				classNames={{
					enterActive: styles.foodSetActive,
					exitActive: styles.foodSetExit,
				}}
				unmountOnExit
			>
				<div className={styles.container}>
					<header className={styles.row}>
						<SaveFoodSetForm />
						<p className={styles.count}>Products: {foodSet.length}</p>
					</header>


					<ul className={styles.list}>
						<h2>
							{
								foodSet.length === 0 &&
								<>
									The list is empty. <br />
									Start fill it by clicking the product cards.
								</>
							}
						</h2>

						{foodSet.map((item: FoodItem) =>
							<CardOfFoodSet
								foodItem={item}
								key={item.foodItemId}
							/>
						)}
					</ul>
				</div>
			</CSSTransition>

			<OpenFoodSetButton
				trigger={animateProductsBtn}
				isFoodSetOpen={isFoodSetOpen}
				toggleFoodSet={() => setIsFoodSetOpen(prev => !prev)}
			/>
		</>
	)
}

export default FoodSet
