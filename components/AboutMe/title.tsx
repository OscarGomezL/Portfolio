import { aboutMeTitleObserver } from '../../js/observer.js'
import useHandleScroll from "../../hooks/useHandleScroll";
import useClientSide from "../../hooks/useClientSide.jsx";

export default function Title() {
	const [handleScroll,sp]: [((event:Event)=>void),number] = useHandleScroll()
	const styles = {
		transform: `translateX(calc(-150% + ${sp * 6}%))`,
	}
	useClientSide(()=>{
		const aboutMeTitle = document.querySelector('.aboutMe_title') as HTMLElement 
		aboutMeTitleObserver().observe(aboutMeTitle)
		window.addEventListener('scroll', handleScroll)
	})
	return (
		<div 
			className="aboutMe_title"
			style={styles}>
			About <br/>
			Me
		</div>
	)
}