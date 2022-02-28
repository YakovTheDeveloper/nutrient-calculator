import React from "react"
import { quickAccessFood } from "../../quickAccessFood"
import CardOfCardList from "../Card/Variants/CardOfCardList"
import { filterFoodItemsByFavourites } from "../../domain/favouriteFoodItems"
import { useFavouriteStorage } from "../../services/storeAdapter/favouritesStorage"

const FavouriteFoodItems = () => {


	const { favourites } = useFavouriteStorage()

	const favouriteFoodItemsFromTotalList = filterFoodItemsByFavourites(quickAccessFood, favourites)

	console.log(favourites)

	return (
		<div>
			<h3>Favourite food items</h3>
			<button onClick={() => console.log("localStorage", localStorage)}>
				Go
			</button>

			{



				favouriteFoodItemsFromTotalList.map(item =>
					<CardOfCardList
						foodItem={item}
						key={item.foodItemId}
					/>
				)

				// (favouritesLocalStorage && favouritesLocalStorage.length > 0)

				// 	? favouritesToRender?.map(item =>
				// 		<CardOfCardList
				// 			foodItem={item}
				// 			key={item.foodItemId}
				// 		/>
				// 	)
				// 	: null

			}



		</div>
	)
}

export default FavouriteFoodItems