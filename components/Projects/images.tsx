import Image from 'next/image'
//snickers
import ipad_snickers from '../../public/projects/snickers/snickers_ipad.png'
import ipad_2_snickers from '../../public/projects/snickers/snickers_ipad2.png'
import phone_snickers from '../../public/projects/snickers/snickers_phone.png'
//gameCommerceBackend
import ipad_gameCommerce_backend from '../../public/projects/gameCommerceBackend/snickers_ipad.png'
import ipad_2_gameCommerce_backend from '../../public/projects/gameCommerceBackend/snickers_ipad2.png'
import phone_gameCommerce_backend from '../../public/projects/gameCommerceBackend/snickers_phone.png'
//GameCommerceFrontend
import ipad_gameCommerce_frontend from '../../public/projects/gameCommerceFrontend/snickers_ipad.png'
import ipad_2_gameCommerce_frontend from '../../public/projects/gameCommerceFrontend/snickers_ipad2.png'
import phone_gameCommerce_frontend from '../../public/projects/gameCommerceFrontend/snickers_phone.png'
//betterAmbience
import ipad_betterAmbience from '../../public/projects/betterAmbience/snickers_ipad.png'
import ipad_2_betterAmbience from '../../public/projects/betterAmbience/snickers_ipad2.png'
import phone_betterAmbience from '../../public/projects/betterAmbience/snickers_phone.png'
//daysBetween
import ipad_daysBetween from '../../public/projects/daysBetween/snickers_ipad.png'
import ipad_2_daysBetween from '../../public/projects/daysBetween/snickers_ipad2.png'
import phone_daysBetween from '../../public/projects/daysBetween/snickers_phone.png'
//anotherPomodoro
import ipad_anotherPomodoro from '../../public/projects/anotherPomodoroApp/snickers_ipad.png'
import ipad_2_anotherPomodoro from '../../public/projects/anotherPomodoroApp/snickers_ipad2.png'
import phone_anotherPomodoro from '../../public/projects/anotherPomodoroApp/snickers_phone.png'


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
						src={ipad_snickers}
						className={`img_projects_1  ${project == 1 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://www.snickerspr.com/costarica/#que', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={158}
						height={321}
						priority={true}
						src={phone_snickers}
						className={`img_projects_2  ${project == 1 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://www.snickerspr.com/costarica/#que', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={286}
						height={440}
						priority={true}
						src={ipad_gameCommerce_backend}
						className={`img_projects_1  ${project == 2 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://github.com/OscarGomezL/gameCommerceBackend', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={158}
						height={321}
						priority={true}
						src={phone_gameCommerce_backend}
						className={`img_projects_2  ${project == 2 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://github.com/OscarGomezL/gameCommerceBackend', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={286}
						height={440}
						priority={true}
						src={ipad_gameCommerce_frontend}
						className={`img_projects_1  ${project == 3 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://game-commerce.vercel.app/', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={158}
						height={321}
						priority={true}
						src={phone_gameCommerce_frontend}
						className={`img_projects_2  ${project == 3 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://game-commerce.vercel.app/', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={286}
						height={440}
						priority={true}
						src={ipad_betterAmbience}
						className={`img_projects_1  ${project == 4 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://better-ambience.vercel.app/', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={158}
						height={321}
						priority={true}
						src={phone_betterAmbience}
						className={`img_projects_2  ${project == 4 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://better-ambience.vercel.app/', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={286}
						height={440}
						priority={true}
						src={ipad_daysBetween}
						className={`img_projects_1  ${project == 5 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://days-between.vercel.app/', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={158}
						height={321}
						priority={true}
						src={phone_daysBetween}
						className={`img_projects_2  ${project == 5 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://days-between.vercel.app/', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={286}
						height={440}
						priority={true}
						src={ipad_anotherPomodoro}
						className={`img_projects_1  ${project == 6 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://another-pomodoro-app.vercel.app/', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={158}
						height={321}
						priority={true}
						src={phone_anotherPomodoro}
						className={`img_projects_2  ${project == 6 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://another-pomodoro-app.vercel.app/', '_blank')}}
					/>
			</div>
			<div className='projects_images_2'>
					<Image
						alt='snickers_image'
						width={440}
						height={286}
						priority={true}
						src={ipad_2_snickers}
						className={`img_projects_3  ${project == 1 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://www.snickerspr.com/costarica/#que', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={440}
						height={286}
						priority={true}
						src={ipad_2_gameCommerce_backend}
						className={`img_projects_3  ${project == 2 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://github.com/OscarGomezL/gameCommerceBackend', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={440}
						height={286}
						priority={true}
						src={ipad_2_gameCommerce_frontend}
						className={`img_projects_3  ${project == 3 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://game-commerce.vercel.app/', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={440}
						height={286}
						priority={true}
						src={ipad_2_betterAmbience}
						className={`img_projects_3  ${project == 4 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://better-ambience.vercel.app/', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={440}
						height={286}
						priority={true}
						src={ipad_2_daysBetween}
						className={`img_projects_3  ${project == 5 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://days-between.vercel.app/', '_blank')}}
					/>
					<Image
						alt='snickers_image'
						width={440}
						height={286}
						priority={true}
						src={ipad_2_anotherPomodoro}
						className={`img_projects_3  ${project == 6 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://another-pomodoro-app.vercel.app/', '_blank')}}
					/>
			</div>
		</div>
	)
}