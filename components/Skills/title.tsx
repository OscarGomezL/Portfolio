import useHandleScroll from "../../hooks/useHandleScroll";
import useClientSide from "../../hooks/useClientSide";
import { skillsTitleObserver} from "../../js/observer";

export default function Title() {
	const [handleScroll,sp]: [((event:Event)=>void),number] = useHandleScroll()
	const styles = {
		transform: `translateX(calc(415% - ${sp * 6}%))`,
	}
	useClientSide(()=> {
		window.addEventListener('scroll', handleScroll)
		const skillsTitle = document.querySelector('.skills_title') as HTMLElement 
		skillsTitleObserver().observe(skillsTitle)
	})
	return (
		<div className="skills_title" style={styles}>
			Skills
		</div>
	)
}