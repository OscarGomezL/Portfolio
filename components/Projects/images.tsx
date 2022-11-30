import Image from 'next/image'
import { useState } from 'react'
//snickers
import ipad_snickers from '../../public/projects/snickers/snickers_ipad.png'
import ipad_2_snickers from '../../public/projects/snickers/snickers_ipad2.png'
import phone_snickers from '../../public/projects/snickers/snickers_phone.png'
import ipad_snickers_hovered from '../../public/projects/snickers/snickers_ipad_hover.png'
import ipad_2_snickers_hovered from '../../public/projects/snickers/snickers_ipad2_hover.png'
import phone_snickers_hovered from '../../public/projects/snickers/snickers_phone_hover.png'
//gameCommerceBackend
import ipad_gameCommerce_backend from '../../public/projects/gameCommerceBackend/gameCommerceB_ipad.png'
import ipad_2_gameCommerce_backend from '../../public/projects/gameCommerceBackend/gameCommerceB_ipad2.png'
import phone_gameCommerce_backend from '../../public/projects/gameCommerceBackend/gameCommerceB_phone.png'
//GameCommerceFrontend
import ipad_gameCommerce_frontend from '../../public/projects/gameCommerceFrontend/gameCommerceF_ipad.png'
import ipad_2_gameCommerce_frontend from '../../public/projects/gameCommerceFrontend/gameCommerceF_ipad2.png'
import phone_gameCommerce_frontend from '../../public/projects/gameCommerceFrontend/gameCommerceF_phone.png'
import ipad_gameCommerce_frontend_hovered from '../../public/projects/gameCommerceFrontend/gameCommerceF_ipad_hover.png'
import ipad_2_gameCommerce_frontend_hovered from '../../public/projects/gameCommerceFrontend/gameCommerceF_ipad2_hover.png'
import phone_gameCommerce_frontend_hovered from '../../public/projects/gameCommerceFrontend/gameCommerceF_phone_hover.png'
//betterAmbience
import ipad_betterAmbience from '../../public/projects/betterAmbience/betterAmbience_ipad.png'
import ipad_2_betterAmbience from '../../public/projects/betterAmbience/betterAmbience_ipad2.png'
import phone_betterAmbience from '../../public/projects/betterAmbience/betterAmbience_phone.png'
//daysBetween
//import ipad_daysBetween from '../../public/projects/daysBetween/daysBetween_ipad.png'
//import ipad_2_daysBetween from '../../public/projects/daysBetween/daysBetween_ipad2.png'
//import phone_daysBetween from '../../public/projects/daysBetween/daysBetween_phone.png'
import ipad_daysBetween_hovered from '../../public/projects/daysBetween/daysBetween_ipad_hover.png'
import ipad_2_daysBetween_hovered from '../../public/projects/daysBetween/daysBetween_ipad2_hover.png'
import phone_daysBetween_hovered from '../../public/projects/daysBetween/daysBetween_phone_hover.png'
//anotherPomodoro
import ipad_anotherPomodoro from '../../public/projects/anotherPomodoroApp/snickers_ipad.png'
import ipad_2_anotherPomodoro from '../../public/projects/anotherPomodoroApp/snickers_ipad2.png'
import phone_anotherPomodoro from '../../public/projects/anotherPomodoroApp/snickers_phone.png'


interface skills_images {
	project : number,
}

export default function Images( {project} : skills_images ) {
	const [hovered, setHovered]:[boolean,any] = useState(false)
	return (
		<div className="projects_images">
			<div className='projects_images_1'>
					<Image
						alt='snickers_image'
						width={286}
						height={440}
						priority={true}
						src={hovered ? ipad_snickers_hovered : ipad_snickers}
						className={`img_projects_1  ${project == 1 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://www.snickerspr.com/costarica/#que', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={158}
						height={321}
						priority={true}
						src={hovered ? phone_snickers_hovered : phone_snickers}
						className={`img_projects_2  ${project == 1 ? "img_projects_inited" : ""} ${hovered ? 'img_projects_hovered' : ""}`}
						onClick={()=>{window.open('https://www.snickerspr.com/costarica/#que', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={286}
						height={440}
						priority={true}
						src={ipad_gameCommerce_backend}
						className={`img_projects_1  ${project == 2 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://github.com/OscarGomezL/gameCommerceBackend', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={158}
						height={321}
						priority={true}
						src={phone_gameCommerce_backend}
						className={`img_projects_2  ${project == 2 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://github.com/OscarGomezL/gameCommerceBackend', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={286}
						height={440}
						priority={true}
						src={hovered ? ipad_gameCommerce_frontend_hovered : ipad_gameCommerce_frontend}
						className={`img_projects_1  ${project == 3 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://game-commerce.vercel.app/', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={158}
						height={321}
						priority={true}
						src={hovered ? phone_gameCommerce_frontend_hovered : phone_gameCommerce_frontend}
						className={`img_projects_2  ${project == 3 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://game-commerce.vercel.app/', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={286}
						height={440}
						priority={true}
						src={ipad_betterAmbience}
						className={`img_projects_1  ${project == 4 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://better-ambience.vercel.app/', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={158}
						height={321}
						priority={true}
						src={phone_betterAmbience}
						className={`img_projects_2  ${project == 4 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://better-ambience.vercel.app/', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={286}
						height={440}
						priority={true}
						src={hovered ? ipad_daysBetween_hovered : ipad_daysBetween_hovered}
						className={`img_projects_1  ${project == 5 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://days-between.vercel.app/', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={158}
						height={321}
						priority={true}
						src={hovered ? phone_daysBetween_hovered : phone_daysBetween_hovered}
						className={`img_projects_2  ${project == 5 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://days-between.vercel.app/', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={286}
						height={440}
						priority={true}
						src={ipad_anotherPomodoro}
						className={`img_projects_1  ${project == 6 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://another-pomodoro-app.vercel.app/', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={158}
						height={321}
						priority={true}
						src={phone_anotherPomodoro}
						className={`img_projects_2  ${project == 6 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://another-pomodoro-app.vercel.app/', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
			</div>
			<div className='projects_images_2'>
					<Image
						alt='snickers_image'
						width={440}
						height={286}
						priority={true}
						src={hovered ? ipad_2_snickers_hovered : ipad_2_snickers}
						className={`img_projects_3  ${project == 1 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://www.snickerspr.com/costarica/#que', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={440}
						height={286}
						priority={true}
						src={ipad_2_gameCommerce_backend}
						className={`img_projects_3  ${project == 2 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://github.com/OscarGomezL/gameCommerceBackend', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={440}
						height={286}
						priority={true}
						src={hovered ? ipad_2_gameCommerce_frontend_hovered : ipad_2_gameCommerce_frontend}
						className={`img_projects_3  ${project == 3 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://game-commerce.vercel.app/', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={440}
						height={286}
						priority={true}
						src={ipad_2_betterAmbience}
						className={`img_projects_3  ${project == 4 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://better-ambience.vercel.app/', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={440}
						height={286}
						priority={true}
						src={ipad_2_daysBetween_hovered}
						className={`img_projects_3  ${project == 5 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://days-between.vercel.app/', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
					<Image
						alt='snickers_image'
						width={440}
						height={286}
						priority={true}
						src={ipad_2_anotherPomodoro}
						className={`img_projects_3  ${project == 6 ? "img_projects_inited" : ""}`}
						onClick={()=>{window.open('https://another-pomodoro-app.vercel.app/', '_blank')}}
						onMouseEnter={()=>{setHovered(true)}}
						onMouseLeave={()=>{setHovered(false)}}
					/>
			</div>
		</div>
	)
}