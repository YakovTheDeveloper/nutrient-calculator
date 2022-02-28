export function payApi(data: any) {
	
	return new Promise((res) => setTimeout(() => res(Math.random() > 0.5), 2000))

}