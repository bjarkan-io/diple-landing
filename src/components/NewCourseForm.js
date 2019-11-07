import React, { useState } from "react"
import { Link } from "react-router-dom"

function NewCourseForm(props) {
	const [addInstructors, setAddInstructors] = useState(false)

	return (
		<div className='container'>
			<div className='field'>
				<label className='label'>Name your new course:</label>
				<div className='control'>
					<input className='input' type='text' placeholder='course name' />
				</div>
			</div>

			<div className='field'>
				<label className='label'>
					Write a description of the course - This will also be the pitch:
				</label>
				<div className='control'>
					<textarea className='textarea' placeholder='description'></textarea>
				</div>
			</div>

			<div className='field'>
				<label className='label'>Select a category:</label>
				<div className='control'>
					<div className='select'>
						<select>
							<option>Categories</option>
							<option>Full body</option>
							<option>Chest</option>
							<option>Back</option>
							<option>Legs</option>
							<option>Biceps</option>
							<option>Triceps</option>
							<option>Shoulders</option>
							<option>Cardio</option>
						</select>
					</div>
				</div>
			</div>

			<div className='field'>
				<button
					onClick={() => setAddInstructors(true)}
					className='button is-light'
				>
					Co-hosting
				</button>
				{addInstructors ? (
					<div className='field'>
						<label className='label'>Add other instructors:</label>
						<div className='control has-icons-left'>
							<input
								className='input'
								type='email'
								placeholder='Search instructors by email'
							/>
							<span className='icon is-small is-left'>
								<i className='fas fa-envelope'></i>
							</span>
						</div>
						<p className='help'>
							Add other instructors if you want to co-host your course.
						</p>
						<button
							onClick={() => setAddInstructors(false)}
							className='button is-danger'
						>
							Cancel
						</button>
					</div>
				) : null}
			</div>

			<div className='field'>
				<div className='control'>
					<label className='radio'>
						<input type='radio' name='question' />
						<br />
						Public
					</label>
					<label className='radio'>
						<input type='radio' name='question' />
						<br />
						Private
					</label>
				</div>
			</div>

			<div className='field'>
				<div className='control'>
					<label className='checkbox'>
						<input type='checkbox' />I agree to the{" "}
						<Link to='/legal/terms-and-conditions'>terms and conditions</Link>
					</label>
				</div>
			</div>

			<div className='field is-grouped'>
				<div className='control'>
					<button className='button is-primary'>Create</button>
				</div>
				<div className='control'>
					<button onClick={() => props.showForm()} className='button is-danger'>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}

export default NewCourseForm
