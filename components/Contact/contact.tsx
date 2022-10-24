import Image from 'next/future/image'
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
					<Image
						width={130}
						height={130}
						priority={true}
						src={git}
						className="contact_links_1 contact_links_link"
					/>	
					<Image
						width={130}
						height={130}
						priority={true}
						src={mail}
						className="contact_links_1 contact_links_link"
					/>	
					<Image
						width={130}
						height={130}
						priority={true}
						src={linkedin}
						className="contact_links_1 contact_links_link"
					/>
			</div>
		</section>
	)
}