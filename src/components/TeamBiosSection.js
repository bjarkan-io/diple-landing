import React from "react"
import Section from "./Section"
import SectionHeader from "./SectionHeader"
import TeamBios from "./TeamBios"

function TeamBiosSection(props) {
	return (
		<Section color={props.color} size={props.size}>
			<div className='container'>
				<SectionHeader
					title={props.title}
					subtitle={props.subtitle}
					centered={true}
					size={3}
				/>
				<TeamBios
					people={[
						{
							avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
							name: "Arne Molland",
							role: "CEO",
							bio:
								"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo.",
							twitterUrl: "https://twitter.com",
							facebookUrl: "https://facebook.com",
							linkedinUrl: "https://linkedin.com"
						},
						{
							avatar: "https://uploads.divjoy.com/pravatar-150x-68.jpeg",
							name: "Sebastian Berge",
							role: "CTO",
							bio:
								"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
							twitterUrl: "https://twitter.com",
							facebookUrl: "https://facebook.com",
							linkedinUrl: "https://linkedin.com"
						},
						{
							avatar: "https://uploads.divjoy.com/pravatar-150x-16.jpeg",
							name: "Simen Østensen",
							role: "CFO",
							bio:
								"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam! Labore reprehenderit beatae magnam animi!",
							twitterUrl: "https://twitter.com",
							facebookUrl: "https://facebook.com",
							linkedinUrl: "https://linkedin.com"
						}
					]}
				/>
			</div>
		</Section>
	)
}

export default TeamBiosSection
