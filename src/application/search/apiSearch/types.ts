export type FilterWords = {
	[groupName in keyof Checkboxes]: string
}

export type Checkboxes = {
	withoutBabyfood: boolean,
	raw: boolean
}

export type CheckboxNames = keyof Checkboxes