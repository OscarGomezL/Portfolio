import { useState } from "react"
import getProjects from '../../data/projects'
import Number from "./number"
import Info from "./info"
import Controls from "./controls"
import Title from "./title"
import Images from "./images"

interface projects {
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

export default function Projects() {
	const [project, setProject]:[number, any] = useState(1)
	const projects:projects = getProjects()
	return (
		<section className="container projects">
			<div className="projects_container_1">
				<Number project={ project } />
				<Info project={ project } projects={projects } />
				<Title project={ project } projects={ projects } />
				<Controls setProject={ setProject } />
			</div>
			<div className="projects_container_2">
				<Images project={project} />
			</div>
		</section>
	)
}