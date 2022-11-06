import React from "react"
import localFont from "@next/font/local"

const Antonella = localFont({src:"../../assets/font/Antonella/Antonella.ttf"})
export default function Name() {
	return (
		<React.Fragment>
			<div className={`hero_name_name name_inited ${Antonella.className}`}>
				Óscar
			</div>
			<div className={`hero_name_lastname lastname_inited ${Antonella.className}`}>
				Gómez
			</div>
		</React.Fragment>
	)
}