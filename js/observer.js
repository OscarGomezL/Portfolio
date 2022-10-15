export function aboutMeTitleObserver() {
	const observer = new IntersectionObserver(
		entries=>{
			document.querySelectorAll('.aboutMe_line').forEach(el=>{
				if(entries[0].isIntersecting) {
					el.classList.add('lines_inited')
					observer.unobserve(entries[0].target)
				}
			})
		},
	) 
	return observer 
}