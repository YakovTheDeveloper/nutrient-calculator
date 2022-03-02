import React, { FC } from "react"
import styles from "./Spinner.module.css"

type Props = {
	loading: boolean
}

const Spinner: FC<Props> = ({ loading }) => {
	if (loading)
		return (
			<div className={styles.container}>
				<div className={styles.loader}></div>
				<p className={styles.text}>Loading...</p>
			</div>
		)
	else return null
}

export default Spinner