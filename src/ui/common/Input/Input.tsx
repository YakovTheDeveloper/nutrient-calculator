import React, { FC } from "react"
import { preventInputChars } from "../../../utils/preventDoingThings/preventInputChars"
import styles from "./Input.module.css"

export type PossibleInputs = "textSearch" | "number" | "text"
// export type InputVariants = "searchProduct" | "edit" | "number"

type Props = {
	type: PossibleInputs
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	value: string | number
	autoFocus?: boolean
	width? : string
} 

const Input: FC<Props> = ({
	type,
	onChange,
	value,
	autoFocus,
	width = "100%",
}) => {
	

	return (
		<input
			autoComplete=""
			type={type === "textSearch" ? "text" : type}
			value={value}
			className={`${styles.input}`}
			style={{width: width}}
			onChange={onChange}
			onKeyDown={
				(e) => preventInputChars(type, e)
			}
			autoFocus={autoFocus}
		/>
	)
}

export default Input