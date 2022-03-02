import styles from "./ProductList.module.css"

type PossibleClasses = {
	base: string,
	column: string
}

const baseClass = `${styles.container}`

export const PRODUCT_LIST_CLASSES: PossibleClasses = {
	base: baseClass,
	column: baseClass + `${styles.column}`
}

