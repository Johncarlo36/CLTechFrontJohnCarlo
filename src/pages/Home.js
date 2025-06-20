import Banner from '../components/Banner';
import Highlights from '../components/Highlights';
import FeaturedCourses from '../components/FeaturedCourses';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

	const data = {
		title: "CLTech Coding Bootcamp",
		content: "Opportunities for everyone, everywhere",
		destination: "/courses",
		buttonLabel: "Enroll now!"
	};

	return (
		<div style={{
			minHeight: '100vh',
			background: 'linear-gradient(to right, #f8f9fa, #e0f7fa)',
			paddingTop: '40px',
			paddingBottom: '60px'
		}}>
			<Container>
				<Row className="justify-content-center mb-5">
					<Col xs={12} md={10}>
						<Card className="p-4 shadow border-0">
							<Banner data={data} />
						</Card>
					</Col>
				</Row>

				<Row className="justify-content-center mb-5">
					<Col xs={12} md={10}>
						<Card className="p-4 shadow border-0">
							<h2 className="text-primary mb-4 text-center">Featured Courses</h2>
							<FeaturedCourses />
						</Card>
					</Col>
				</Row>

				<Row className="justify-content-center">
					<Col xs={12} md={10}>
						<Card className="p-4 shadow border-0">
							<h2 className="text-success mb-4 text-center">Why Choose Us</h2>
							<Highlights />
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
