import React, { FC, useState } from "react"
import { preventInputChars } from "../../../utils/preventDoingThings/preventInputChars"
import CrossButton from "../../common/Button/CrossButton/CrossButton"
import styles from "./FoodSearchInput.module.css"

type Props = {
	value: string
	changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
	clearSearchText: () => void
	actionOnEnterKey?: (e: any) => void
	hasSearchButton?: boolean
	searchHandler?: (e?: any) => void
}
const FoodSearchInput: FC<Props> = ({
	value,
	changeHandler,
	clearSearchText,
	actionOnEnterKey,
	hasSearchButton,
	searchHandler
}) => {
	
	const [hasFocus, setFocus] = useState(false)

	const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		preventInputChars("textSearch", e)
		actionOnEnterKey &&
			e.key === "Enter" && actionOnEnterKey(e)
	}
	return (
		<div className={styles.container}>
			<div className={styles.inputContainer}>
				<input
					className={styles.input}
					type="text"
					onChange={changeHandler}
					value={value}
					autoFocus={true}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					onKeyDown={onKeyDownHandler}
				/>
				{
					value &&
					<div className={styles.buttonContainer}>
						<CrossButton onClick={clearSearchText} />
					</div>
				}
			</div>

			{
				hasSearchButton &&
				<button
					className={`${styles.btn} ${hasFocus ? styles.btnFocused : ""}`}
					type="button"
					onClick={searchHandler}
				> Search
				</button>
			}

		</div>
	)
}

export default FoodSearchInput

