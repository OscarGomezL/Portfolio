import { useEffect } from "react";

export default function useClientSide(resultFunction:()=>any) {
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
			if(result) resultFunction()
			else asyncCall()
		}
		asyncCall();
	}, [])
}