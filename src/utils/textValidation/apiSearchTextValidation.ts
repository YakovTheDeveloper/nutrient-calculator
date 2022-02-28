export const validationSearchApiText = (text: string): string => {
	if (!text) return "Enter product name"
	else if (text.length < 2) return "Product name must be at least 2 letters long"
	else return "ok"
}