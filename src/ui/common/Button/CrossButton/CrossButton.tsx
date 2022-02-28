import React, { FC } from "react"
import styles from "./CrossButton.module.css"

type Props = {
	onClick: (e: React.MouseEvent) => void
}

const CrossButton: FC<Props> = ({ onClick }) => {
	return (
		<button
			type="button"
			className={styles.btn}
			onClick={onClick}
		>❌</button>
	)
}

export default CrossButton