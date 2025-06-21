import { useState, useEffect } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

export default function Register() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [mobileNo, setMobileNo] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (
			firstName &&
			lastName &&
			email &&
			mobileNo.length === 11 &&
			password &&
			confirmPassword &&
			password === confirmPassword
		) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [firstName, lastName, email, mobileNo, password, confirmPassword]);

	function registerUser(e) {
		e.preventDefault();

		fetch('https://cltechbackjohncarlo-1.onrender.com/users/register', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				mobileNo,
				password
			})
		})
		.then(res => res.json())
		.then(data => {
			if (data.message === 'User registered successfully') {
				alert('Registration Successful');
				setFirstName('');
				setLastName('');
				setEmail('');
				setMobileNo('');
				setPassword('');
				setConfirmPassword('');
			} else {
				alert(data.message || 'Registration failed.');
			}
		})
		.catch(err => {
			console.error('Registration error:', err);
			alert('Something went wrong while registering.');
		});
	}

	return (
		<div style={{
			minHeight: '100vh',
			background: 'linear-gradient(to right, #667eea, #764ba2)',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '20px'
		}}>
			<Container>
				<Row className="justify-content-center">
					<Col xs={12} md={7} lg={6}>
						<Card className="shadow-lg border-0">
							<Card.Body>
								<h2 className="text-center mb-4 text-primary fw-bold">Register</h2>
								<Form onSubmit={registerUser}>
									<Form.Group className="mb-3">
										<Form.Label>First Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter First Name"
											required
											value={firstName}
											onChange={e => setFirstName(e.target.value)}
										/>
									</Form.Group>

									<Form.Group className="mb-3">
										<Form.Label>Last Name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Enter Last Name"
											required
											value={lastName}
											onChange={e => setLastName(e.target.value)}
										/>
									</Form.Group>

									<Form.Group className="mb-3">
										<Form.Label>Email</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter Email"
											required
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</Form.Group>

									<Form.Group className="mb-3">
										<Form.Label>Mobile No.</Form.Label>
										<Form.Control
											type="number"
											placeholder="Enter 11 Digit No."
											required
											value={mobileNo}
											onChange={e => setMobileNo(e.target.value)}
										/>
									</Form.Group>

									<Form.Group className="mb-3">
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Enter Password"
											required
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</Form.Group>

									<Form.Group className="mb-4">
										<Form.Label>Confirm Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Confirm Password"
											required
											value={confirmPassword}
											onChange={e => setConfirmPassword(e.target.value)}
										/>
									</Form.Group>

									<div className="d-grid">
										<Button
											variant={isActive ? "primary" : "secondary"}
											type="submit"
											disabled={!isActive}
										>
											Register
										</Button>
									</div>
								</Form>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
