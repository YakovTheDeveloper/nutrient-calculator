import { NutrientGroup } from "../../../domain/nutrientGroups"

export function sumThenDeleteExtraVitaminK(vitaminsACDEKObj: NutrientGroup): void {

	vitaminsACDEKObj["Vitamin K"].value =
		vitaminsACDEKObj["Vitamin K (phylloquinone)"].value +
		vitaminsACDEKObj["Vitamin K (Menaquinone-4)"].value +
		vitaminsACDEKObj["Vitamin K (Dihydrophylloquinone)"].value

	delete vitaminsACDEKObj["Vitamin K (phylloquinone)"]
	delete vitaminsACDEKObj["Vitamin K (Dihydrophylloquinone)"]
	delete vitaminsACDEKObj["Vitamin K (Menaquinone-4)"]
}


export function sumThenDeleteExtraVitaminE(vitaminsACDEKObj: NutrientGroup): void {

	vitaminsACDEKObj["Vitamin E"].value =
		vitaminsACDEKObj["Vitamin E (alpha-tocopherol)"].value +
		vitaminsACDEKObj["Vitamin E, added"].value 

	delete vitaminsACDEKObj["Vitamin E (alpha-tocopherol)"]
	delete vitaminsACDEKObj["Vitamin E, added"]
}
