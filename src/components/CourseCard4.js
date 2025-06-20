import { Card, Button } from 'react-bootstrap';

export default function CourseCard4() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Mobile App Development with React Native</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>
                    Build cross-platform mobile apps using React Native. The course includes building UI components, managing app navigation, and integrating APIs for dynamic functionality.
                </Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>PhP 21,000</Card.Text>
                <Button variant="primary">Enroll</Button>
            </Card.Body>
        </Card>
    )
}