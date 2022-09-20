import React from "react"
import Name from './name'
import Occupation from './ocuppation'

export default function Hero() {
	return (
		<div className="container hero">
			<Name/>
			<Occupation/>
		</div>
	)
}