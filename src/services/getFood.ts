import axios from "axios"


export async function getFood(url: string) {

	let result: any

	await axios.get(url)
		.then(function (response) {
			// handle success


			const data = response.data.foods

			const foundFood = data.filter((obj: any) => {
				return obj.foodNutrients.length === 65
			})

			const nutrients = foundFood.map((obj: any) => {

				const shortNutrients = obj.foodNutrients.map((nutrientObj: any) => {
					return {
						nutrientName: nutrientObj.nutrientName,
						value: nutrientObj.value,
						unitName: nutrientObj.unitName
					}
				})

				const object = {
					description: obj.description,
					foodNutrients: shortNutrients

				}


				return object

			})

			result = nutrients



		})
		.catch(function (error) {
			// handle error
			console.log(error)
		})

	return result
}