export function setProgressLineStyle(percent: number) {
	const resultPercents = percent > 100 ? 100 : percent
	let color = ""

	if (percent >= 70) color = "#66ff66"
	else if (percent <= 30) color = "#ff3300"
	else color = "#ffff00"

	const style = {
		width: resultPercents + "%",
		backgroundColor: color
	}

	return style
}