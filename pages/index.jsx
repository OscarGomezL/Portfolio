import Head from "next/head"
import React from "react"
import Hero from "../components/Hero/hero"

export default function Home() {
  return (
    <React.Fragment>
		<Head>
			<title>Óscar Gómez's Portfolio</title>
			<meta name="description" content="Óscar Gómez's Portfolio" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Hero/>
    </React.Fragment>
  )
}
