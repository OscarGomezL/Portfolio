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

