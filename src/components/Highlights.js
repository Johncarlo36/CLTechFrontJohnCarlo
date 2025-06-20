import { Row, Col, Card } from 'react-bootstrap';

export default function Highlights() {
	return (
		<Row className="my-5">

		    <Col xs={12} md={4}>
		        <Card className="cardHighlight p-3">
		            <Card.Body>
		                <Card.Title>
		                    <h2>Learn from Home</h2>
		                </Card.Title>
		                <Card.Text>
							Access quality education anytime, anywhere with flexible online courses designed to fit your schedule and lifestyle.
		                </Card.Text>
		            </Card.Body>
		        </Card>
		    </Col>

		    <Col xs={12} md={4}>
		        <Card className="cardHighlight p-3">
		            <Card.Body>
		                <Card.Title>
		                    <h2>Study Now, Pay Later</h2>
		                </Card.Title>
		                <Card.Text>
							Invest in your future with our budget-friendly "study now, pay later" program, making education accessible to everyone.
		                </Card.Text>
		            </Card.Body>
		        </Card>
		    </Col>
		    
		    <Col xs={12} md={4}>
		        <Card className="cardHighlight p-3">
		            <Card.Body>
		                <Card.Title>
		                    <h2>Be Part of Our Community</h2>
		                </Card.Title>
		                <Card.Text>
							Join a thriving network of learners and mentors who are passionate about growth, collaboration, and lifelong learning.
		                </Card.Text>
		            </Card.Body>
		        </Card>
		    </Col>
		</Row>
	)
}