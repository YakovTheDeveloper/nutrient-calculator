import React, { FC } from "react"
import styles from "./Modal.module.css"

type Props = {
	closeModal: any
}

const Modal: FC<Props> = ({ children, closeModal }) => {

	return (
		<div
			className={styles.modal}
			onClick={closeModal}
		>
			<div className={styles.inner} onClick={(e) => e.stopPropagation()}>
				<button onClick={closeModal} className={styles.closeBtn}>x</button>
				{
					children
				}
			</div>
		</div>
	)
	

}

export default Modal
