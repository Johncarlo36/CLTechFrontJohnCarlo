// useState is a react hook component that will be used to store the state of a data
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/*
    props = {
        courseProp = {id: 'wdc001', name: 'PHP - Laravel', description: 'Nostrud velit dolor excepteur ullamco consectetur …uat nostrud id nostrud sint sint deserunt dolore.', price: 45000, onOffer: true}
    }
*/
/*
    courseProp = {id: 'wdc001', name: 'PHP - Laravel', description: 'Nostrud velit dolor excepteur ullamco consectetur …uat nostrud id nostrud sint sint deserunt dolore.', price: 45000, onOffer: true}
*/
export default function CourseCard({ courseProp }) {

    // deconstruct the course properties into their own variables
    const { _id, name, description, price } = courseProp;

    /*
        Syntax:
            const [getter, setter] = useState(initialGetterValue);

        getter - variable that will hold the information. This is essentially used for getting the data stored.
        setter - function to store data in the getter variable.
    */
    // const [count, setCount] = useState(0);

    // Function that keeps track of the enrollees for a course
    /*
    function enroll() {
        // By default JavaScript is synchronous it executes code from the top of the file all the way to the bottom and will wait for the completion of one expression before it proceeds to the next
        // The setter function for useStates are asynchronous allowing it to execute separately from other codes in the program
        // setCount() is a setter function that will increase the value of count by 1
        // setCount(count + 1)
        setCount(count + 1);
        console.log(`Enrollees: ${count}`);
    }
    */

    return (
        <Card className="my-3 p-3 text-center">
            <Card.Body>
                <Card.Title className="mb-3">{name}</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>{price}</Card.Text>
                {/*
                <Card.Subtitle>Enrollees:</Card.Subtitle>
                <Card.Text>{count}</Card.Text>
                */}
                {/* onClick attribute that will perform a specific event when the button is clicked */}
                {/*<Button variant="primary" onClick={enroll}>Enroll</Button>*/}
                <Link className="btn btn-primary" to={`/courses/${_id}`}>Details</Link>
            </Card.Body>
        </Card>
    )
}
