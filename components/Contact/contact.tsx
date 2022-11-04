import Image from 'next/image'
import Link from 'next/link'
import git from '../../public/social/git.svg'
import linkedin from '../../public/social/linkedin.svg'
import mail from '../../public/social/mail.svg'

export default function Contact() {
	return (
		<section className="container contact">
			<div className="contact_title_container">
				<div className="contact_title">
					Contact
				</div>
			</div>
			<div className="contact_links">
					<Link href='https://github.com/OscarGomezL'>
						<a target='_blank'>
							<Image
								alt='github'
								width={130}
								height={130}
								priority={true}
								src={git}
								className="contact_links_1 contact_links_link"
							/>	
						</a>
					</Link>
					<Image
						alt='mail'
						width={130}
						height={130}
						priority={true}
						src={mail}
						className="contact_links_1 contact_links_link"
					/>
					<Link href='https://www.linkedin.com/in/oscargomezl/'>
						<a target="_blank">
							<Image
								alt='linkedin'
								width={130}
								height={130}
								priority={true}
								src={linkedin}
								className="contact_links_1 contact_links_link"
							/>
						</a>
					</Link>
			</div>
		</section>
	)
}