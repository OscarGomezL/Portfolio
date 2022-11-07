interface skills_controls {
	setProject:any
}

export default function Controls( { setProject } : skills_controls) {
	return (
		<div className="projects_controls">
			<img 
				src="/polygon_1.svg"
				alt="<"
				onClick={
					()=>{
						setProject((project:number)=> project > 1 ? project - 1 : 6)
					}
				}
			/>
			<img 
				src="/polygon_2.svg" 
				alt=">"
				onClick={
					()=>{
						setProject((project:number)=> project < 6 ? project + 1 : 1)
					}
				}
			/>
		</div>
	)
}