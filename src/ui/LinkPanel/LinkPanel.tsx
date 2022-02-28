import React from "react"
import { Link, NavLink } from "react-router-dom"
import styles from "./LinkPanel.module.css"

const LinkPanel = () => {

	const isActive = (navData: any) =>
		(navData.isActive ? `${styles.active} ${styles.link}` : `${styles.link}`)

	return (
		<div className={styles.container}>
			<NavLink to="/" className={isActive}>
				Food selection
			</NavLink>

			<NavLink to="collection" className={isActive}>
				My Collection
			</NavLink>

			<NavLink to="/searchApi" className={isActive}>
				searchApi
			</NavLink>

			<NavLink to="support" className={isActive}>
				Support Author
			</NavLink>

			<NavLink to="favourites" className={isActive}>
				Favourite foods
			</NavLink>
		</div>
	)
}

export default LinkPanel
