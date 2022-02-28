export const handleEnter = (
	e: React.KeyboardEvent<HTMLInputElement>,
	actionToDo: any
) => {
	e.key === "Enter" && actionToDo()
}