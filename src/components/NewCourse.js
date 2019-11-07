import React, { useEffect, useState, useCallback } from "react"
import "./NewCourse.scss"

import NewCourseForm from "./NewCourseForm"

function NewCourse() {
	const [newCourse, setNewCourse] = useState(false)
	const showForm = useCallback(() => setNewCourse(() => !newCourse), [
		newCourse,
		setNewCourse
	])

	return (
		<div className='newcourse'>
			<div className='container'>
				{newCourse ? null : (
					<button
						onClick={() => setNewCourse(true)}
						className='button is-primary'
					>
						New Course
					</button>
				)}
			</div>
			{newCourse ? (
				<NewCourseForm showForm={showForm} courseName='Course name:' />
			) : null}
		</div>
	)
}

export default NewCourse
