import React, { FC } from "react"
import styles from "./Alert.module.css"

type Props = {
	type: string,
	text: string
}

const Alert:FC<Props> = ({type, text}) => {
	return (
		<div
			className={
				// type === "danger" ? styles.danger : "" ||
				// type === "notify" ? styles.danger : ""
				` ${styles.alert}
				${type === "danger" ? `${styles.danger}` : ""}
				${type === "primary" ? `${styles.primary}` : ""}`
				
			}
		>
			{text}
		</div>
	)
}

export default Alert
