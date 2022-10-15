import { useState, useEffect } from "react";
import { aboutMeTitleObserver } from '../../js/observer.js'

export default function Title() {
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
		>
			About <br/>
			Me
		</div>
	)
}