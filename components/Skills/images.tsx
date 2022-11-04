import Image from 'next/image'
//bootstrap, css, graphql, html, javascript, nextjs, nodejs, react, redux, typescript
import Bootstrap from '../../public/technologies/bootstrap.svg'
import Css from '../../public/technologies/css.svg'
import Graphql from '../../public/technologies/graphql.svg'
import Html from '../../public/technologies/html.svg'
import Javascript from '../../public/technologies/javascript.svg'
import Nextjs from '../../public/technologies/nextjs.svg'
import Nodejs from '../../public/technologies/nodejs.svg'
import Reactjs from '../../public/technologies/react.svg'
import Redux from '../../public/technologies/redux.svg'
import Typescript from '../../public/technologies/typescript.svg'

export default function Images() {
	return (
		<div className="skills_images">
			<Image alt="html" src={Html} className="skill_image_1 skill_image"/>
			<Image alt="css" src={Css} className="skill_image_2 skill_image"/>
			<Image alt="bootstrap" src={Bootstrap} className="skill_image_3 skill_image"/>
			<Image alt="javascript" src={Javascript} className="skill_image_4 skill_image"/>
			<Image alt="reactjs" src={Reactjs} className="skill_image_5 skill_image"/>
			<Image alt="redux" src={Redux} className="skill_image_6 skill_image"/>
			<Image alt="graphql" src={Graphql} className="skill_image_7 skill_image"/>
			<Image alt="typescript" src={Typescript} className="skill_image_8 skill_image"/>
			<Image alt="nextjs" src={Nextjs} className="skill_image_9 skill_image"/>
			<Image alt="nodejs" src={Nodejs} className="skill_image_10 skill_image"/>
		</div>
	)
}