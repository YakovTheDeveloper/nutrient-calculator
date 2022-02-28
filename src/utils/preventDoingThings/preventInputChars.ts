import { PossibleInputs } from "../../ui/common/Input/Input"

export const preventInputChars = (
	inputType: PossibleInputs,
	e: React.KeyboardEvent<HTMLInputElement>
) => {

	let invalidKeys: string[] = []

	if (inputType === "textSearch") {
		invalidKeys = [
			"1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
		]
	}

	if (inputType === "number") {
		invalidKeys = [
			"e", "+", "-"
		]
	}

	if (inputType === "text") {
		return
	}

	if (invalidKeys.includes(e.key)) e.preventDefault()
}


