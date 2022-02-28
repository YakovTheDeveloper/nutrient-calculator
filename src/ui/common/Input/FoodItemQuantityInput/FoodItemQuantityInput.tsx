import React, { FC } from "react"
import { preventInputChars } from "../../../../utils/preventDoingThings/preventInputChars"
import styles from "./FoodItemQuantityInput.module.css"

export type PossibleInputs = "textSearch" | "number" | "text"
// export type InputVariants = "searchProduct" | "edit" | "number"

type Props = {
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	value: string | number
	autoFocus?: boolean
}

const FoodItemQuantityInput: FC<Props> = ({
	onChange,
	value,
	autoFocus,
}) => {

	const valueWithoutLeadingZero = Number(value).toString()
	

	return (
		<input
			type="number"
			value={valueWithoutLeadingZero}
			className={`${styles.input}`}
			onChange={onChange}
			onKeyDown={
				(e) => preventInputChars("number", e)
			}
			autoFocus={autoFocus}
		/>
	)
}

export default FoodItemQuantityInput