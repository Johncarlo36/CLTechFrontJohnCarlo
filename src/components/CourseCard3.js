import { Card, Button } from 'react-bootstrap';

export default function CourseCard3() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Figma Design Fundamentals</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>
                    Understand the principles of user experience and user interface design. This course covers wireframing, prototyping, and tools like Figma to create engaging user experiences.
                    </Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>PhP 20,000</Card.Text>
                <Button variant="primary">Enroll</Button>
            </Card.Body>
        </Card>
    )
}