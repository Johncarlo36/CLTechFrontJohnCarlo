// load modules that we will use from the react-bootstrap
// deconstruct modules if they come from the same package
/*
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
*/
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Banner({ data }) {

	const {title, content, destination, buttonLabel} = data;

	return (
		<Row>
			<Col className="text-center m-5 py-5">
				<h1>{title}</h1>
				<p>{content}</p>
				<Link className="btn btn-primary" to={destination}>{buttonLabel}</Link>
			</Col>
		</Row>
	)
}