import Image from 'next/future/image'
import ipad from '../../public/snickers/snickers_ipad.png'
import ipad_2 from '../../public/snickers/snickers_ipad2.png'
import phone from '../../public/snickers/snickers_phone.png'

export default function Images() {
	return (
		<div className="projects_images">
			<div className='projects_images_1'>
					<Image
						width={286}
						height={440}
						priority={true}
						src={ipad}
						className="img_projects_1"
					/>
					<Image
						width={158}
						height={321}
						priority={true}
						src={phone}
						className="img_projects_2"
					/>
			</div>
			<div className='projects_images_2'>
					<Image
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