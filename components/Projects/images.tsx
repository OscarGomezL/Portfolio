import Image from 'next/image'
import ipad from '../../public/projects/snickers/snickers_ipad.png'
import ipad_2 from '../../public/projects/snickers/snickers_ipad2.png'
import phone from '../../public/projects/snickers/snickers_phone.png'

interface skills_images {
	project : number,
}

export default function Images( {project} : skills_images ) {
	return (
		<div className="projects_images">
			<div className='projects_images_1'>
					<Image
						alt='snickers_image'
						width={286}
						height={440}
						priority={true}
						src={ipad}
						className="img_projects_1"
					/>
					<Image
						alt='snickers_image'
						width={158}
						height={321}
						priority={true}
						src={phone}
						className="img_projects_2"
					/>
			</div>
			<div className='projects_images_2'>
					<Image
						alt='snickers_image'
						width={440}
						height={286}
						priority={true}
						src={ipad_2}
						className="img_projects_3"
					/>
			</div>
		</div>
	)
}