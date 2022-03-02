import React, { FC, useEffect } from "react"
import { PRODUCT_LIST_CLASSES } from "./constants"
import styles from "./ProductList.module.css"

type directions = "row" | "column"

type Props = {
	children: any
	column?: boolean
	direction?: directions
}

// type PossibleClasses = {
// 	base: string,
// 	column: string
// }




const ProductList: FC<Props> = ({ column, children }) => {

	let totalClasses = PRODUCT_LIST_CLASSES.base

	if (column) totalClasses += PRODUCT_LIST_CLASSES.column

	return (
		<ul className={totalClasses}>
			{children}
		</ul>
	)
}

export default ProductList


