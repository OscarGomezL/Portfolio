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
						setProject((project:number)=> project > 1 ? project - 1 : 5)
					}
				}
			/>
			<img 
				src="/polygon_2.svg" 
				alt=">"
				onClick={
					()=>{
						setProject((project:number)=> project < 5 ? project + 1 : 1)
					}
				}
			/>
		</div>
	)
}