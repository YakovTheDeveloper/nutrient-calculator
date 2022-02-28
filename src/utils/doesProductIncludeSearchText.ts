export function doesProductIncludeSearchText(productName: string, searchText: string): boolean {
	return productName.toLowerCase().includes(searchText.toLowerCase())
}