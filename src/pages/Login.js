import { useState, useEffect, useContext } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import UserContext from '../context/UserContext';

export default function Login() {
	const { user, setUser } = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isActive, setIsActive] = useState(true);

	function authenticate(e) {
		e.preventDefault();

		fetch('http://localhost:4000/users/login', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password })
		})
		.then(res => res.json())
		.then(data => {
			if (data.access !== undefined) {
				localStorage.setItem('token', data.access);
				retrieveUserDetails(data.access);
				setEmail('');
				setPassword('');
				alert(`You are now logged in`);
			} else if (data.message === "Incorrect email or password") {
				alert("Incorrect email or password");
			} else {
				alert(`${email} does not exist`);
			}
		});
	}

	function retrieveUserDetails(token) {
		fetch('http://localhost:4000/users/details', {
			headers: { Authorization: `Bearer ${token}` }
		})
		.then(res => res.json())
		.then(data => {
			setUser({ id: data._id, isAdmin: data.isAdmin });
		});
	}

	useEffect(() => {
		setIsActive(email !== '' && password !== '');
	}, [email, password]);

	if (user.id !== null) {
		return <Navigate to="/courses" />;
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
					<Col xs={12} md={6} lg={5}>
						<Card className="shadow border-0">
							<Card.Body>
								<h2 className="text-center mb-4 text-primary fw-bold">Login</h2>
								<Form onSubmit={authenticate}>
									<Form.Group className="mb-3">
										<Form.Label>Email address</Form.Label>
										<Form.Control
											type="email"
											placeholder="Enter email"
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</Form.Group>

									<Form.Group className="mb-4">
										<Form.Label>Password</Form.Label>
										<Form.Control
											type="password"
											placeholder="Enter password"
											required
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</Form.Group>

									<div className="d-grid">
										<Button
											variant={isActive ? "primary" : "secondary"}
											type="submit"
											disabled={!isActive}
										>
											Login
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
