import { useState, useEffect } from "react";
import { aboutMeTitleObserver } from '../../js/observer.js'

export default function Title() {
	const [sp, setSp] = useState(0)
	const styles = {
		transform: `translateX(calc(-150% + ${sp * 6}%))`,
	}
	function handleScroll(event:{[key:string]:any}) { 
		const { body, documentElement } = event.srcElement;
		const scrollDistance:number = Math.max(body.scrollTop, documentElement.scrollTop);
		const scrollPercentage:number = (scrollDistance / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
		setSp(scrollPercentage)
		let bodyTag = document.querySelector('body') as HTMLElement;
		if(scrollPercentage <= 10) bodyTag.style.background = 'var(--n4)';
		else if(scrollPercentage <= 85) bodyTag.style.background = 'var(--n2)';
		else if(scrollPercentage <= 100) bodyTag.style.background = 'black';
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