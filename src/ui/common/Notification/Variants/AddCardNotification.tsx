import React, { FC } from "react"
import { CSSTransition } from "react-transition-group"
import styles from "./AddCardNotification.module.css"

type Props = {
	trigger: boolean
	clearTrigger: () => void
	cardWasInFoodSet: boolean
}

const AddCardNotification: FC<Props> = ({ trigger, cardWasInFoodSet, clearTrigger }) => {


	const windowColor = cardWasInFoodSet
		? styles.danger
		: styles.neutral

	const notificationText = cardWasInFoodSet
		? "Already has"
		: "Card has been added"



	return (
		<CSSTransition
			in={trigger}
			timeout={{
				enter: 700,
				exit: 2200,
			}}
			onEntered={clearTrigger}
			classNames={{
				enterActive: styles.notifyEnterActive,
				exitActive: styles.notifyExit,
			}}
			unmountOnExit
		>
			<p className={`${styles.notify} ${windowColor}`}>
				{
					notificationText
				}
			</p>
		</CSSTransition>
	)

}

export default AddCardNotification