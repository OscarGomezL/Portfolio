export default function getProjects() {
	return ( 
		{
			1:{
				number:"01",
				info: {
					title: "Snickers",
					technologies: ["Html","Bootstrap","Css"],
					description: "Snickers Arcade is a project in which I participated while working in Accenture. Snickers made a campaign in my country for which I worked along with my team developing the frontend of the software they used for the giveaway promotion.",
				},
				title:"Frontend"
			},
			2:{
				number:"02",
				info: {
					title: "GameCommerce API",
					technologies: ["Node","Express","Mongoose","Mongo"],
					description: "GameCommerce, from the backend perspective, is an API based on n-layer arquitecture with: Stripe Implementation, JWT token authentification, CRUD and all the necessities of an ecommerce backend"
				},
				title:"Backend"
			},
			3:{
				number:"03",
				info: {
					title: "GameCommerce",
					technologies: ["Next","Redux", "Typescript"],
					description: "GameCommerce, from the frontend perspective, is a software I made to give use to the backend I created, it makes use of all the functionalities including log ups, log ins, authentication processes, stripe interactions, data and images fetching, and more",
				},
				title:"Frontend"
			},
			4:{
				number:"04",
				info: {
					title: "BetterAmbience",
					technologies: ["Next","Use-Sound"],
					description: "BetterAmbience was my first project ever, betterAmbience is a software designed to improve your experiencie with relaxating sounds of the users preference. The user could combine sounds and adjust the volume at will.",
				},
				title:"Frontend"
			},
			5:{
				number:"05",
				info: {
					title: "DaysBetween",
					technologies: ["Next","Use-Sound"],
					description: "DaysBetween is a simple software which ease the process of calculating the time between two given dates.The design is simple and the concept is aswell, but it was a good introduction to nextjs" ,
				},
				title:"Frontend"
			},
			6:{
				number:"06",
				info: {
					title: "AnotherPomodoroApp",
					technologies: ["Next","Redux"],
					description: "AnotherPomodoroApp is a web pomodoro timer software, a pretty simple application which I made to practice browser-side API's and global state using redux with nextjs",
				},
				title:"Frontend"
			},
		}
	)
}