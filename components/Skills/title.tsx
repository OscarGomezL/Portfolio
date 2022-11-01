import { useEffect } from "react";
import useHandleScroll from "../../hooks/useHandleScroll";

export default function Title() {
	const [handleScroll,sp]: [((event:Event)=>void),number] = useHandleScroll()
	const styles = {
		transform: `translateX(calc(415% - ${sp * 6}%))`,
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
			if(result) {window.addEventListener('scroll', handleScroll)}
			else asyncCall()
		}
		asyncCall();
	}, [])
	return (
		<div className="skills_title" style={styles}>
			Skills
		</div>
	)
}