interface skills_title {
	project:number,
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

export default function Title( {project, projects} : skills_title ) {
	return (
		<div className="projects_title">
			{projects[project].title}
		</div>
	)
}