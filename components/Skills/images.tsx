import Image from 'next/future/image'
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
			<Image src={Html} />
			<Image src={Css} />
			<Image src={Bootstrap} />
			<Image src={Javascript} />
			<Image src={Reactjs} />
			<Image src={Redux} />
			<Image src={Graphql} />
			<Image src={Typescript} />
			<Image src={Nextjs} />
			<Image src={Nodejs} />
		</div>
	)
}