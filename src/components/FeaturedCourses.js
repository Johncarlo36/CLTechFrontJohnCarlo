import { useState, useEffect } from 'react';
import { CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PreviewCourses from './PreviewCourses';

export default function FeaturedCourses() {

	// state hook will contain the individual preview courses card in the page
	const [previews, setPreviews] = useState([]);

	useEffect(() => {

		fetch('http://localhost:4000/courses/')
		.then(res => res.json())
		.then(data => {

			// this will contain the array of random numbers
			const numbers = [];
			// this will contain the array of previewCourses cards
			const featured = [];

			// this function will generate a random number
			const generateRandomNumber = () => {
				let randomNum = Math.floor(Math.random() * data.length)

				// if the randomNum is not found in the numbers array
				if(numbers.indexOf(randomNum) === -1) {
					numbers.push(randomNum)

				// else, the randomNum is found in the number array
				} else {
					generateRandomNumber()
				}
			}

			// the for loop will run for 5 times which will retrieve 5 numbers
			for(let i = 0; i < 5; i++) {
				generateRandomNumber()

				featured.push(<PreviewCourses data={data[numbers[i]]} key={data[numbers[i]]._id} breakPoint={2} />)
			}

			setPreviews(featured);

		})
	}, [])

	return (
		<>
		<h2 className="text-center mb-5">Featured Courses</h2>
		<CardGroup className="justify-content-center">
			{previews}
		</CardGroup>
		</>
	)
}