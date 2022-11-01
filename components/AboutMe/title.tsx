import { useEffect } from "react";
import { aboutMeTitleObserver } from '../../js/observer.js'
import useHandleScroll from "../../hooks/useHandleScroll";

export default function Title() {
	const [handleScroll,sp]: [((event:Event)=>void),number] = useHandleScroll()
	const styles = {
		transform: `translateX(calc(-150% + ${sp * 6}%))`,
	}

	useEffect(() => {
		async function waitForClientSide() {
			return new Promise(resolve => {
				if(typeof window !== "undefined") {
					resolve(true)
				}
				else {
					waitForClientSide()
				}
			});
		}
		async function asyncCall() {
			const result = await waitForClientSide();
			if(result) {
				window.addEventListener('scroll', handleScroll)
				const aboutMeTitle = document.querySelector('.aboutMe_title') as HTMLElement 
				aboutMeTitleObserver().observe(aboutMeTitle)
			}
			else asyncCall()
		}
		asyncCall();
	}, [])
	return (
		<div 
			className="aboutMe_title"
			style={styles}>
			About <br/>
			Me
		</div>
	)
}