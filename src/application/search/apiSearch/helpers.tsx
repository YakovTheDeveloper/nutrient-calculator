import { Checkboxes, FilterWords } from "./types"

const filterWords: FilterWords = {
	withoutBabyfood: " -babyfood -baby",
	raw: " raw"
}

export function createTotalStringOfFilterWords(totalCheckBoxes: Checkboxes){
	let resultString = ""
	for (const checkboxData in totalCheckBoxes) {

		const checkboxKey = checkboxData as keyof Checkboxes
		const isChecked: boolean = totalCheckBoxes[checkboxKey]
		if (isChecked) {
			resultString += filterWords[checkboxKey]
		}
	}
	return resultString
}










