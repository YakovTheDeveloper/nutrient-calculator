import React, { FC } from "react"
import styles from "./GearButton.module.css"

type Props = {
	onClick: any
}

const GearButton: FC<Props> = ({ onClick }) => {
	return (
		<button
			className={styles.btn}
			onClick={onClick}
		>⚙︎</button>
	)
}

export default GearButton