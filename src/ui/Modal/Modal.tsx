import React, { FC, useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"
import ModalAnimation from "./ModalAnimation"
import styles from "./Modal.module.css"

type Props = {
	closeModal: () => void
	isModalOpen?: boolean
}

const Modal: FC<Props> = ({ children, closeModal, isModalOpen }) => {
	const [animation, setAnimation] = useState(false)

	const closeHandler = () => {
		setAnimation(false)
		const timer = setTimeout(() => closeModal(), 450)
		return () => clearTimeout(timer)
	}

	return (
		<ModalAnimation
			animationIn={animation}
			startAnimation={() => setAnimation(true)}
		>
			<div
				className={styles.modal}
				onClick={closeHandler}
			>
				<div className={styles.inner} onClick={(e) => e.stopPropagation()}>
					<button onClick={closeHandler} className={styles.closeBtn}>x</button>
					{
						children
					}
				</div>
			</div>
		</ModalAnimation>
	)
}

export default Modal
