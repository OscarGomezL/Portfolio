import { useState } from "react";

export default function useHandleScroll():[(event:any)=>void, number] {
	const [sp, setSp] = useState(0)
	const handleScroll = function(event:any):void {
		const { body, documentElement  } = event.target;
		const scrollPercentage:number = (Math.max(body.scrollTop, documentElement.scrollTop) / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
		setSp(scrollPercentage)
	}
	return [handleScroll, sp]
}

/*
	let bodyTag = document.querySelector('body') as HTMLElement;
	if(scrollPercentage <= 10) bodyTag.style.background = 'var(--n4)';
	else if(scrollPercentage <= 85) bodyTag.style.background = 'var(--n2)';
	else if(scrollPercentage <= 100) bodyTag.style.background = 'black';
*/