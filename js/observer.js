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
export function skillsTitleObserver() {
	const observer = new IntersectionObserver(
		entries=>{
			document.querySelectorAll('.skill_image').forEach(el=>{
				if(entries[0].isIntersecting) {
					el.classList.add('image_inited')
				}
			})
			document.querySelectorAll('.skills_description_1').forEach(el=>{
				if(entries[0].isIntersecting) {
					el.classList.add('description_inited')
				}
			})
			document.querySelectorAll('.skills_description_2').forEach(el=>{
				if(entries[0].isIntersecting) {
					el.classList.add('description_inited')
					observer.unobserve(entries[0].target)
				}
			})
		}
	) 
	return observer 
}
