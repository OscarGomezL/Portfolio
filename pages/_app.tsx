import '../styles/reset.css'
import '../styles/general.css'
import '../styles/variables.css'
import '../styles/fonts.css'
import '../styles/animations.css'
import '../styles/Hero/hero.css'
import '../styles/About Me/aboutMe.css'
import '../styles/projects/projects.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }:AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
