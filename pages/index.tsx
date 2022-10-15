import Head from "next/head"
import React from "react"
import Hero from "../components/Hero/hero"
import AboutMe from "../components/AboutMe/aboutMe"
import Projects from "../components/Projects/projects"
import Skills from "../components/Skills/skills"
import Contact from "../components/Contact/contact"

export default function Home() {
	return (
    <React.Fragment>
		<Head>
			<title>Óscar Gómez's Portfolio</title>
			<meta name="description" content="Óscar Gómez's Portfolio" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Hero/>
		<AboutMe/>
		<Projects/>
		<Skills/>
		<Contact/>
    </React.Fragment>
  )
}
