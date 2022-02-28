import axios from "axios"


type apiResponse = {
	total: number,
	total_pages: number,
	results: any,
}

export async function fetchPicByTextApi(userText: string) {
	const queryText = encodeURIComponent(userText.trim())

	const baseUrl = "https://api.unsplash.com/search/photos?query="
	return axios.get(queryText, {
		baseURL: baseUrl,
		headers: {
			"Authorization": "Client-ID s10fovHyHs5Kf8DkRN5NZUEf03epB0GoysHjGw6s-dQ"
		}
	}).then(res => {
		return (
			[
				res?.data.results[0].urls.small,
				res?.data.results[1].urls.small,
				res?.data.results[2].urls.small
			]
		)
	})
}