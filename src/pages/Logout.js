import { useEffect, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import UserContext from '../context/UserContext';

export default function Logout() {
	const { setUser, unsetUser } = useContext(UserContext);
	const [loggedOut, setLoggedOut] = useState(false);

	useEffect(() => {
		unsetUser();
		setUser({ id: null, isAdmin: null });

		// Simulate logout delay
		const timer = setTimeout(() => {
			setLoggedOut(true);
		}, 2000); // 2 seconds

		return () => clearTimeout(timer);
	}, []);

	if (loggedOut) {
		return <Navigate to="/login" />;
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
					<Col xs={12} md={6} lg={4}>
						<Card className="text-center shadow-lg border-0">
							<Card.Body>
								<Spinner animation="border" variant="primary" className="mb-3" />
								<h4 className="fw-bold">Logging out...</h4>
								<p className="text-muted">Please wait while we redirect you.</p>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
