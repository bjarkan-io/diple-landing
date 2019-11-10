import React, { Fragment } from "react"
import ContentSection from "./../components/ContentSection"
import TeamBiosSection from "./../components/TeamBiosSection"

function AboutPage(props) {
	return (
		<Fragment>
			<ContentSection
				color='primary'
				size='large'
				title='Diple makes'
				subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum consequatur numquam aliquam tenetur ad amet inventore hic beatae, quas accusantium perferendis sapiente explicabo, corporis totam!'
			/>
			<TeamBiosSection
				color='white'
				size='medium'
				title='The Team behind Diple'
				subtitle=''
			/>
		</Fragment>
	)
}

export default AboutPage
