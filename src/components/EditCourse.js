import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Notyf } from 'notyf';

export default function EditCourse({ course, fetchData }) {

	const notyf = new Notyf();

	// state hook to fetch the course id
	const [courseId, setCourseId] = useState(course._id);

	// state hooks to store the details of the course
	const [name, setName] = useState(course.name);
	const [description, setDescription] = useState(course.description);
	const [price, setPrice] = useState(course.price);

	// state hook for opening/closing the modal
	const [showEdit, setShowEdit] = useState(false);

	const editOpen = () => {
		setShowEdit(true);
	}

	const editClose = () => {
		setShowEdit(false);
	}

	const editCourse = (e, courseId) => {

		e.preventDefault();

		fetch(`http://localhost:4000/courses/${courseId}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price
			})
		})
		.then(res => res.json())
		.then(data => {

			if(data.success === true) {

				notyf.success('Successfully Updated');
				editClose();
				fetchData();

			} else {

				notyf.error('Something went wrong. Please try again.');
				editClose();
				fetchData();
			}
		})
	}

	return (
		<>
			<Button variant="primary" size="sm" type="submit" className="mx-1" onClick={() => editOpen()}>Edit</Button>

			{/* show attribute - indiactes when our modal will be shown */}
			<Modal show={showEdit} onHide={editClose}>
				<Form onSubmit={(e) => editCourse(e, courseId)}>
			        <Modal.Header closeButton>
			          	<Modal.Title>Edit Course</Modal.Title>
			        </Modal.Header>
			        <Modal.Body>
			        	<Form.Group>
				        	<Form.Label>Name</Form.Label>
				        	<Form.Control type="text" required value={name} onChange={(e) => setName(e.target.value)}/>
			        	</Form.Group>

			        	<Form.Group>
				        	<Form.Label>Description</Form.Label>
				        	<Form.Control type="text" required value={description} onChange={(e) => setDescription(e.target.value)}/>
			        	</Form.Group>

			        	<Form.Group>
				        	<Form.Label>Price</Form.Label>
				        	<Form.Control type="number" required value={price} onChange={(e) => setPrice(e.target.value)}/>
			        	</Form.Group>
			        </Modal.Body>
			        <Modal.Footer>
			          	<Button variant="secondary" onClick={editClose}>Close</Button>
			          	<Button variant="success" type="submit">Save Changes</Button>
			        </Modal.Footer>
		        </Form>
		    </Modal>
		</>
	)
}