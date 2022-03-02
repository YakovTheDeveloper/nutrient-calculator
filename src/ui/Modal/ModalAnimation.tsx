import React, { FC, useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import styles from "./Modal.module.css"

type Props = {
	animationIn: boolean,
	children: React.ReactChild,
	startAnimation: () => void
}

const ModalAnimation: FC<Props> = ({ children, animationIn, startAnimation }) => {

	useEffect(() => {
		startAnimation()
	}, [])

	return (
		<CSSTransition
			in={animationIn}
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
			{children}
		</CSSTransition>
	)
}

export default ModalAnimation
