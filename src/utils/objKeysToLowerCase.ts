export function objKeysToLowerCase(object: any) {
	const copy = Object.keys(object).reduce((newObj: any, key: string) => {
		newObj[key.toLowerCase()] = object[key]
		return newObj
	}, {})
	return copy
}



