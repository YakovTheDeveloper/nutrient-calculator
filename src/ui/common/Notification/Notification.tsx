import React, { FC } from "react"
import { CSSTransition } from "react-transition-group"
import styles from "./Notification.module.css"

type Props = {
	text: string
	trigger: boolean
	suitableClass: string
	clearTriggerOnEnter: any
}

const _Notification: FC<Props> = ({ text, trigger, suitableClass, clearTriggerOnEnter }) => {

	return (
		<CSSTransition
			in={trigger}
			timeout={{
				enter: 700,
				exit: 2200,
			}}
			onEnter={clearTriggerOnEnter}
			classNames={{
				enterActive: styles.notifyEnterActive,
				exitActive: styles.notifyExit,
			}}
			unmountOnExit
		>
			<p
				className={`${styles.notify} ${styles[suitableClass]}`}
			>
				{text}
			</p>
		</CSSTransition>
	)
}

export default _Notification