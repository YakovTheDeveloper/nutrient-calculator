import { nutrientsDailyIntakeLowerCase } from "../domain/totalNutrients"

export function doesNutrientSearchOccur(text: string): boolean {
	const keysArr = Object.keys(nutrientsDailyIntakeLowerCase)
	return text.includes("rich in ") && keysArr.some((key: string) => text.includes(key))
}