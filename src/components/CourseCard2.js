import { Card, Button } from 'react-bootstrap';

export default function CourseCard2() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Data Science with Python</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>
                    Learn to analyze and visualize data using Python. Topics include data cleaning, exploratory data analysis, machine learning, and data visualization with libraries.
                </Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>PhP 14,000</Card.Text>
                <Button variant="primary">Enroll</Button>
            </Card.Body>
        </Card>
    )
}