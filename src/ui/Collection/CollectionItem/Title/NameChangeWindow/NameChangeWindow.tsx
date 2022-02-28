import React, { FC, useRef, useState } from "react"
import Input from "../../../../common/Input/Input"
import { CollectionItem } from "../../../../../domain/collection/CollectionItem"
import styles from "./NameChangeWindow.module.css"
import { CSSTransition } from "react-transition-group"
import { useChangeCollectionItemName } from "../../../../../application/collectionOfFoodSets/changeCollectionItemName"

type Props = {
	isShow: boolean
	collectionItem: CollectionItem
	hide: () => void

}

const NameChangeWindow: FC<Props> = ({ isShow, collectionItem, hide }) => {

	const { changeCollectionItemName } = useChangeCollectionItemName()
	const inputRef = useRef<HTMLInputElement>(null)

	const clickHandler = () => {
		if (inputRef.current) {

			const newName = inputRef.current.value
			if (newName) {
				changeCollectionItemName(newName, collectionItem)
				inputRef.current.value = ""
				hide()
			}
		}
	}


	return (

		<div className={styles.reservedSpace}>
			<CSSTransition
				in={isShow}
				timeout={{
					enter: 500,
					exit: 500,
				}}
				classNames={{
					enterActive: styles.enterActive,
					exitActive: styles.exitActive,
				}}
				unmountOnExit
			>

				<div className={styles.container}>
					<input
						type="text"
						onKeyDown={(e) => e.key === "Enter" && clickHandler()}
						ref={inputRef}
						autoFocus={true}
					/>
					<button onClick={clickHandler}>
						Change name
					</button>
				</div>

			</CSSTransition>
		</div>
	)

}

export default NameChangeWindow