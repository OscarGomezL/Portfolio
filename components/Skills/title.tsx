import { useEffect } from "react";
import useHandleScroll from "../../hooks/useHandleScroll";
import useClientSide from "../../hooks/useClientSide";

export default function Title() {
	const [handleScroll,sp]: [((event:Event)=>void),number] = useHandleScroll()
	const styles = {
		transform: `translateX(calc(415% - ${sp * 6}%))`,
	}
	useClientSide(()=> window.addEventListener('scroll', handleScroll))
	return (
		<div className="skills_title" style={styles}>
			Skills
		</div>
	)
}