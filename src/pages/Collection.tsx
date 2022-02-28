import React from 'react'
import { Outlet } from 'react-router'
import { Collection as CollectionOfFoodSets } from '../ui/Collection/Collection'


const Collection = () => {
	return (
		<>
			<CollectionOfFoodSets />
			<div>234324324234234324</div>
			<Outlet />
		</>
	)
}

export default Collection