// import { Provider } from "./services/store"
import CardList from "./ui/CardList/CardList"
import CardSearch from "./ui/CardSearch/CardSearch"
import NutrientTable from "./ui/NutrientTable/NutrientTable"
import FoodSet from "./ui/FoodSet/FoodSet"
import { Collection } from "./ui/Collection/Collection"
import {
	Routes,
	Route,
	Link,
	useRoutes,
	Outlet
} from "react-router-dom"
import React, { useEffect } from "react"
import LinkPanel from "./ui/LinkPanel/LinkPanel"
import SupportAuthorModal from "./ui/SupportAuthor/SupportAuthorModal"
import SearchApiContainer from "./ui/SearchApi/SearchApiContainer"
import FavouriteFoodItems from "./ui/Favourites/FavouriteFoodItems"
import { useUpdateFavouritesWithLocalStorageIds } from "./application/favourites/favouritesInteractor"
import PossibleModals from "./ui/Modal/PossibleModals"


function App() {

	const { updateFavouritesWithLocalStorageIds } = useUpdateFavouritesWithLocalStorageIds()

	useEffect(() => {
		updateFavouritesWithLocalStorageIds()
	}, [])


	return (
		<div className="container">

			<LinkPanel />
			<PossibleModals/>




			<Routes>
				<Route path="/" element={
					<>
						<CardSearch />
						<CardList />
						<FoodSet />
						<NutrientTable />
					</>
				} />
				<Route path="collection" element={
					<Collection />

				} />
				<Route path="support" element={
					<SupportAuthorModal />

				} />
				<Route path="searchApi" element={
					<SearchApiContainer />

				} />
				<Route path="favourites" element={
					<FavouriteFoodItems />

				} />
			</Routes>
		</div>
	)
}

export default App
