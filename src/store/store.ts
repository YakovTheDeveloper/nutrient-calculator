import { configureStore } from "@reduxjs/toolkit"
import foodSetReducer from "./features/foodSetSlice"
import nutrientTableReducer from "./features/nutrientTableSlice"
import collectionOfSetsReducer from "./features/collectionOfSetsSlice"
import modalsSliceReducer from "./features/modal/modalsSlice"
import  favouritesSliceReducer from "./features/favouritesSlice"
import searchSliceReducer from "./features/search/searchSlice"
import apiSearchSliceReducer from "./features/search/apiSearchSlice"

export const store = configureStore({
	reducer: {
		foodSet: foodSetReducer,
		nutrientTable: nutrientTableReducer,
		collectionOfSets: collectionOfSetsReducer,

		searchText: searchSliceReducer,
		apiSearch: apiSearchSliceReducer,

		modals: modalsSliceReducer,
		favourites: favouritesSliceReducer,
	},
})



export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch