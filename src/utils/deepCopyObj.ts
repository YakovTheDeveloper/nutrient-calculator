export function deepCopyObj(obj: any): any{
	return JSON.parse(JSON.stringify(obj))
}