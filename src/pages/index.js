import React from "react"
import HeroSection from "./../components/HeroSection"
import ClientsSection from "./../components/ClientsSection"
import FeaturesSection from "./../components/FeaturesSection"
import TestimonialsSection from "./../components/TestimonialsSection"
import NewsletterSection from "./../components/NewsletterSection"
import { useRouter } from "./../util/router.js"

function IndexPage(props) {
	const router = useRouter()

	return (
		<>
			<HeroSection
				color='white'
				size='medium'
				title='Find your perfect workout'
				subtitle="There's a lot of hard working instructors out there. Find your perfect match, and follow their routines."
				buttonText='Get Started'
				image='https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/fitness_tracker_3033.svg'
				buttonOnClick={() => {
					router.push("/pricing")
				}}
			/>
			<ClientsSection color='light' size='normal' title='' subtitle='' />
			<FeaturesSection
				color='white'
				size='medium'
				title='For you & me'
				subtitle='Get motivated, get fit. Diple makes it as easy as it gets.'
			/>
			<TestimonialsSection
				color='light'
				size='medium'
				title="Today's most viewed instructors"
				subtitle=''
			/>
			<NewsletterSection
				color='white'
				size='medium'
				title='Stay in the know'
				subtitle='Receive our latest articles and feature updates'
				buttonText='Subscribe'
				inputPlaceholder='Enter your email'
				subscribedMessage='You are now subscribed!'
			/>
		</>
	)
}

export default IndexPage
