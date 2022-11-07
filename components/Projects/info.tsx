interface skills_info {
	project : number,
	projects: {
		[key:number] : {
			number:string,
			info:{
				title:string,
				technologies: string[],
				description: string
			},
			title:string
		}
	}
}

export default function Info( {project, projects} : skills_info) {
	return (
		<div className="projects_info">
			<div className="projects_info_title">
				{projects[project].info.title}
			</div>
			<div className="projects_info_technologies">
				{projects[project].info.technologies.join(' ∙ ')}
			</div>
			<div className="projects_info_description">
				{projects[project].info.description} 
			</div>
		</div>
	)
}