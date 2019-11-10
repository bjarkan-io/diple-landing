import React, { useEffect } from "react"
import { useAuth } from "./../util/auth.js"
import { useRouter } from "./../util/router.js"

function ProfilePage(props) {
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
		<div className='container'>
			<div class='columns'>
				<div class='column is-one-fifth'>
					Name comes here you now! where are you
				</div>
			</div>
			<div class='columns is-mobile is-centered'>
				<div className='column is-half'>
					<div class='message is-danger'>
						<div className='message-header'>Delete my account</div>
						<div className='message-body'>
							<p>
								It's no-one's business why you choose to leave Diple. However,
								once you delete your account, there is no going back. Please
								take a break and think hard before you go through this "no going
								back" event.
							</p>
							<div className='control'>
								<label className='radio'>
									<input type='radio' name='understood' />
									<span
										style={{ marginLeft: "5px" }}
										className='has-text-black-bis'
									>
										I understand that after ereasing the account, it's deleted
										for ever.
									</span>
								</label>
							</div>
							<button className='button is-danger is-outlined'>
								<span>Delete</span>
								<span className='icon is-small'>
									<i className='fas fa-times'></i>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfilePage
