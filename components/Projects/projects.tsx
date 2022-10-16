import Number from "./number"
import Info from "./info"
import Controls from "./controls"
import Title from "./title"
import Images from "./images"

export default function Projects() {
	return (
		<section className="container projects">
			<div className="projects_container_1">
				<Number/>
				<Info/>
				<Title/>
				<Controls/>
			</div>
			<div className="projects_container_2">
				<Images/>
			</div>
		</section>
	)
}