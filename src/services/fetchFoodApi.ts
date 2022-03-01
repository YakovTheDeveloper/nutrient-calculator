import axios from "axios"
import qs from "qs"

export async function fetchFoodApi(searchText: string): Promise<any> {

	const apiKey = "xo4SMFBHfNIDCh48ROLqbJZDNXqDNArn4E4Rhytf"
	const config = {
		baseURL: "https://api.nal.usda.gov/fdc/v1/foods",
		params: {
			dataType: ["Survey (FNDDS)", "SR Legacy", "Foundation"],
			query: searchText,
			pageSize: 300,
			sortBy: "lowercaseDescription.keyword",
			requireAllWords: true
		},
		paramsSerializer: (params: any) => {
			return qs.stringify(params)
		},
	}

	return await axios.get(`/search?api_key=${apiKey}`, config)
		.then(res => res.data.foods).catch(reason => alert(reason))

}