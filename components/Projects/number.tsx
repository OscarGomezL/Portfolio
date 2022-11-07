interface skills_number {
	project : number,
}

export default function Number( {project} : skills_number ) {
	return (
		<div className="projects_number">
			0{project}
		</div>
	)
}