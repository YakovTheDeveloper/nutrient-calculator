import React, { FC, useState } from "react"
import _Notification from "./Notification"

export type PossibleTypes = "danger" | "neutral"

type Props = {
	trigger: boolean
	clearTrigger: (value: React.SetStateAction<boolean>) => void
	type: PossibleTypes
	text: string
}

export const NotificationContainer: FC<Props> = ({ text, trigger, clearTrigger, type }) => {


	const suitableClassName = type

	const clearTriggerOnEnter = () => setTimeout(clearTrigger, 2200)



	return <_Notification
		text={text}
		trigger={trigger}
		suitableClass={suitableClassName}
		clearTriggerOnEnter={clearTriggerOnEnter}
	/>
}




