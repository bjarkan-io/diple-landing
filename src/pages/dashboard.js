import React, { useEffect } from "react"
import DashboardSection from "./../components/DashboardSection"
import NewCourse from "./../components/NewCourse"
import { useAuth } from "./../util/auth.js"
import { useRouter } from "./../util/router.js"

function DashboardPage(props) {
	const auth = useAuth()
	const router = useRouter()

	// Redirect to signin
	// if not signed in.
	useEffect(() => {
		if (auth.user === false) {
			router.push("/signin")
		}
	}, [auth, router])

	return (
		<React.Fragment>
			<DashboardSection
				color='white'
				size='large'
				title='Dashboard'
				subtitle='You have no current courses.'
			/>
			<NewCourse />
		</React.Fragment>
	)
}

export default DashboardPage
