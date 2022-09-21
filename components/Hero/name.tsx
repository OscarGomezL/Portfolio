import React, {useState, useEffect} from "react"

export default function Name() {
	return (
		<React.Fragment>
			<div className={`hero_name_name name_inited`}>
				Óscar
			</div>
			<div className="hero_name_lastname lastname_inited">
				Gómez
			</div>
		</React.Fragment>
	)
}