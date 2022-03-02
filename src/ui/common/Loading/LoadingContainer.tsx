import React, { FC, useState } from "react"
import Spinner from "../Spinner/Spinner"

type Props = {
	loading: boolean
	children: React.ReactChild
}

const LoadingContainer: FC<Props> = ({ loading, children }) => {

	if (loading) return (
		<Spinner loading={true} />
	)
	else return (
		<>
			{children}
		</>
	)
}

export default LoadingContainer