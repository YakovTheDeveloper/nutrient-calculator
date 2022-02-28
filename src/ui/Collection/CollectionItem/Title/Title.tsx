import React, { FC, useState } from "react"
import styles from "./Title.module.css"
import GearButton from "../../../common/Button/GearButton"
import { CollectionItem } from "../../../../domain/collection/CollectionItem"
import NameChangeWindow from "./NameChangeWindow/NameChangeWindow"

type Props = {
	item: CollectionItem
}

const Title: FC<Props> = ({ item }) => {

	const [isChangeNameModalOpen, setIsChangeNameModalOpen] = useState(false)

	return (
		<div className={styles.container}>

			<h3 className={styles.collectionItemName}>
				<span className={styles.text}>
					{item.name ? item.name : "No name set"}
				</span>
				<GearButton onClick={() => setIsChangeNameModalOpen(prev => !prev)} />
			</h3>


			<NameChangeWindow
				isShow={isChangeNameModalOpen}
				hide={() => setIsChangeNameModalOpen(false)}
				collectionItem={item}
			/>

		</div>
	)
}

export default Title